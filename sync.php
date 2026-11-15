<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$room = isset($_GET['room']) ? preg_replace('/[^a-zA-Z0-9_-]/', '', $_GET['room']) : 'nea-gamers-2026';
if (!$room) {
    $room = 'nea-gamers-2026';
}

$stateFile = __DIR__ . '/room_' . $room . '.json';

// Detectar IP LAN real (Wi-Fi / Red con puerta de enlace) evitando adaptadores virtuales como VirtualBox (192.168.56.1)
function detectRealLanIp() {
    // 1. Consultar la tabla de enrutamiento del sistema mediante socket UDP sin enviar tráfico
    $sock = @stream_socket_client('udp://8.8.8.8:53', $errno, $errstr, 1);
    if ($sock) {
        $localName = @stream_socket_get_name($sock, false);
        @fclose($sock);
        if ($localName) {
            $parts = explode(':', $localName);
            $candidate = $parts[0];
            if (filter_var($candidate, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4) && $candidate !== '127.0.0.1' && strpos($candidate, '192.168.56.') !== 0) {
                return $candidate;
            }
        }
    }

    // 2. Fallback: revisar todas las IPv4 del host priorizando redes Wi-Fi/LAN domésticas y excluyendo VirtualBox (192.168.56.x)
    $hostName = gethostname();
    if ($hostName) {
        $ips = @gethostbynamel($hostName);
        if (is_array($ips)) {
            foreach ($ips as $ip) {
                if ($ip !== '127.0.0.1' && strpos($ip, '192.168.56.') !== 0 && strpos($ip, '169.254.') !== 0) {
                    return $ip;
                }
            }
            foreach ($ips as $ip) {
                if ($ip !== '127.0.0.1') {
                    return $ip;
                }
            }
        }
    }
    return '';
}

$lanIp = detectRealLanIp();
$publicUrl = '';

function normalizeStateForJson($st) {
    if (!is_array($st)) {
        $st = [];
    }
    $openedSurveys = isset($st['openedSurveys']) && is_array($st['openedSurveys']) ? $st['openedSurveys'] : [];
    $users = isset($st['users']) && is_array($st['users']) ? $st['users'] : [];
    $responses = isset($st['responses']) && is_array($st['responses']) ? $st['responses'] : [];

    return [
        'currentSlide' => isset($st['currentSlide']) ? (int)$st['currentSlide'] : 0,
        'slideSeq' => isset($st['slideSeq']) ? (int)$st['slideSeq'] : 0,
        'revealAnswers' => !empty($st['revealAnswers']),
        'openedSurveys' => (object)$openedSurveys,
        'users' => (object)$users,
        'responses' => (object)$responses,
        'updatedAt' => isset($st['updatedAt']) ? (float)$st['updatedAt'] : 0
    ];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw, true);
    if (is_array($payload)) {
        $fp = @fopen($stateFile, 'c+');
        $current = [
            'currentSlide' => 0,
            'slideSeq' => 0,
            'revealAnswers' => false,
            'openedSurveys' => [],
            'users' => [],
            'responses' => [],
            'updatedAt' => 0
        ];

        if ($fp) {
            @flock($fp, LOCK_EX);
            $contents = stream_get_contents($fp);
            if ($contents) {
                $decoded = json_decode($contents, true);
                if (is_array($decoded)) {
                    $current = array_merge($current, $decoded);
                }
            }
        } elseif (file_exists($stateFile)) {
            $decoded = json_decode(@file_get_contents($stateFile), true);
            if (is_array($decoded)) {
                $current = array_merge($current, $decoded);
            }
        }

        if (!isset($current['openedSurveys']) || !is_array($current['openedSurveys'])) {
            $current['openedSurveys'] = [];
        }
        if (!isset($current['users']) || !is_array($current['users'])) {
            $current['users'] = [];
        }
        if (!isset($current['responses']) || !is_array($current['responses'])) {
            $current['responses'] = [];
        }

        $nowMs = round(microtime(true) * 1000);

        // Soportar actualización completa o parcial por acciones
        if (isset($payload['action'])) {
            $action = $payload['action'];
            if ($action === 'set_slide' && isset($payload['currentSlide'])) {
                $current['currentSlide'] = (int)$payload['currentSlide'];
                $incomingSeq = isset($payload['slideSeq']) ? (int)$payload['slideSeq'] : 0;
                $current['slideSeq'] = max(((int)($current['slideSeq'] ?? 0)) + 1, $incomingSeq);
                $current['revealAnswers'] = !empty($payload['revealAnswers']);
                if (!empty($payload['resetSlideId'])) {
                    $rSid = preg_replace('/[^a-zA-Z0-9_-]/', '', $payload['resetSlideId']);
                    unset($current['openedSurveys'][$rSid]);
                }
                if (!empty($payload['prevSlideId'])) {
                    $pSid = preg_replace('/[^a-zA-Z0-9_-]/', '', $payload['prevSlideId']);
                    unset($current['openedSurveys'][$pSid]);
                }
                if (!empty($payload['autoOpenSlideId'])) {
                    $aSid = preg_replace('/[^a-zA-Z0-9_-]/', '', $payload['autoOpenSlideId']);
                    $current['openedSurveys'][$aSid] = $nowMs;
                }
                $current['updatedAt'] = $nowMs;
            } elseif ($action === 'open_survey' && isset($payload['slideId'])) {
                $sid = preg_replace('/[^a-zA-Z0-9_-]/', '', $payload['slideId']);
                $current['openedSurveys'][$sid] = $nowMs;
                $incomingSeq = isset($payload['slideSeq']) ? (int)$payload['slideSeq'] : 0;
                $current['slideSeq'] = max(((int)($current['slideSeq'] ?? 0)) + 1, $incomingSeq);
                $current['updatedAt'] = $nowMs;
            } elseif ($action === 'join_user' && isset($payload['user'])) {
                $uid = $payload['user']['id'];
                $existingScore = isset($current['users'][$uid]['score']) ? (int)$current['users'][$uid]['score'] : 0;
                $current['users'][$uid] = array_merge($payload['user'], [
                    'score' => max($existingScore, isset($payload['user']['score']) ? (int)$payload['user']['score'] : 0),
                    'lastSeen' => $nowMs
                ]);
                $current['updatedAt'] = $nowMs;
            } elseif ($action === 'submit_response' && isset($payload['slideId'], $payload['userId'], $payload['response'])) {
                $slideId = $payload['slideId'];
                $userId = $payload['userId'];
                if (!isset($current['responses'][$slideId]) || !is_array($current['responses'][$slideId])) {
                    $current['responses'][$slideId] = [];
                }
                $current['responses'][$slideId][$userId] = $payload['response'];
                if (isset($payload['scoreDelta']) && isset($current['users'][$userId])) {
                    $current['users'][$userId]['score'] = (int)($current['users'][$userId]['score'] ?? 0) + (int)$payload['scoreDelta'];
                    $current['users'][$userId]['answersCount'] = (int)($current['users'][$userId]['answersCount'] ?? 0) + 1;
                }
                $current['updatedAt'] = $nowMs;
            } elseif ($action === 'full_sync' && isset($payload['state']) && is_array($payload['state'])) {
                $incomingState = $payload['state'];
                $incSeq = isset($incomingState['slideSeq']) ? (int)$incomingState['slideSeq'] : 0;
                $curSeq = isset($current['slideSeq']) ? (int)$current['slideSeq'] : 0;
                if ($incSeq < $curSeq) {
                    $incomingState['currentSlide'] = $current['currentSlide'];
                    $incomingState['slideSeq'] = $curSeq;
                    $incomingState['openedSurveys'] = $current['openedSurveys'];
                }
                $current = array_merge($current, $incomingState);
                $current['updatedAt'] = $nowMs;
            } elseif ($action === 'reset_room') {
                $nextSeq = ((int)($current['slideSeq'] ?? 0)) + 1;
                $current = [
                    'currentSlide' => 0,
                    'slideSeq' => $nextSeq,
                    'revealAnswers' => false,
                    'openedSurveys' => [],
                    'users' => [],
                    'responses' => [],
                    'updatedAt' => $nowMs
                ];
            }
        }

        $normalized = normalizeStateForJson($current);
        $jsonOut = json_encode($normalized, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

        if ($fp) {
            @ftruncate($fp, 0);
            @rewind($fp);
            @fwrite($fp, $jsonOut);
            @fflush($fp);
            @flock($fp, LOCK_UN);
            @fclose($fp);
        } else {
            @file_put_contents($stateFile, $jsonOut, LOCK_EX);
        }

        echo json_encode([
            'ok' => true,
            'state' => $normalized,
            'serverNow' => $nowMs
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }
}

$state = [
    'currentSlide' => 0,
    'slideSeq' => 0,
    'revealAnswers' => false,
    'openedSurveys' => [],
    'users' => [],
    'responses' => [],
    'updatedAt' => 0
];

if (file_exists($stateFile)) {
    $fp = @fopen($stateFile, 'r');
    if ($fp) {
        @flock($fp, LOCK_SH);
        $contents = stream_get_contents($fp);
        @flock($fp, LOCK_UN);
        @fclose($fp);
        $decoded = json_decode($contents, true);
        if (is_array($decoded)) {
            $state = array_merge($state, $decoded);
        }
    }
}

$normalizedState = normalizeStateForJson($state);

echo json_encode([
    'ok' => true,
    'lanIp' => $lanIp,
    'publicUrl' => $publicUrl,
    'serverNow' => round(microtime(true) * 1000),
    'state' => $normalizedState
], JSON_UNESCAPED_UNICODE);

