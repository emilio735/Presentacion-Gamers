/**
 * Presentación Web Interactiva — Cultura y Comunicación Contemporánea
 * Investigación Antropológica: La Subcultura Gamer en el NEA
 * Instituto Superior Carmen Molina de Llano
 * Grupo: 5to Elemento | Alumnos: Matías Toledo, Emilio Thorlet, Mirko, Ignacio
 */

const SLIDES_DATA = [
  {
    id: "slide-0",
    number: 0,
    shortTitle: "Acceso QR y Sala en Vivo",
    type: "cover",
    institution: {
      title: "TRABAJO INTEGRADOR FINAL GRUPAL",
      subtitle: "Cultura y Comunicación Contemporánea",
      topic: "Investigación Antropológica: La Subcultura Gamer en el NEA",
      table: [
        ["Instituto:", "Instituto Superior Carmen Molina de Llano"],
        ["Carrera:", "Tecnicatura Superior en Desarrollo de Software"],
        ["Materia / Profesora:", "Cultura y Comunicación Contemporánea — Lic. Beatriz Cabrera"],
        ["Alumnos / Integrantes:", "Matías Toledo, Emilio Thorlet, Mirko, Ignacio"],
        ["Fecha de Presentación:", "23 de Noviembre de 2026"]
      ]
    },
    interaction: null
  },
  {
    id: "slide-1",
    number: 1,
    shortTitle: "Portada Institucional",
    type: "cover-institutional",
    institution: {
      title: "TRABAJO INTEGRADOR FINAL GRUPAL",
      subtitle: "Cultura y Comunicación Contemporánea",
      topic: "Investigación Antropológica: La Subcultura Gamer en el NEA",
      table: [
        ["Instituto:", "Instituto Superior Carmen Molina de Llano"],
        ["Carrera:", "Tecnicatura Superior en Desarrollo de Software"],
        ["Materia / Profesora:", "Cultura y Comunicación Contemporánea — Lic. Beatriz Cabrera"],
        ["Alumnos / Integrantes:", "Matías Toledo, Emilio Thorlet, Mirko Lotoski, Ignacio Romero"],
        ["Fecha de Presentación:", "17/18 de Noviembre de 2026"]
      ]
    },
    interaction: null
  },
  {
    id: "slide-2",
    number: 2,
    shortTitle: "Índice e Introducción",
    type: "content",
    sectionTitle: "ÍNDICE Y 1. INTRODUCCIÓN",
    indexItems: [
      { text: "1. INTRODUCCIÓN", indent: false },
      { text: "2. DESARROLLO", indent: false },
      { text: "2.1. Investigación Antropológica de la Subcultura Gamer en el NEA", indent: true },
      { text: "2.2. Herramientas del Método Antropológico Aplicadas y Justificación ", indent: true },
      { text: "2.3. Estudio Comparativo con Otras Tribus, Razas o Etnias de la Región ", indent: true },
      { text: "2.4. Características e Identidad del Grupo y Construcción de Identidad Social", indent: true },
      { text: "2.5. Desarrollo Cultural, Presencia Local e Influencia Posmoderna ", indent: true },
      { text: "2.6. Análisis del Grado de Existencia de Pensamiento Racista: Interno y Externo ", indent: true },
      { text: "2.7. Nivel de Inclusión y Exclusión en los Estratos Socioculturales del NEA ", indent: true },
      { text: "3. CONCLUSIÓN · 4. BIBLIOGRAFÍA · 5. ANEXOS", indent: false }
    ],
    paragraphs: [
      "El presente trabajo integrador de investigación antropológica aborda el estudio integral de la subcultura gamer dentro del marco sociocultural de las provincias del Nordeste Argentino (NEA). Los videojuegos han dejado de concebirse como una mera actividad de ocio individual aislada para transformarse en un escenario complejo de interacción social, construcción de identidades y sentido de pertenencia transgeneracional.",
      "Partiendo de la evolución histórica del colectivo gamer —desde las salas recreativas en los años 70 y las consolas hogareñas en los 80, hasta la masificación de las redes globales de juego y los eSports contemporáneos—, este trabajo explora exhaustivamente cómo los jóvenes de nuestra región reconfiguran estas dinámicas a través del marco teórico de la Antropología Cultural y la Comunicación Contemporánea."
    ],
    interaction: {
      id: "q-intro-poll",
      kind: "poll",
      badge: "Encuesta Inicial en Vivo",
      points: 50,
      question: "¿Cómo percibís hoy a los videojuegos dentro de la cultura contemporánea del NEA?",
      options: [
        "Un espacio legítimo de interacción social y construcción de identidad",
        "Una actividad de entretenimiento y desconexión cotidiana",
        "Una disciplina competitiva (eSports) y creación de contenido",
        "Un fenómeno tecnológico aún incomprendido por generaciones mayores"
      ]
    }
  },
  {
    id: "slide-2-results",
    number: 3,
    shortTitle: "Resultados Encuesta Inicial",
    type: "poll-results",
    sourceSlideId: "slide-2",
    sectionTitle: "RESULTADOS DE LA ENCUESTA INICIAL EN TIEMPO REAL",
    subSectionTitle: "Percepción de los videojuegos en la cultura contemporánea del NEA",
    interaction: null
  },
  {
    id: "slide-3",
    number: 4,
    shortTitle: "2.1 Evolución Gamer",
    type: "content",
    sectionTitle: "2. DESARROLLO",
    subSectionTitle: "2.1. Investigación Antropológica de la Subcultura Gamer en el NEA",
    paragraphs: [
      "Para investigar la subcultura gamer en las provincias del NEA desde el método antropológico, se analiza su proceso cultural a través de su trayectoria y evolución tecnológica:"
    ],
    bullets: [
      {
        lead: "Inicios en salas recreativas (década de 1970):",
        text: "Espacios públicos donde surgieron las primeras máquinas arcade (Pong, Pac-Man), constituyendo el primer fenómeno de reunión social presencial y competencia local en torno a las pantallas."
      },
      {
        lead: "Llegada de las consolas domésticas (décadas de 1980 y 1990):",
        text: "La masificación de consolas como Atari 2600 trasladó la experiencia de juego al hogar, transformando la interacción familiar y social directa."
      },
      {
        lead: "Conectividad global, eSports y redes sociales (década de 1990 al presente):",
        text: "La irrupción de Internet posibilitó el juego multijugador global y la profesionalización competitiva (eSports como League of Legends o Dota 2), además de plataformas como Twitch y YouTube para compartir partidas y formar comunidades vibrantes."
      }
    ],
    interaction: {
      id: "q-consigna-1",
      kind: "mcq",
      badge: "Opción Múltiple · +100 pts",
      points: 100,
      question: "Según la evolución histórica analizada, ¿qué caracterizó a los inicios en las salas recreativas de los años 70?",
      options: [
        "El juego en línea desde smartphones y transmisiones por Twitch",
        "El primer fenómeno de reunión social presencial y competencia local en máquinas arcade (Pong, Pac-Man)",
        "El traslado exclusivo de la experiencia al hogar mediante la consola Atari 2600",
        "La creación de ligas profesionales globales de League of Legends y Dota 2"
      ],
      correctIndex: 1
    }
  },
  {
    id: "slide-3-results",
    number: 5,
    shortTitle: "Resultados Encuesta ",
    type: "poll-abcd-results",
    sourceSlideId: "slide-3",
    sectionTitle: "RESULTADOS EN TIEMPO REAL · ENCUESTA DIAPOSITIVA 4",
    subSectionTitle: "Cantidad de respuestas en números por cada opción (A, B, C y D)",
    interaction: null
  },
  {
    id: "slide-4",
    number: 6,
    shortTitle: "2.2 Método Antropológico",
    type: "content",
    sectionTitle: "2. DESARROLLO",
    subSectionTitle: "2.2. Herramientas del Método Antropológico Aplicadas y Justificación",
    paragraphs: [
      "La investigación en el NEA adoptó un enfoque cualitativo y etnográfico, empleando las siguientes herramientas antropológicas:"
    ],
    bullets: [
      {
        lead: "Observación Participante:",
        text: "Inmersión directa en plataformas comunitarias (servidores de Discord, salas de juego en línea) y eventos presenciales (convenciones de cultura pop y torneos locales en Corrientes y Resistencia). Permitió registrar comportamientos, jergas y rituales en su contexto real."
      },
      {
        lead: "Entrevistas Semiestructuradas:",
        text: "Realizadas a jugadores casuales, competidores de eSports y streamers locales, indagando en sus trayectorias, motivaciones y la asignación de sentido al ser parte del grupo."
      },
      {
        lead: "Encuestas Digitales:",
        text: "Aplicadas a jóvenes de la región para obtener datos cuantitativos sobre plataformas más usadas (móviles, PC, consolas), hábitos de consumo y dinámicas de sociabilidad."
      }
    ],
    interaction: {
      id: "q-consigna-2",
      kind: "poll",
      badge: "Encuesta Etnográfica · +50 pts",
      points: 50,
      question: "Replicando nuestra Encuesta Digital en el NEA: ¿Cuál es la plataforma que más utilizás para jugar o interactuar?",
      options: [
        "Teléfono Móvil (Smartphone)",
        "PC / Computadora de escritorio o notebook",
        "Consola doméstica (PlayStation, Xbox, Nintendo)",
        "Comunidades y Streaming (Discord, Twitch, YouTube)"
      ]
    }
  },
  {
    id: "slide-4-results",
    number: 7,
    shortTitle: "Resultados Encuesta ",
    type: "poll-abcd-results",
    sourceSlideId: "slide-4",
    sectionTitle: "RESULTADOS EN TIEMPO REAL · ENCUESTA DIAPOSITIVA 6",
    subSectionTitle: "Cantidad de respuestas en números por cada opción (A, B, C y D)",
    interaction: null
  },
  {
    id: "slide-5",
    number: 8,
    shortTitle: "2.3 Estudio Comparativo ",
    type: "content",
    sectionTitle: "2. DESARROLLO",
    subSectionTitle: "2.3. Estudio comparativo con otros actores del ecosistema digital (YouTubers, Streamers, Influencers, Bloggers)",
    paragraphs: [
      "En lugar de comparar a los gamers con tribus urbanas tradicionales, resulta teóricamente más rico contrastarlos con otros actores contemporáneos del ecosistema digital y tecnológico con los que conviven y se intersectan: YouTubers, Streamers, Influencers y Bloggers."
    ],
    bullets: [
      {
        lead: "Similitudes estructurales en el entorno digital:",
        text: "Todos estos perfiles operan en plataformas mediáticas conectadas a Internet, utilizan lenguajes hipermediales, construyen comunidades virtuales basadas en la afinidad y dependen de la economía de la atención y las métricas de visualización."
      },
      {
        lead: "Diferencias en la práctica central:",
        text: "Mientras que el Blogger y el Influencer basan su actividad principal en la producción de contenido de opinión, estilo de vida o reseña comercial, y el YouTuber tradicional produce videos editados asincrónicamente, el Gamer y el Streamer interactúan de manera lúdica y en tiempo real con sistemas interactivos. El gamer es principalmente un jugador que puede volverse creador, mientras que el influencer o el blogger nacen y se sostienen en la mediación comunicativa directa de su imagen o discurso."
      }
    ],
    footerParagraphs: [
      {
        lead: "Convergencia y hibridación:",
        text: "en la actualidad, estas figuras se hibridan constantemente; muchos streamers de la región son a la vez gamers competitivos e influencers locales, demostrando que el ecosistema digital del NEA funciona como una red interconectada de saberes y estéticas compartidas."
      }
    ],
    interaction: {
      id: "q-consigna-3",
      kind: "tf",
      badge: "Verdadero / Falso · +100 pts",
      points: 100,
      question: "Afirmación: Los gamers del NEA poseen una identidad 'glocal' porque consumen y resignifican símbolos de la industria transnacional global desde su propia práctica y territorialidad local.",
      options: [
        "Verdadero",
        "Falso"
      ],
      correctIndex: 0
    }
  },
  {
    id: "slide-5-tf-chart",
    number: 9,
    shortTitle: "Gráfico V/F ",
    type: "tf-stats-chart",
    sourceSlideId: "slide-5",
    sectionTitle: "ESTADÍSTICAS EN TIEMPO REAL · VERDADERO / FALSO",
    subSectionTitle: "Resumen de respuestas sobre Identidad 'Glocal' en el NEA ",
    interaction: null
  },
  {
    id: "slide-dual-poll",
    number: 10,
    shortTitle: "Encuesta Doble: Juego e Identidad Gamer",
    type: "dual-poll",
    sectionTitle: "ENCUESTA DOBLE EN TIEMPO REAL",
    subSectionTitle: "Práctica de juego y autopercepción identitaria",
    pollLeft: {
      id: "slide-dual-poll-left",
      kind: "poll",
      badge: "Encuesta 1 · +50 pts",
      points: 50,
      question: "¿Jugaste o jugás algún videojuego?",
      options: ["Sí", "No"]
    },
    pollRight: {
      id: "slide-dual-poll-right",
      kind: "poll",
      badge: "Encuesta 2 · +50 pts",
      points: 50,
      question: "¿Te considerás un/una Gamer?",
      options: ["Sí", "No"]
    },
    interaction: null
  },
  {
    id: "slide-dual-poll-3d-chart",
    number: 11,
    shortTitle: "Gráfico 3D: Juego e Identidad Gamer",
    type: "dual-poll-3d-chart",
    sourceSlideId: "slide-dual-poll",
    sectionTitle: "GRÁFICO 3D EN TIEMPO REAL · RESULTADOS DE ENCUESTAS",
    subSectionTitle: "Estadísticas numéricas de la Diapositiva 10 (Solo números)",
    interaction: null
  },
  {
    id: "slide-6",
    number: 12,
    shortTitle: "2.4 Identidad Social ",
    type: "content",
    sectionTitle: "2. DESARROLLO",
    subSectionTitle: "2.4. Características e Identidad del Grupo y Construcción de Identidad Social",
    paragraphs: [
      "La identidad social del gamer se construye a través de la adopción de roles, códigos compartidos y diferenciación simbólica del resto de la sociedad. Sus características centrales abarcan:"
    ],
    bullets: [
      {
        lead: "Rasgos identitarios distintivos:",
        text: "Pasión por los entornos virtuales, conocimiento técnico de hardware y software (optimización de dispositivos), perfeccionamiento de habilidades cognitivas (toma de decisiones rápida, coordinación mano-ojo) y alta valoración de la narrativa y la estética visual."
      },
      {
        lead: "Tipologías internas de identidad:",
        text: "Se identifican diversos perfiles como el Gamer Casual (ocio esporádico), Gamer Competitivo/Hardcore (búsqueda constante de perfeccionamiento), Gamer Social (enfoque en relaciones interpersonales), Gamer Streamer (creación de contenido y difusión) y Gamer Móvil (acceso cotidiano desde smartphones)."
      },
      {
        lead: "Proceso de construcción de Identidad Social:",
        text: "La identidad se valida en la interacción con el 'otro' (jugadores rivales, comunidad de seguidores) y a través del sentido de pertenencia a un grupo que comparte normas de comportamiento, hábitos lingüísticos y horizontes estéticos propios."
      }
    ],
    videoCard: {
      badge: "🎬 Video en Bucle · Identidad Gamer",
      title: "¿Cómo es un/una Gamer en la actualidad?",
      src: "video_gamer.mp4"
    },
    interaction: null
  },
  {
    id: "slide-7",
    number: 13,
    shortTitle: "2.5 Posmodernidad y NEA ",
    type: "content",
    sectionTitle: "2. DESARROLLO",
    subSectionTitle: "2.5. Desarrollo Cultural, Presencia Local e Influencia de la Posmodernidad ",
    paragraphs: [
      "El desarrollo cultural de la subcultura gamer y su presencia en la región del NEA se caracterizan por:"
    ],
    bullets: [
      {
        lead: "Presencia en el medio local:",
        text: "Paso del estereotipo marginal del 'nerd' a una presencia protagónica en centros urbanos como Corrientes y Resistencia, materializada en torneos universitarios, eventos de tecnología, ciber-cafés renovados y comunidades de streaming regionales."
      },
      {
        lead: "Influencia de la cultura posmoderna:",
        text: "La posmodernidad —signada por la inmediatez, la hiperconectividad, la primacía de la imagen y la flexibilidad de identidades— moldea la conducta gamer. El videojuego se convierte en el espacio posmoderno por excelencia, donde los individuos asumen avatares, experimentan realidades virtuales y forman comunidades fluidas que trascienden las fronteras geográficas tradicionales."
      }
    ],
    interaction: {
      id: "q-consigna-5",
      kind: "mcq",
      badge: "Opción Múltiple · +100 pts",
      points: 100,
      question: "¿Por qué el videojuego es considerado en la investigación como el 'espacio posmoderno por excelencia'?",
      options: [
        "Porque rechaza el uso de pantallas e imágenes visuales",
        "Por la inmediatez, hiperconectividad, adopción de avatares y comunidades fluidas sin fronteras geográficas",
        "Porque limita la participación únicamente a zonas rurales sin acceso a Internet",
        "Porque mantiene identidades rígidas e inmutables aisladas de la tecnología"
      ],
      correctIndex: 1
    }
  },
  {
    id: "slide-8",
    number: 14,
    shortTitle: "2.6 Sesgos y Toxicidad ",
    type: "content",
    sectionTitle: "2. DESARROLLO",
    subSectionTitle: "2.6. Análisis del Grado de Existencia de Pensamiento Racista: Interno y Externo ",
    paragraphs: [
      "El pensamiento racista y las formas de discriminación en relación con la subcultura gamer se manifiestan en dos vertientes:"
    ],
    bullets: [
      {
        lead: "Racismo y sesgos desde el exterior (hacia el grupo):",
        text: "Existencia de prejuicios etnocéntricos por parte de generaciones mayores o sectores ajenos a la tecnología, quienes suelen estigmatizar al gamer calificándolo de improductivo, aislado o violento, desmereciendo el juego como espacio legítimo de cultura y sociabilidad."
      },
      {
        lead: "Racismo y toxicidad al interior del grupo:",
        text: "Dentro de los entornos de juego en línea se detectan manifestaciones de toxicidad que incluyen insultos xenófobos, misoginia dirigida hacia jugadoras mujeres y discriminación socioeconómica basada en la calidad del equipamiento o la velocidad de conexión del jugador."
      }
    ],
    interaction: {
      id: "q-consigna-6",
      kind: "tf",
      badge: "Verdadero / Falso · +100 pts",
      points: 100,
      question: "Afirmación: Dentro de los entornos de juego en línea no existe discriminación socioeconómica ni de género, ya que todos los prejuicios provienen únicamente desde el exterior del grupo.",
      options: [
        "Verdadero",
        "Falso"
      ],
      correctIndex: 1
    }
  },
  {
    id: "slide-8-tf-chart",
    number: 15,
    shortTitle: "Gráfico V/F ",
    type: "tf-stats-chart",
    sourceSlideId: "slide-8",
    sectionTitle: "ESTADÍSTICAS EN TIEMPO REAL · VERDADERO / FALSO",
    subSectionTitle: "Resumen de respuestas sobre Sesgos y Toxicidad",
    interaction: null
  },
  {
    id: "slide-9",
    number: 16,
    shortTitle: "2.7 Inclusión y Exclusión ",
    type: "content",
    sectionTitle: "2. DESARROLLO",
    subSectionTitle: "2.7. Nivel de Inclusión y Exclusión en los Estratos Socioculturales del NEA ",
    paragraphs: [
      "En el contexto socioeconómico particular de las provincias del NEA, el fenómeno gamer refleja tensiones de inclusión y exclusión:"
    ],
    bullets: [
      {
        lead: "Factores de exclusión:",
        text: "El elevado costo económico en moneda extranjera de computadoras de alta gama, consolas de última generación y conexiones de fibra óptica genera una barrera material para sectores vulnerables."
      },
      {
        lead: "Mecanismos de inclusión y democratización:",
        text: "La masificación de los teléfonos móviles (smartphones) y los videojuegos gratuitos (Free-to-Play) ha democratizado el acceso en sectores populares. Además, los códigos compartidos de la cultura gamer funcionan como puente integrador e igualador entre jóvenes de diversos orígenes socioculturales."
      }
    ],
    videoCard: {
      src: "video_slide16.mp4"
    },
    interaction: null
  },
  {
    id: "slide-10",
    number: 17,
    shortTitle: "3. Conclusión",
    type: "closing",
    sectionTitle: "3. CONCLUSIÓN",
    conclusionParagraphs: [
      "La investigación antropológica desarrollada demuestra que la subcultura gamer en el NEA constituye un entramado social vibrante, diverso y profundamente atravesado por las dinámicas de la comunicación contemporánea. Lejos de constituir un mero entretenimiento pasivo, los videojuegos representan una plataforma activa de desarrollo cognitivo, construcción identitaria y sociabilidad en la era posmoderna.",
      "A través de la aplicación del método etnográfico y la teoría antropológica, se evidenció cómo los jóvenes de Corrientes y la región reinterpretan fenómenos globales a partir de sus realidades locales. Reconocer estos procesos de identidad, aculturación e inclusión/exclusión resulta fundamental para abordar la práctica profesional de la comunicación con una mirada integradora y respetuosa de las nuevas manifestaciones culturales."
    ],
    interaction: null
  }
];

/* =========================================================
   ESTADO DE LA APLICACIÓN Y SINCRONIZACIÓN EN TIEMPO REAL
   ========================================================= */
const APP_STATE = {
  role: "presenter", // 'presenter' | 'participant'
  isQrGuest: false,  // true únicamente cuando ingresan escaneando el código QR (?role=participant)
  roomId: "nea-gamers-2026",
  lanIp: "",
  publicTunnelUrl: "",
  customBaseUrl: "https://emilio735.github.io/Presentacion-Gamers/",
  shortUrlDisplay: "",
  fullJoinUrl: "",
  clientId: "c_" + Math.random().toString(36).substring(2, 10),
  mqttClients: [],
  cloudConnected: false,
  firebaseConnected: false,
  firebaseDb: null,
  firebaseRoomRef: null,
  localChannel: null,
  participantUser: null,
  slide2SurveyOpened: false,
  slide2SurveyAnimating: false,
  openedSurveys: {},
  lastServerUpdatedAt: 0,
  serverTimeOffset: 0,
  autoAdvancedForStamp: "",
  isFetchingPhp: false,
  pendingSlideRequests: 0,
  lastLocalSlideChangeAt: 0,
  initialServerSyncDone: false,
  room: {
    currentSlide: 0,
    slideSeq: 0,
    revealAnswers: false,
    openedSurveys: {},
    users: {},
    responses: {},
    updatedAt: 0
  }
};

function ensurePlainObject(val) {
  if (!val || typeof val !== "object" || Array.isArray(val)) {
    return {};
  }
  return val;
}

function nextSlideSeq() {
  const cur = Number(APP_STATE.room.slideSeq || 0);
  return Math.max(cur + 1, Date.now());
}

const SURVEY_TIMER_DURATION_SEC = 15;

function getEstimatedServerNow() {
  return Date.now() + (APP_STATE.serverTimeOffset || 0);
}

function getSurveyTimerState(slideId) {
  const timerKey = String(slideId || "").startsWith("slide-dual-poll") ? "slide-dual-poll" : slideId;
  const openedAt = Number(APP_STATE.room.openedSurveys?.[timerKey] || 0);
  if (!openedAt) {
    return {
      active: false,
      elapsedMs: 0,
      remainingMs: SURVEY_TIMER_DURATION_SEC * 1000,
      remainingSec: SURVEY_TIMER_DURATION_SEC,
      pct: 100,
      urgent: false,
      openedAt: 0,
      timerKey
    };
  }
  const totalMs = SURVEY_TIMER_DURATION_SEC * 1000;
  const elapsedMs = Math.max(0, getEstimatedServerNow() - openedAt);
  const remainingMs = Math.max(0, totalMs - elapsedMs);
  const remainingSec = Math.ceil(remainingMs / 1000);
  const pct = Math.max(0, Math.min(100, (remainingMs / totalMs) * 100));
  return {
    active: true,
    elapsedMs,
    remainingMs,
    remainingSec,
    pct,
    urgent: remainingSec <= 5,
    openedAt,
    timerKey
  };
}

function renderSurveyTimerWidget(slideId) {
  const st = getSurveyTimerState(slideId);
  return `
    <div class="survey-countdown-box ${st.urgent ? "urgent" : ""}" data-timer-slide="${escapeHtml(st.timerKey)}">
      <div class="survey-countdown-top">
        <span>⏱️ Tiempo para responder</span>
        <span class="survey-countdown-badge"><span class="survey-timer-sec">${st.remainingSec}</span>s</span>
      </div>
      <div class="survey-countdown-bar-track">
        <div class="survey-countdown-bar-fill" style="width:${st.pct}%;"></div>
      </div>
    </div>
  `;
}

function tickSurveyCountdown() {
  const slideIndex = APP_STATE.room.currentSlide || 0;
  const slide = SLIDES_DATA[slideIndex];
  if (!slide) return;

  const isTimedSlide = Boolean(slide.interaction || slide.type === "dual-poll");
  if (!isTimedSlide) return;

  const st = getSurveyTimerState(slide.id);
  const boxes = document.querySelectorAll(`[data-timer-slide="${slide.id}"]`);
  boxes.forEach((box) => {
    const secEl = box.querySelector(".survey-timer-sec");
    const fillEl = box.querySelector(".survey-countdown-bar-fill");
    if (secEl) secEl.textContent = String(st.remainingSec);
    if (fillEl) fillEl.style.width = `${st.pct}%`;
    box.classList.toggle("urgent", Boolean(st.urgent));
  });

  if (st.active && st.remainingMs <= 0 && st.elapsedMs < 22000) {
    const stampKey = `${slide.id}_${st.openedAt}`;
    if (!APP_STATE.isQrGuest && APP_STATE.autoAdvancedForStamp !== stampKey) {
      APP_STATE.autoAdvancedForStamp = stampKey;
      changeSlide(1);
    }
  }
}

// Paleta para la Nube de Palabras fiel al estilo PDF
const WORD_COLORS = [
  "#1e3a5f",
  "#2b5082",
  "#5a4888",
  "#1f7a4c",
  "#2c5282",
  "#4c51bf",
  "#3182ce",
  "#285e61"
];

function initApp() {
  const params = new URLSearchParams(window.location.search);
  const roleParam = params.get("role");
  const roomParam = params.get("room");

  if (roomParam) {
    APP_STATE.roomId = roomParam.replace(/[^a-zA-Z0-9_-]/g, "") || "nea-gamers-2026";
  }

  if (roleParam === "participant") {
    APP_STATE.role = "participant";
    APP_STATE.isQrGuest = true;
    // Al ingresar escaneando el QR, pedir siempre que se registre con su nombre antes de pasar a la Diapositiva 1
    APP_STATE.participantUser = null;
  } else {
    const savedUser = localStorage.getItem("agy_gamer_participant_" + APP_STATE.roomId);
    if (savedUser) {
      try {
        APP_STATE.participantUser = JSON.parse(savedUser);
      } catch (e) {
        APP_STATE.participantUser = null;
      }
    }
  }

  // Inicializar canales de sincronización
  initBroadcastChannel();
  initCloudRealtimeSync();
  initFirebaseFromSavedConfig();
  initPhpPollingSync();

  // Eventos de teclado para el presentador
  window.addEventListener("keydown", (e) => {
    if (APP_STATE.role !== "presenter") return;
    if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") {
      e.preventDefault();
      changeSlide(1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      changeSlide(-1);
    }
  });

  computeAccessLinks();
  renderAll();
  setInterval(tickSurveyCountdown, 200);
}

/* =========================================================
   1. CANAL LOCAL (BroadcastChannel + localStorage)
   ========================================================= */
function initBroadcastChannel() {
  const storageKey = "agy_room_state_" + APP_STATE.roomId;
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      mergeRoomState(parsed);
    } catch (e) { }
  }

  if ("BroadcastChannel" in window) {
    APP_STATE.localChannel = new BroadcastChannel("agy_channel_" + APP_STATE.roomId);
    APP_STATE.localChannel.onmessage = (ev) => {
      if (ev.data && ev.data.type === "ROOM_UPDATE") {
        mergeRoomState(ev.data.state);
      }
    };
  }

  window.addEventListener("storage", (ev) => {
    if (ev.key === storageKey && ev.newValue) {
      try {
        mergeRoomState(JSON.parse(ev.newValue));
      } catch (e) { }
    }
  });
}

function broadcastLocalState() {
  if (APP_STATE.isQrGuest) return;
  const storageKey = "agy_room_state_" + APP_STATE.roomId;
  try {
    localStorage.setItem(storageKey, JSON.stringify(APP_STATE.room));
  } catch (e) { }

  if (APP_STATE.localChannel) {
    APP_STATE.localChannel.postMessage({
      type: "ROOM_UPDATE",
      state: APP_STATE.room
    });
  }
}

/* =========================================================
   2. FIREBASE REALTIME DATABASE
   ========================================================= */
function initFirebaseFromSavedConfig() {
  const rawConfig = localStorage.getItem("agy_firebase_config");
  if (!rawConfig) return;
  try {
    const config = JSON.parse(rawConfig);
    connectFirebase(config, false);
  } catch (e) {
    console.warn("Configuración de Firebase inválida en almacenamiento local:", e);
  }
}

function connectFirebase(config, showFeedback = true) {
  if (!window.firebase) {
    if (showFeedback) alert("El SDK de Firebase aún no terminó de cargar.");
    return;
  }
  try {
    let app;
    if (!firebase.apps.length) {
      app = firebase.initializeApp(config);
    } else {
      app = firebase.app();
    }
    const db = firebase.database(app);
    const roomRef = db.ref("presentaciones/" + APP_STATE.roomId);

    APP_STATE.firebaseDb = db;
    APP_STATE.firebaseRoomRef = roomRef;

    roomRef.on(
      "value",
      (snapshot) => {
        APP_STATE.firebaseConnected = true;
        updateSyncBadge();
        const val = snapshot.val();
        if (val) {
          mergeRoomState(val);
        } else {
          // Inicializar sala en Firebase si está vacía
          roomRef.set(APP_STATE.room);
        }
      },
      (err) => {
        console.warn("Error de lectura en Firebase:", err);
        APP_STATE.firebaseConnected = false;
        updateSyncBadge();
      }
    );

    localStorage.setItem("agy_firebase_config", JSON.stringify(config));
    if (showFeedback) {
      closeFirebaseModal();
    }
  } catch (err) {
    if (showFeedback) {
      alert("Error al conectar con Firebase: " + err.message);
    }
  }
}

function pushToFirebase() {
  if (APP_STATE.isQrGuest) return;
  if (APP_STATE.firebaseConnected && APP_STATE.firebaseRoomRef) {
    APP_STATE.firebaseRoomRef.set(APP_STATE.room).catch((e) => {
      console.warn("No se pudo escribir en Firebase:", e);
    });
  }
}

/* =========================================================
   3. SINCRONIZACIÓN SERVIDOR LOCAL (sync.php en WAMP)
   ========================================================= */
function getSyncPhpUrl() {
  if (window.location.protocol === "file:") {
    return `http://localhost/Presentaciongamers/sync.php?room=${encodeURIComponent(APP_STATE.roomId)}`;
  }
  return `sync.php?room=${encodeURIComponent(APP_STATE.roomId)}`;
}

function initPhpPollingSync() {
  if (window.location.hostname.includes("github.io")) {
    return;
  }
  fetchPhpState();
  setInterval(fetchPhpState, 650);
}

/* =========================================================
   3B. SINCRONIZACIÓN EN LA NUBE EN TIEMPO REAL (GitHub Pages + Móviles)
   ========================================================= */
function getCloudTopics() {
  const cleanRoom = APP_STATE.roomId || "nea-gamers-2026";
  return {
    stateTopic: `agy/presentaciongamers/v2/${cleanRoom}/state`,
    actionTopic: `agy/presentaciongamers/v2/${cleanRoom}/action`,
    ntfyTopic: `agy_pg_v2_${cleanRoom}`
  };
}

function ensureMqttLibraryLoaded(callback) {
  if (typeof window.mqtt !== "undefined") {
    callback();
    return;
  }
  const script = document.createElement("script");
  script.src = "https://unpkg.com/mqtt@5.10.1/dist/mqtt.min.js";
  script.onload = () => callback();
  script.onerror = () => {
    const fallback = document.createElement("script");
    fallback.src = "https://cdnjs.cloudflare.com/ajax/libs/mqtt/5.10.1/mqtt.min.js";
    fallback.onload = () => callback();
    document.head.appendChild(fallback);
  };
  document.head.appendChild(script);
}

function initCloudRealtimeSync() {
  const { stateTopic, actionTopic, ntfyTopic } = getCloudTopics();

  // 1. Conectar vía WebSockets seguros (WSS) a brokers MQTT públicos para sincronización instantánea (< 50ms)
  ensureMqttLibraryLoaded(() => {
    if (typeof window.mqtt === "undefined") return;
    const brokerUrls = [
      "wss://broker.emqx.io:8084/mqtt",
      "wss://broker.hivemq.com:8884/mqtt"
    ];

    brokerUrls.forEach((url) => {
      try {
        const client = window.mqtt.connect(url, {
          clientId: "agy_" + APP_STATE.clientId + "_" + Math.random().toString(36).substring(2, 6),
          clean: true,
          connectTimeout: 5000,
          reconnectPeriod: 2000
        });

        client.on("connect", () => {
          APP_STATE.cloudConnected = true;
          updateSyncBadge();
          client.subscribe([stateTopic, actionTopic], { qos: 0 }, () => {
            if (APP_STATE.isQrGuest) {
              // Al entrar desde el celular, pedir inmediatamente el estado actual al presentador
              client.publish(
                actionTopic,
                JSON.stringify({
                  type: "REQUEST_STATE",
                  senderId: APP_STATE.clientId,
                  timestamp: Date.now()
                }),
                { qos: 0, retain: false }
              );
              // Si el participante ya tenía usuario registrado, anunciarlo
              if (APP_STATE.participantUser) {
                client.publish(
                  actionTopic,
                  JSON.stringify({
                    type: "PARTICIPANT_ACTION",
                    senderId: APP_STATE.clientId,
                    payload: {
                      action: "join_user",
                      user: APP_STATE.participantUser
                    }
                  }),
                  { qos: 0, retain: false }
                );
              }
            } else {
              // El presentador publica su estado actual al conectarse
              publishCloudState();
            }
          });
        });

        client.on("message", (topic, messageBuffer) => {
          try {
            const packet = JSON.parse(messageBuffer.toString());
            if (!packet || packet.senderId === APP_STATE.clientId) return;
            handleCloudPacket(packet);
          } catch (e) { }
        });

        APP_STATE.mqttClients.push(client);
      } catch (e) { }
    });
  });

  // 2. Canal HTTPS SSE de respaldo (ntfy.sh puerto 443) por si la red bloquea puertos WebSocket
  if ("EventSource" in window) {
    try {
      const es = new EventSource(`https://ntfy.sh/${encodeURIComponent(ntfyTopic)}/sse`);
      es.onmessage = (ev) => {
        try {
          const outer = JSON.parse(ev.data);
          if (!outer || !outer.message) return;
          const packet = JSON.parse(outer.message);
          if (!packet || packet.senderId === APP_STATE.clientId) return;
          handleCloudPacket(packet);
        } catch (e) { }
      };
    } catch (e) { }
  }

  // Si es el presentador (!isQrGuest), emitir latido de sincronización cada 2.5s sobre MQTT para mantener a todos los celulares al día
  if (!APP_STATE.isQrGuest) {
    setInterval(() => {
      publishCloudState(false);
    }, 2500);
  }
}

function handleCloudPacket(packet) {
  if (packet.type === "STATE_SYNC" && packet.state) {
    if (packet.serverNow) {
      APP_STATE.serverTimeOffset = Number(packet.serverNow) - Date.now();
    }
    mergeRoomState(packet.state, true);
    APP_STATE.initialServerSyncDone = true;
  } else if (packet.type === "REQUEST_STATE") {
    if (!APP_STATE.isQrGuest) {
      publishCloudState(false);
    }
  } else if (packet.type === "PARTICIPANT_ACTION" && packet.payload) {
    handleIncomingCloudAction(packet.payload);
  }
}

function handleIncomingCloudAction(payload) {
  if (!payload || !payload.action) return;
  APP_STATE.room.users = ensurePlainObject(APP_STATE.room.users);
  APP_STATE.room.responses = ensurePlainObject(APP_STATE.room.responses);

  let changed = false;

  if (payload.action === "join_user" && payload.user && payload.user.id) {
    const uid = payload.user.id;
    const existing = APP_STATE.room.users[uid];
    const existingScore = existing ? Number(existing.score || 0) : 0;
    APP_STATE.room.users[uid] = {
      ...payload.user,
      score: Math.max(existingScore, Number(payload.user.score || 0)),
      lastSeen: Date.now()
    };
    changed = true;
  } else if (
    payload.action === "submit_response" &&
    payload.slideId &&
    payload.userId &&
    payload.response
  ) {
    const { slideId, userId, response, scoreDelta } = payload;
    APP_STATE.room.responses[slideId] = ensurePlainObject(APP_STATE.room.responses[slideId]);
    const alreadyHad = APP_STATE.room.responses[slideId][userId] !== undefined;
    APP_STATE.room.responses[slideId][userId] = response;

    if (!APP_STATE.room.users[userId]) {
      APP_STATE.room.users[userId] = {
        id: userId,
        name: response.userName || "Participante",
        score: 0,
        answersCount: 0,
        joinedAt: Date.now()
      };
    }

    if (!alreadyHad && scoreDelta) {
      APP_STATE.room.users[userId].score =
        Number(APP_STATE.room.users[userId].score || 0) + Number(scoreDelta || 0);
      APP_STATE.room.users[userId].answersCount =
        Number(APP_STATE.room.users[userId].answersCount || 0) + 1;
    }
    changed = true;
  }

  if (changed) {
    APP_STATE.room.updatedAt = Date.now();
    if (!APP_STATE.isQrGuest) {
      if (!window.location.hostname.includes("github.io")) {
        postPhpAction(payload);
      }
      publishCloudState(false);
    }
    renderAll();
  }
}

function publishCloudState(alsoSendNtfy = true) {
  if (APP_STATE.isQrGuest) return;
  const { stateTopic, ntfyTopic } = getCloudTopics();
  const packetStr = JSON.stringify({
    type: "STATE_SYNC",
    senderId: APP_STATE.clientId,
    serverNow: getEstimatedServerNow(),
    state: APP_STATE.room
  });

  APP_STATE.mqttClients.forEach((client) => {
    try {
      if (client && client.connected) {
        client.publish(stateTopic, packetStr, { qos: 0, retain: true });
      }
    } catch (e) { }
  });

  if (alsoSendNtfy) {
    fetch(`https://ntfy.sh/${encodeURIComponent(ntfyTopic)}`, {
      method: "POST",
      body: packetStr
    }).catch(() => { });
  }
}

function publishCloudAction(actionPayload) {
  if (!actionPayload) return;
  const { actionTopic, ntfyTopic } = getCloudTopics();
  const packetStr = JSON.stringify({
    type: "PARTICIPANT_ACTION",
    senderId: APP_STATE.clientId,
    payload: actionPayload
  });

  APP_STATE.mqttClients.forEach((client) => {
    try {
      if (client && client.connected) {
        client.publish(actionTopic, packetStr, { qos: 0, retain: false });
      }
    } catch (e) { }
  });

  fetch(`https://ntfy.sh/${encodeURIComponent(ntfyTopic)}`, {
    method: "POST",
    body: packetStr
  }).catch(() => { });
}

async function fetchPhpState() {
  if (APP_STATE.isFetchingPhp || APP_STATE.pendingSlideRequests > 0) return;
  APP_STATE.isFetchingPhp = true;
  const requestStartedAt = Date.now();
  try {
    const res = await fetch(getSyncPhpUrl(), {
      cache: "no-store"
    });
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.serverNow) {
      APP_STATE.serverTimeOffset = Number(data.serverNow) - Date.now();
    }
    let linksChanged = false;
    if (data && data.publicUrl && data.publicUrl !== APP_STATE.publicTunnelUrl) {
      APP_STATE.publicTunnelUrl = data.publicUrl;
      linksChanged = true;
    }
    if (data && data.lanIp && data.lanIp !== APP_STATE.lanIp) {
      APP_STATE.lanIp = data.lanIp;
      linksChanged = true;
    }
    if (linksChanged) {
      computeAccessLinks();
      renderQrCodeIfVisible();
    }

    // Si el presentador acaba de cambiar de diapositiva o abrir una encuesta mientras este GET estaba en vuelo, descartar el estado viejo
    if (APP_STATE.pendingSlideRequests > 0 || APP_STATE.lastLocalSlideChangeAt > requestStartedAt) {
      return;
    }

    if (data && data.state) {
      const serverUpdated = Number(data.state.updatedAt || 0);
      if (!APP_STATE.initialServerSyncDone || serverUpdated > Number(APP_STATE.lastServerUpdatedAt || 0)) {
        APP_STATE.lastServerUpdatedAt = Math.max(Number(APP_STATE.lastServerUpdatedAt || 0), serverUpdated);
        mergeRoomState(data.state, true);
        APP_STATE.initialServerSyncDone = true;
      }
    }
  } catch (e) {
    // Si se abre sin servidor PHP accesible, continúa con Firebase / BroadcastChannel
  } finally {
    APP_STATE.isFetchingPhp = false;
  }
}

async function postPhpAction(payload) {
  const isSlideOrSurveyAction =
    payload &&
    (payload.action === "set_slide" ||
      payload.action === "open_survey" ||
      payload.action === "reset_room" ||
      payload.action === "full_sync");

  const postStartedAt = Date.now();
  if (isSlideOrSurveyAction) {
    APP_STATE.pendingSlideRequests++;
    APP_STATE.lastLocalSlideChangeAt = postStartedAt;
  }

  try {
    const res = await fetch(getSyncPhpUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.serverNow) {
        APP_STATE.serverTimeOffset = Number(data.serverNow) - Date.now();
      }
      if (data && data.state) {
        const serverUpdated = Number(data.state.updatedAt || 0);
        APP_STATE.lastServerUpdatedAt = Math.max(Number(APP_STATE.lastServerUpdatedAt || 0), serverUpdated);
        if (data.state.slideSeq) {
          APP_STATE.room.slideSeq = Math.max(Number(APP_STATE.room.slideSeq || 0), Number(data.state.slideSeq || 0));
        }
        // Solo fusionar respuesta si no hubo otro cambio de diapositiva posterior
        if (APP_STATE.lastLocalSlideChangeAt <= postStartedAt) {
          mergeRoomState(data.state, true);
          APP_STATE.initialServerSyncDone = true;
        }
      }
    }
  } catch (e) { } finally {
    if (isSlideOrSurveyAction) {
      APP_STATE.pendingSlideRequests = Math.max(0, APP_STATE.pendingSlideRequests - 1);
    }
  }
}

function mergeRoomState(incoming, fromServer = false) {
  if (!incoming) return;
  const incTime = Number(incoming.updatedAt || 0);
  const curTime = Number(APP_STATE.room.updatedAt || 0);
  if (!fromServer && incTime < curTime) return;

  const incSeq = Number(incoming.slideSeq || 0);
  const curSeq = Number(APP_STATE.room.slideSeq || 0);

  // Nunca permitir que un estado con secuencia de diapositiva anterior retroceda la presentación
  if (incSeq > 0 && curSeq > 0 && incSeq < curSeq) {
    // Aún así fusionar usuarios y respuestas nuevos sin tocar la diapositiva actual
    APP_STATE.room.users = { ...ensurePlainObject(APP_STATE.room.users), ...ensurePlainObject(incoming.users) };
    APP_STATE.room.responses = { ...ensurePlainObject(APP_STATE.room.responses), ...ensurePlainObject(incoming.responses) };
    if (APP_STATE.participantUser && APP_STATE.room.users[APP_STATE.participantUser.id]) {
      APP_STATE.participantUser.score = APP_STATE.room.users[APP_STATE.participantUser.id].score || 0;
    }
    renderAll();
    return;
  }

  // En la computadora del presentador (!isQrGuest), una vez sincronizada o tras cualquier acción local,
  // ninguna encuesta o poll en segundo plano puede retroceder ni cambiar la diapositiva por su cuenta
  const isMasterPresenter = !APP_STATE.isQrGuest && (APP_STATE.initialServerSyncDone || APP_STATE.lastLocalSlideChangeAt > 0);
  const keepLocalSlideState =
    isMasterPresenter &&
    (APP_STATE.pendingSlideRequests > 0 ||
      Date.now() - APP_STATE.lastLocalSlideChangeAt < 4000 ||
      incSeq <= curSeq);

  const prevOpened = ensurePlainObject(APP_STATE.room.openedSurveys);
  const nextOpened = keepLocalSlideState
    ? prevOpened
    : ensurePlainObject(incoming.openedSurveys);

  if (!keepLocalSlideState) {
    // Detectar si se acaba de activar "Encuesta" o "Next Level" desde otro dispositivo (ej. la PC) para reproducir el efecto en el celular
    if (nextOpened["slide-2"] && !prevOpened["slide-2"] && !APP_STATE.slide2SurveyOpened) {
      APP_STATE.slide2SurveyOpened = true;
      APP_STATE.slide2SurveyAnimating = true;
      playRetroArcadeSound();
      setTimeout(() => {
        APP_STATE.slide2SurveyAnimating = false;
      }, 950);
    } else {
      APP_STATE.slide2SurveyOpened = Boolean(nextOpened["slide-2"]);
    }

    if (nextOpened["slide-3"] && !prevOpened["slide-3"] && !APP_STATE.openedSurveys["slide-3"]) {
      APP_STATE.openedSurveys["slide-3"] = true;
      APP_STATE.openedSurveys["slide-3_anim"] = true;
      playNextLevelSound();
      setTimeout(() => {
        APP_STATE.openedSurveys["slide-3_anim"] = false;
      }, 1050);
    } else {
      APP_STATE.openedSurveys["slide-3"] = Boolean(nextOpened["slide-3"]);
    }

    if (nextOpened["slide-4"] && !prevOpened["slide-4"] && !APP_STATE.openedSurveys["slide-4"]) {
      APP_STATE.openedSurveys["slide-4"] = true;
      APP_STATE.openedSurveys["slide-4_anim"] = true;
      playCoinsBurstSound();
      setTimeout(() => {
        APP_STATE.openedSurveys["slide-4_anim"] = false;
      }, 1650);
    } else {
      APP_STATE.openedSurveys["slide-4"] = Boolean(nextOpened["slide-4"]);
    }

    if (nextOpened["slide-5"] && !prevOpened["slide-5"] && !APP_STATE.openedSurveys["slide-5"]) {
      APP_STATE.openedSurveys["slide-5"] = true;
      APP_STATE.openedSurveys["slide-5_anim"] = true;
      playPokeball3dSound();
      setTimeout(() => {
        APP_STATE.openedSurveys["slide-5_anim"] = false;
      }, 1800);
    } else {
      APP_STATE.openedSurveys["slide-5"] = Boolean(nextOpened["slide-5"]);
    }

    if (nextOpened["slide-7"] && !prevOpened["slide-7"] && !APP_STATE.openedSurveys["slide-7"]) {
      APP_STATE.openedSurveys["slide-7"] = true;
      APP_STATE.openedSurveys["slide-7_anim"] = true;
      playModern3dGameSound();
      setTimeout(() => {
        APP_STATE.openedSurveys["slide-7_anim"] = false;
      }, 1250);
    } else {
      APP_STATE.openedSurveys["slide-7"] = Boolean(nextOpened["slide-7"]);
    }

    if (nextOpened["slide-8"] && !prevOpened["slide-8"] && !APP_STATE.openedSurveys["slide-8"]) {
      APP_STATE.openedSurveys["slide-8"] = true;
      APP_STATE.openedSurveys["slide-8_anim"] = true;
      playModern3dOrbitalDropSound();
      setTimeout(() => {
        APP_STATE.openedSurveys["slide-8_anim"] = false;
      }, 1450);
    } else {
      APP_STATE.openedSurveys["slide-8"] = Boolean(nextOpened["slide-8"]);
    }

    if (nextOpened["slide-10"] && !prevOpened["slide-10"] && !APP_STATE.openedSurveys["slide-10"]) {
      APP_STATE.openedSurveys["slide-10"] = true;
      APP_STATE.openedSurveys["slide-10_anim"] = true;
      playFinalLeaderboardSound();
      setTimeout(() => {
        APP_STATE.openedSurveys["slide-10_anim"] = false;
      }, 1100);
    } else {
      APP_STATE.openedSurveys["slide-10"] = Boolean(nextOpened["slide-10"]);
    }
  }

  APP_STATE.room = {
    currentSlide: keepLocalSlideState
      ? Number(APP_STATE.room.currentSlide ?? 0)
      : Number(incoming.currentSlide ?? 0),
    slideSeq: Math.max(curSeq, incSeq),
    revealAnswers: keepLocalSlideState
      ? Boolean(APP_STATE.room.revealAnswers)
      : Boolean(incoming.revealAnswers),
    openedSurveys: nextOpened,
    users: { ...ensurePlainObject(APP_STATE.room.users), ...ensurePlainObject(incoming.users) },
    responses: { ...ensurePlainObject(APP_STATE.room.responses), ...ensurePlainObject(incoming.responses) },
    updatedAt: Math.max(curTime, incTime) || Date.now()
  };

  if (incoming.users && Object.keys(ensurePlainObject(incoming.users)).length === 0 && incSeq > curSeq && Number(incoming.currentSlide ?? 0) === 0) {
    // Si fue un reinicio de sala (reset_room), limpiar usuarios y respuestas
    APP_STATE.room.users = {};
    APP_STATE.room.responses = {};
  }

  // Actualizar puntaje del participante local si existe en la sala
  if (APP_STATE.participantUser && APP_STATE.room.users[APP_STATE.participantUser.id]) {
    APP_STATE.participantUser.score = APP_STATE.room.users[APP_STATE.participantUser.id].score || 0;
  }

  renderAll();
}

function commitStateChange(actionPayload = null) {
  APP_STATE.room.updatedAt = Date.now();
  broadcastLocalState();
  pushToFirebase();
  if (APP_STATE.isQrGuest) {
    if (actionPayload) {
      publishCloudAction(actionPayload);
      if (!window.location.hostname.includes("github.io")) {
        postPhpAction(actionPayload);
      }
    }
  } else {
    publishCloudState(true);
    if (!window.location.hostname.includes("github.io")) {
      if (actionPayload) {
        postPhpAction(actionPayload);
      } else {
        postPhpAction({ action: "full_sync", state: APP_STATE.room });
      }
    }
  }
  renderAll();
}

/* =========================================================
   GENERACIÓN AUTOMÁTICA DE QR Y ENLACE CORTO
   ========================================================= */
function computeAccessLinks() {
  let base = APP_STATE.customBaseUrl.trim();
  // Ignorar URLs antiguas que apunten al adaptador virtual de VirtualBox (192.168.56.x) o a file://
  if (base.includes("192.168.56.") || base.startsWith("file:")) {
    base = "";
    APP_STATE.customBaseUrl = "";
  }

  // Priorizar el túnel público HTTPS si está activo para que cualquier celular (Wi-Fi o 4G/5G) ingrese sin bloqueo de Firewall
  if (!base && APP_STATE.publicTunnelUrl) {
    base = APP_STATE.publicTunnelUrl;
  }

  if (!base) {
    const loc = window.location;
    const targetIp = APP_STATE.lanIp || "192.168.1.19";

    if (loc.protocol === "file:") {
      base = `http://${targetIp}/Presentaciongamers/`;
    } else {
      let host = loc.host;
      if (
        (loc.hostname === "localhost" ||
          loc.hostname === "127.0.0.1" ||
          loc.hostname.startsWith("192.168.56.")) &&
        targetIp
      ) {
        host = targetIp + (loc.port ? ":" + loc.port : "");
      }
      const cleanPath = loc.pathname.replace(/\/index\.html$/i, "/");
      base = `${loc.protocol}//${host}${cleanPath}`;
    }
  }

  const sep = base.includes("?") ? "&" : "?";
  APP_STATE.fullJoinUrl = `${base}${sep}role=participant&room=${encodeURIComponent(APP_STATE.roomId)}`;

  // Enlace corto legible para proyectar en pantalla
  try {
    const u = new URL(APP_STATE.fullJoinUrl);
    APP_STATE.shortUrlDisplay = `${u.host}${u.pathname}?role=participant`;
  } catch (e) {
    APP_STATE.shortUrlDisplay = APP_STATE.fullJoinUrl;
  }
}

function renderQrCodeIfVisible() {
  const shortLinkEls = document.querySelectorAll(".short-link-url, #short-link-text");
  shortLinkEls.forEach((el) => {
    el.textContent = APP_STATE.shortUrlDisplay;
  });

  const containers = document.querySelectorAll(".qr-canvas-wrapper, #qr-code-container");
  if (!containers.length) return;

  const targetUrl = APP_STATE.fullJoinUrl;

  containers.forEach((container) => {
    container.innerHTML = "";

    if (typeof QRCode !== "undefined") {
      try {
        new QRCode(container, {
          text: targetUrl,
          width: 220,
          height: 220,
          colorDark: "#1e3a5f",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
        return;
      } catch (e) {
        console.warn("Fallback QR imagen:", e);
      }
    }

    // Fallback instantáneo en caso de que la librería CDN esté bloqueada
    const img = document.createElement("img");
    img.alt = "Código QR de acceso móvil";
    img.width = 220;
    img.height = 220;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&color=1e3a5f&bgcolor=ffffff&data=${encodeURIComponent(targetUrl)}`;
    container.appendChild(img);
  });
}

async function copyShortLink() {
  try {
    await navigator.clipboard.writeText(APP_STATE.fullJoinUrl);
    const btn = document.getElementById("btn-copy-link");
    if (btn) {
      const prev = btn.innerText;
      btn.innerText = "¡Enlace copiado!";
      setTimeout(() => (btn.innerText = prev), 1800);
    }
  } catch (e) {
    prompt("Copiá este enlace para compartir:", APP_STATE.fullJoinUrl);
  }
}

/* =========================================================
   ACCIONES DEL PRESENTADOR Y PARTICIPANTE
   ========================================================= */
function switchRole(newRole) {
  APP_STATE.role = newRole;
  renderAll();
}

function toggleViewMenu(event) {
  if (event) event.stopPropagation();
  const dropdown = document.getElementById("floating-menu-dropdown");
  const trigger = document.getElementById("floating-menu-trigger");
  if (!dropdown) return;
  const isOpen = dropdown.classList.toggle("open");
  if (trigger) trigger.setAttribute("aria-expanded", String(isOpen));
}

function selectRoleFromMenu(newRole) {
  const dropdown = document.getElementById("floating-menu-dropdown");
  const trigger = document.getElementById("floating-menu-trigger");
  if (dropdown) dropdown.classList.remove("open");
  if (trigger) trigger.setAttribute("aria-expanded", "false");
  switchRole(newRole);
}

window.addEventListener("click", (e) => {
  const menuContainer = document.getElementById("floating-view-menu");
  const dropdown = document.getElementById("floating-menu-dropdown");
  if (dropdown && dropdown.classList.contains("open") && menuContainer && !menuContainer.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

function prepareSlideTransitionPayload(nextIndex, prevIndex = null) {
  const targetSlide = SLIDES_DATA[nextIndex];
  const prevSlide = prevIndex !== null ? SLIDES_DATA[prevIndex] : null;
  APP_STATE.room.slideSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  const payload = {
    action: "set_slide",
    currentSlide: nextIndex,
    slideSeq: APP_STATE.room.slideSeq,
    revealAnswers: false
  };
  if (!targetSlide) return payload;

  APP_STATE.room.openedSurveys = ensurePlainObject(APP_STATE.room.openedSurveys);

  if (prevSlide && prevSlide.id && prevSlide.id !== targetSlide.id) {
    delete APP_STATE.room.openedSurveys[prevSlide.id];
    payload.prevSlideId = prevSlide.id;
  }

  const manualRevealIds = ["slide-2", "slide-3", "slide-4", "slide-5", "slide-7", "slide-8", "slide-10"];
  if (manualRevealIds.includes(targetSlide.id)) {
    if (targetSlide.id === "slide-2") {
      APP_STATE.slide2SurveyOpened = false;
    }
    delete APP_STATE.openedSurveys[targetSlide.id];
    delete APP_STATE.room.openedSurveys[targetSlide.id];
    payload.resetSlideId = targetSlide.id;
  } else if (targetSlide.id === "slide-dual-poll") {
    const nowStamp = getEstimatedServerNow();
    APP_STATE.room.openedSurveys["slide-dual-poll"] = nowStamp;
    payload.autoOpenSlideId = "slide-dual-poll";
  }

  return payload;
}

function changeSlide(delta) {
  const prev = Number(APP_STATE.room.currentSlide || 0);
  const next = Math.max(0, Math.min(SLIDES_DATA.length - 1, prev + delta));
  if (next === prev) return;
  APP_STATE.room.currentSlide = next;
  APP_STATE.room.revealAnswers = false;
  commitStateChange(prepareSlideTransitionPayload(next, prev));
}

function goToSlide(index) {
  const prev = Number(APP_STATE.room.currentSlide || 0);
  const next = Math.max(0, Math.min(SLIDES_DATA.length - 1, index));
  APP_STATE.room.currentSlide = next;
  APP_STATE.room.revealAnswers = false;
  commitStateChange(prepareSlideTransitionPayload(next, prev));
}

function toggleRevealAnswers() {
  APP_STATE.room.revealAnswers = !APP_STATE.room.revealAnswers;
  APP_STATE.room.slideSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  commitStateChange({
    action: "set_slide",
    currentSlide: APP_STATE.room.currentSlide,
    slideSeq: APP_STATE.room.slideSeq,
    revealAnswers: APP_STATE.room.revealAnswers
  });
}

function registerParticipant(event) {
  event.preventDefault();
  const input = document.getElementById("participant-name-input");
  const rawName = (input?.value || "").trim();
  if (!rawName) return;

  const userId = "u_" + Math.random().toString(36).substring(2, 9);
  const newUser = {
    id: userId,
    name: rawName.substring(0, 28),
    score: 0,
    answersCount: 0,
    joinedAt: Date.now()
  };

  APP_STATE.participantUser = newUser;
  localStorage.setItem("agy_gamer_participant_" + APP_STATE.roomId, JSON.stringify(newUser));

  if (!APP_STATE.room.users) APP_STATE.room.users = {};
  APP_STATE.room.users[userId] = newUser;

  commitStateChange({
    action: "join_user",
    user: newUser
  });
}

function submitParticipantChoice(slideId, optionIndex) {
  if (!APP_STATE.participantUser) {
    const autoId = "u_" + Math.random().toString(36).substring(2, 9);
    const autoUser = {
      id: autoId,
      name: "Participante " + Object.keys(APP_STATE.room.users || {}).length + 1,
      score: 0,
      answersCount: 0,
      joinedAt: Date.now()
    };
    APP_STATE.participantUser = autoUser;
    localStorage.setItem("agy_gamer_participant_" + APP_STATE.roomId, JSON.stringify(autoUser));
    if (!APP_STATE.room.users) APP_STATE.room.users = {};
    APP_STATE.room.users[autoId] = autoUser;
  }
  let inter = null;
  const slide = SLIDES_DATA.find((s) => s.id === slideId);
  if (slide && slide.interaction) {
    inter = slide.interaction;
  } else {
    const dualSlide = SLIDES_DATA.find(
      (s) => s.type === "dual-poll" && (s.pollLeft?.id === slideId || s.pollRight?.id === slideId)
    );
    if (dualSlide) {
      inter = dualSlide.pollLeft?.id === slideId ? dualSlide.pollLeft : dualSlide.pollRight;
    }
  }
  if (!inter) return;

  const uid = APP_STATE.participantUser.id;
  if (!APP_STATE.room.responses[slideId]) {
    APP_STATE.room.responses[slideId] = {};
  }

  // Evitar doble respuesta en la misma pregunta
  if (APP_STATE.room.responses[slideId][uid] !== undefined) return;

  let scoreDelta = 0;
  let isCorrect = true;

  if (inter.kind === "mcq" || inter.kind === "tf") {
    isCorrect = optionIndex === inter.correctIndex;
    scoreDelta = isCorrect ? inter.points : 15; // 15 pts por participación
  } else {
    scoreDelta = inter.points || 50;
  }

  const responseObj = {
    userId: uid,
    userName: APP_STATE.participantUser.name,
    value: optionIndex,
    isCorrect,
    scoreDelta,
    timestamp: Date.now()
  };

  APP_STATE.room.responses[slideId][uid] = responseObj;

  if (!APP_STATE.room.users[uid]) {
    APP_STATE.room.users[uid] = { ...APP_STATE.participantUser };
  }
  APP_STATE.room.users[uid].score = (APP_STATE.room.users[uid].score || 0) + scoreDelta;
  APP_STATE.room.users[uid].answersCount = (APP_STATE.room.users[uid].answersCount || 0) + 1;
  APP_STATE.participantUser.score = APP_STATE.room.users[uid].score;
  localStorage.setItem("agy_gamer_participant_" + APP_STATE.roomId, JSON.stringify(APP_STATE.participantUser));

  commitStateChange({
    action: "submit_response",
    slideId,
    userId: uid,
    response: responseObj,
    scoreDelta
  });
}

function submitParticipantText(event, slideId) {
  event.preventDefault();
  if (!APP_STATE.participantUser) {
    const autoId = "u_" + Math.random().toString(36).substring(2, 9);
    const autoUser = {
      id: autoId,
      name: "Participante " + (Object.keys(APP_STATE.room.users || {}).length + 1),
      score: 0,
      answersCount: 0,
      joinedAt: Date.now()
    };
    APP_STATE.participantUser = autoUser;
    localStorage.setItem("agy_gamer_participant_" + APP_STATE.roomId, JSON.stringify(autoUser));
    if (!APP_STATE.room.users) APP_STATE.room.users = {};
    APP_STATE.room.users[autoId] = autoUser;
  }
  const input = document.getElementById("participant-text-input");
  const text = (input?.value || "").trim();
  if (!text) return;

  const slide = SLIDES_DATA.find((s) => s.id === slideId);
  if (!slide || !slide.interaction) return;

  const uid = APP_STATE.participantUser.id;
  if (!APP_STATE.room.responses[slideId]) {
    APP_STATE.room.responses[slideId] = {};
  }

  const alreadyAnswered = APP_STATE.room.responses[slideId][uid] !== undefined;
  const scoreDelta = alreadyAnswered ? 0 : (slide.interaction.points || 75);

  const responseObj = {
    userId: uid,
    userName: APP_STATE.participantUser.name,
    value: text.substring(0, 180),
    scoreDelta,
    timestamp: Date.now()
  };

  APP_STATE.room.responses[slideId][uid] = responseObj;

  if (!alreadyAnswered) {
    if (!APP_STATE.room.users[uid]) {
      APP_STATE.room.users[uid] = { ...APP_STATE.participantUser };
    }
    APP_STATE.room.users[uid].score = (APP_STATE.room.users[uid].score || 0) + scoreDelta;
    APP_STATE.room.users[uid].answersCount = (APP_STATE.room.users[uid].answersCount || 0) + 1;
    APP_STATE.participantUser.score = APP_STATE.room.users[uid].score;
    localStorage.setItem("agy_gamer_participant_" + APP_STATE.roomId, JSON.stringify(APP_STATE.participantUser));
  }

  if (input) input.value = "";

  commitStateChange({
    action: "submit_response",
    slideId,
    userId: uid,
    response: responseObj,
    scoreDelta
  });
}

/* =========================================================
   SIMULADOR DEMO PARA PROBAR ESTADÍSTICAS Y GRÁFICOS EN VIVO
   ========================================================= */
function simulateClassActivity() {
  const demoNames = [
    "Sofía (Corrientes)",
    "Lucas (Resistencia)",
    "Valentina G.",
    "Nahuel_NEA",
    "Camila T.",
    "Julián eSports",
    "Micaela R.",
    "Facundo B."
  ];

  if (!APP_STATE.room.users) APP_STATE.room.users = {};
  if (!APP_STATE.room.responses) APP_STATE.room.responses = {};

  demoNames.forEach((name, idx) => {
    const uid = "demo_" + (idx + 1);
    if (!APP_STATE.room.users[uid]) {
      APP_STATE.room.users[uid] = {
        id: uid,
        name,
        score: 0,
        answersCount: 0,
        joinedAt: Date.now() - idx * 4000
      };
    }
  });

  const sampleWords = [
    "Comunidad", "Glocal", "Discord", "Competitivo", "Streaming",
    "Comunidad", "Identidad", "eSports", "Amigos", "Glocal",
    "FreeToPlay", "Corrientes", "Discord", "Comunidad", "GG"
  ];

  const sampleOpenAnswers = [
    "Los smartphones permitieron que chicos de todos los barrios jueguen Free Fire o Mobile Legends sin necesitar una PC costosa.",
    "Los juegos Free-to-Play eliminaron la barrera de compra en dólares y crearon torneos estudiantiles inclusivos en Corrientes y Resistencia.",
    "El celular democratizó el acceso y los servidores de Discord integraron a jóvenes de distintos estratos socioculturales.",
    "Permitió que el gaming deje de ser un privilegio de pocos para convertirse en un lenguaje común en las escuelas y terciarios del NEA."
  ];

  SLIDES_DATA.forEach((slide) => {
    if (slide.type === "dual-poll") {
      [slide.pollLeft, slide.pollRight].forEach((pollObj, pIdx) => {
        if (!pollObj) return;
        const sid = pollObj.id;
        if (!APP_STATE.room.responses[sid]) APP_STATE.room.responses[sid] = {};
        demoNames.forEach((name, idx) => {
          const uid = "demo_" + (idx + 1);
          if (APP_STATE.room.responses[sid][uid]) return;
          const val = (idx + pIdx) % pollObj.options.length;
          const pts = pollObj.points || 50;
          APP_STATE.room.responses[sid][uid] = {
            userId: uid,
            userName: name,
            value: val,
            isCorrect: true,
            scoreDelta: pts,
            timestamp: Date.now()
          };
          APP_STATE.room.users[uid].score += pts;
          APP_STATE.room.users[uid].answersCount += 1;
        });
      });
      return;
    }
    if (!slide.interaction) return;
    const sid = slide.id;
    if (!APP_STATE.room.responses[sid]) APP_STATE.room.responses[sid] = {};

    demoNames.forEach((name, idx) => {
      const uid = "demo_" + (idx + 1);
      if (APP_STATE.room.responses[sid][uid]) return;

      const inter = slide.interaction;
      let val;
      let isCorrect = true;
      let pts = inter.points || 50;

      if (inter.kind === "mcq" || inter.kind === "tf") {
        // 75% de probabilidad de acertar para estadísticas realistas
        const hit = idx % 4 !== 0;
        val = hit ? inter.correctIndex : (inter.correctIndex + 1) % inter.options.length;
        isCorrect = val === inter.correctIndex;
        pts = isCorrect ? inter.points : 15;
      } else if (inter.kind === "poll") {
        val = idx % inter.options.length;
      } else if (inter.kind === "wordcloud") {
        val = sampleWords[idx % sampleWords.length] + (idx % 2 === 0 ? " Comu" : "");
      } else if (inter.kind === "open") {
        val = sampleOpenAnswers[idx % sampleOpenAnswers.length];
      }

      APP_STATE.room.responses[sid][uid] = {
        userId: uid,
        userName: name,
        value: val,
        isCorrect,
        scoreDelta: pts,
        timestamp: Date.now()
      };

      APP_STATE.room.users[uid].score += pts;
      APP_STATE.room.users[uid].answersCount += 1;
    });
  });

  commitStateChange();
}

function resetRoomData() {
  if (!confirm("¿Deseás reiniciar todas las respuestas y puntajes de la sala actual?")) return;
  const nextSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  APP_STATE.slide2SurveyOpened = false;
  APP_STATE.slide2SurveyAnimating = false;
  APP_STATE.openedSurveys = {};
  APP_STATE.room = {
    currentSlide: 0,
    slideSeq: nextSeq,
    revealAnswers: false,
    openedSurveys: {},
    users: {},
    responses: {},
    updatedAt: Date.now()
  };
  commitStateChange({ action: "reset_room", slideSeq: nextSeq });
}

/* =========================================================
   RENDERIZADO DE LA INTERFAZ
   ========================================================= */
function updateSyncBadge() {
  const dot = document.getElementById("sync-status-dot");
  const text = document.getElementById("sync-status-text");
  if (!dot || !text) return;

  if (APP_STATE.firebaseConnected) {
    dot.className = "status-dot";
    text.textContent = "Firebase + Tiempo Real Activo";
  } else {
    dot.className = "status-dot";
    text.textContent = "Sincronización en Vivo Activa";
  }
}

function renderAll() {
  updateSyncBadge();

  // Ocultar el botón de Menú para quienes ingresan escaneando el QR
  const floatingMenu = document.getElementById("floating-view-menu");
  if (floatingMenu) {
    floatingMenu.style.display = APP_STATE.isQrGuest ? "none" : "block";
  }

  // Ocultar la barra superior en todas las diapositivas de la Vista del Participante
  const topNavbar = document.getElementById("top-navbar");
  if (topNavbar) {
    topNavbar.style.display = APP_STATE.role === "participant" || APP_STATE.isQrGuest ? "none" : "flex";
  }

  // Botones de cambio de vista en barra y en el menú flotante
  const btnPres = document.getElementById("mode-btn-presenter");
  const btnPart = document.getElementById("mode-btn-participant");
  if (btnPres && btnPart) {
    btnPres.classList.toggle("active", APP_STATE.role === "presenter");
    btnPart.classList.toggle("active", APP_STATE.role === "participant");
  }

  const menuOptPres = document.getElementById("menu-opt-presenter");
  const menuOptPart = document.getElementById("menu-opt-participant");
  if (menuOptPres && menuOptPart) {
    menuOptPres.classList.toggle("active", APP_STATE.role === "presenter");
    menuOptPart.classList.toggle("active", APP_STATE.role === "participant");
  }

  const presenterView = document.getElementById("presenter-view");
  const participantView = document.getElementById("participant-view");

  const prevVideo = document.getElementById("gamer-reel-video");
  const prevVideoSrc = prevVideo ? prevVideo.getAttribute("src") : "";
  const prevVideoTime = prevVideo ? prevVideo.currentTime : 0;

  if (APP_STATE.role === "presenter") {
    presenterView.style.display = "grid";
    participantView.style.display = "none";
    renderPresenterSlide();
    renderPresenterSidebar();
  } else {
    presenterView.style.display = "none";
    participantView.style.display = "block";
    renderParticipantMobileView();
  }

  const nextVideo = document.getElementById("gamer-reel-video");
  if (nextVideo) {
    nextVideo.muted = true;
    nextVideo.volume = 0;
    if (prevVideoTime > 0 && prevVideoSrc === nextVideo.getAttribute("src")) {
      nextVideo.currentTime = prevVideoTime;
    }
    nextVideo.play().catch(() => { });
  }
}

function renderPresenterSlide() {
  const slideIndex = APP_STATE.room.currentSlide || 0;
  const slide = SLIDES_DATA[slideIndex] || SLIDES_DATA[0];
  const container = document.getElementById("pdf-slide-canvas");
  if (!container) return;

  const usersList = Object.values(APP_STATE.room.users || {});
  const connectedCount = usersList.length;

  let bodyHtml = "";

  if (slide.type === "cover-institutional") {
    const rowsHtml = slide.institution.table
      .map(
        ([label, val]) => `
        <tr>
          <th>${escapeHtml(label)}</th>
          <td>${escapeHtml(val)}</td>
        </tr>`
      )
      .join("");

    bodyHtml = `
      <div>
        <div class="pdf-cover-header">
          <h1>${escapeHtml(slide.institution.title)}</h1>
          <h2>${escapeHtml(slide.institution.subtitle)}</h2>
          <p class="pdf-subtitle">${escapeHtml(slide.institution.topic)}</p>
        </div>

        <div style="max-width: 760px; margin: 0 auto;">
          <table class="pdf-meta-table">
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
          <div style="margin-top: 1.25rem;">
            <button class="btn btn-primary" style="padding: 0.65rem 1.25rem; font-size: 0.92rem;" onclick="changeSlide(1)">
              Comenzar Presentación →
            </button>
          </div>
        </div>
      </div>
    `;
  } else if (slide.type === "cover") {
    const avatarsHtml =
      usersList.length > 0
        ? usersList
          .slice(0, 12)
          .map((u) => `<span class="user-chip">🟢 ${escapeHtml(u.name)}</span>`)
          .join("")
        : `<span style="font-size:0.8rem;color:var(--pdf-text-muted);">Esperando que los participantes escaneen el código QR...</span>`;

    bodyHtml = `
      <div>
        <div class="pdf-cover-header" style="margin-bottom: 1.25rem;">
          <h1>${escapeHtml(slide.institution.title)}</h1>
          <h2>${escapeHtml(slide.institution.subtitle)}</h2>
          <p class="pdf-subtitle">${escapeHtml(slide.institution.topic)}</p>
        </div>

        <div style="max-width: 560px; margin: 0 auto;">
          <div class="qr-hero-card">
            <span class="qr-hero-badge">Acceso Móvil en Tiempo Real</span>
            <h3 style="color:var(--pdf-navy);font-size:1.15rem;margin-bottom:0.25rem;">
              Escaneá para participar en vivo
            </h3>
            <p style="font-size:0.86rem;color:var(--pdf-text-muted);margin-bottom:0.5rem;">
              Respondé encuestas, trivias y sumá puntos desde tu celular
            </p>

            <div class="qr-canvas-wrapper" id="qr-code-container"></div>

            <div class="short-link-box">
              <span class="short-link-label">Enlace Corto de Acceso</span>
              <div class="short-link-url" id="short-link-text">${escapeHtml(APP_STATE.shortUrlDisplay)}</div>
              <div style="margin-top:0.45rem;display:flex;gap:0.4rem;justify-content:center;flex-wrap:wrap;">
                <button class="btn btn-sm" id="btn-copy-link" onclick="copyShortLink()">📋 Copiar enlace</button>
                <button class="btn btn-sm" onclick="openFirebaseModal()">⚙️ Configurar URL / Firebase</button>
                <button class="btn btn-sm btn-lavender" onclick="window.open(APP_STATE.fullJoinUrl, '_blank')">📱 Abrir Vista Móvil</button>
              </div>
            </div>

            <div class="connected-counter-card">
              <span class="connected-number" id="cover-connected-count">${connectedCount}</span>
              <div style="text-align:left;font-size:0.84rem;line-height:1.25;">
                <div>Usuarios Conectados</div>
                <div style="font-weight:400;font-size:0.74rem;opacity:0.88;">Sala: ${escapeHtml(APP_STATE.roomId)}</div>
              </div>
            </div>

            <div class="connected-avatars">
              ${avatarsHtml}
            </div>

            <div style="margin-top: 1.15rem;">
              <button class="btn btn-primary" style="padding: 0.65rem 1.35rem; font-size: 0.92rem;" onclick="changeSlide(1)">
                Ir a Diapositiva 1 (Portada) →
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (slide.type === "content") {
    const indexHtml = slide.indexItems
      ? `
        <div class="pdf-index-box">
          <ul class="pdf-index-list">
            ${slide.indexItems
        .map(
          (item) =>
            `<li class="${item.indent ? "indent" : ""}"><strong>${escapeHtml(item.text)}</strong></li>`
        )
        .join("")}
          </ul>
        </div>`
      : "";

    const paragraphsHtml = (slide.paragraphs || [])
      .map((p) => `<p class="pdf-paragraph">${escapeHtml(p)}</p>`)
      .join("");

    const bulletsHtml = slide.bullets
      ? `<ul class="pdf-list">
          ${slide.bullets
        .map(
          (b) =>
            `<li><strong>${escapeHtml(b.lead)}</strong> ${escapeHtml(b.text)}</li>`
        )
        .join("")}
        </ul>`
      : "";

    const footerParagraphsHtml = (slide.footerParagraphs || [])
      .map(
        (fp) =>
          `<p class="pdf-paragraph" style="margin-top:0.65rem;"><strong>${escapeHtml(fp.lead)}</strong> ${escapeHtml(fp.text)}</p>`
      )
      .join("");

    const interactiveHtml =
      slide.id === "slide-2"
        ? `
          <div class="interactive-block">
            ${renderSurveyTimerWidget(slide.id)}
            <div class="interactive-header">
              <div style="display:flex;align-items:center;gap:0.6rem;">
                <span class="interactive-type-tag">${escapeHtml(slide.interaction.badge)}</span>
                <span style="font-size:0.84rem;font-weight:600;color:var(--pdf-navy);">
                  📱 Los participantes están votando desde sus móviles
                </span>
              </div>
              <button class="btn btn-sm btn-primary" onclick="changeSlide(1)">
                📊 Ver Resultados en Tiempo Real →
              </button>
            </div>
            <div class="interactive-question" style="margin-bottom:0;">${escapeHtml(slide.interaction.question)}</div>
          </div>
        `
        : slide.interaction
          ? renderPresenterInteractiveBlock(slide)
          : slide.videoCard
            ? renderSlideLoopVideoBlock(slide.videoCard)
            : "";

    bodyHtml = `
      <div>
        <h2 class="pdf-section-title">${escapeHtml(slide.sectionTitle)}</h2>
        ${slide.subSectionTitle ? `<h3 class="pdf-subsection-title">${escapeHtml(slide.subSectionTitle)}</h3>` : ""}
        ${indexHtml}
        ${paragraphsHtml}
        ${bulletsHtml}
        ${footerParagraphsHtml}
        ${interactiveHtml}
      </div>
    `;
  } else if (slide.type === "poll-results") {
    const sourceSlide = SLIDES_DATA.find((s) => s.id === slide.sourceSlideId) || SLIDES_DATA[2];
    bodyHtml = `
      <div>
        <h2 class="pdf-section-title">${escapeHtml(slide.sectionTitle)}</h2>
        ${slide.subSectionTitle ? `<h3 class="pdf-subsection-title">${escapeHtml(slide.subSectionTitle)}</h3>` : ""}
        ${renderPresenterInteractiveBlock(sourceSlide, true)}
      </div>
    `;
  } else if (slide.type === "poll-abcd-results") {
    const sourceSlide = SLIDES_DATA.find((s) => s.id === slide.sourceSlideId);
    bodyHtml = `
      <div>
        <h2 class="pdf-section-title">${escapeHtml(slide.sectionTitle)}</h2>
        ${slide.subSectionTitle ? `<h3 class="pdf-subsection-title">${escapeHtml(slide.subSectionTitle)}</h3>` : ""}
        ${renderPollAbcdResultsBlock(sourceSlide)}
      </div>
    `;
  } else if (slide.type === "tf-stats-chart") {
    const sourceSlide = SLIDES_DATA.find((s) => s.id === slide.sourceSlideId);
    bodyHtml = `
      <div>
        <h2 class="pdf-section-title">${escapeHtml(slide.sectionTitle)}</h2>
        ${slide.subSectionTitle ? `<h3 class="pdf-subsection-title">${escapeHtml(slide.subSectionTitle)}</h3>` : ""}
        ${renderTfStatsChartBlock(sourceSlide)}
      </div>
    `;
  } else if (slide.type === "dual-poll") {
    bodyHtml = `
      <div>
        <h2 class="pdf-section-title">${escapeHtml(slide.sectionTitle)}</h2>
        ${slide.subSectionTitle ? `<h3 class="pdf-subsection-title">${escapeHtml(slide.subSectionTitle)}</h3>` : ""}
        <div class="participant-slide2-grid" style="margin-top: 1rem;">
          <div>
            ${renderPresenterInteractiveBlock({ id: slide.pollLeft.id, interaction: slide.pollLeft }, true)}
          </div>
          <div>
            ${renderPresenterInteractiveBlock({ id: slide.pollRight.id, interaction: slide.pollRight }, true)}
          </div>
        </div>
      </div>
    `;
  } else if (slide.type === "dual-poll-3d-chart") {
    const sourceSlide = SLIDES_DATA.find((s) => s.id === slide.sourceSlideId);
    bodyHtml = `
      <div>
        <h2 class="pdf-section-title">${escapeHtml(slide.sectionTitle)}</h2>
        ${slide.subSectionTitle ? `<h3 class="pdf-subsection-title">${escapeHtml(slide.subSectionTitle)}</h3>` : ""}
        ${renderDualPoll3dChartBlock(sourceSlide)}
      </div>
    `;
  } else if (slide.type === "closing") {
    const showFinalResults = Boolean(APP_STATE.openedSurveys[slide.id]);
    const animClass = APP_STATE.openedSurveys[slide.id + "_anim"] ? "final-ranking-spawn" : "";

    if (showFinalResults) {
      bodyHtml = `
        <div>
          ${renderFullParticipantsLeaderboardBlock(animClass)}
        </div>
      `;
    } else {
      const conclHtml = slide.conclusionParagraphs
        .map((p) => `<p class="pdf-paragraph">${escapeHtml(p)}</p>`)
        .join("");

      bodyHtml = `
        <div>
          <h2 class="pdf-section-title">3. CONCLUSIÓN</h2>
          ${conclHtml}

          <div style="margin-top:1.6rem;text-align:center;">
            <button type="button" class="btn-ver-resultados" onclick="triggerSlide17FinalResults('${slide.id}')">
              🏆 Ver Resultados
            </button>
          </div>
        </div>
      `;
    }
  }

  // Paginador inferior estilo PDF (mostrando numeración desde 0)
  const dotsHtml = SLIDES_DATA.map(
    (s, idx) =>
      `<button class="slide-dot ${idx === slideIndex ? "active" : ""}" onclick="goToSlide(${idx})" title="Diapositiva ${s.number}: ${escapeHtml(s.shortTitle)}">${s.number}</button>`
  ).join("");

  const footerHtml = `
    <div class="pdf-footer">
      <div>
        <strong>Instituto Superior Carmen Molina de Llano</strong> · Subcultura Gamer en el NEA
      </div>
      <div class="slide-dots">
        ${dotsHtml}
      </div>
      <div style="display:flex;align-items:center;gap:0.5rem;">
        <button class="btn btn-sm" onclick="changeSlide(-1)" ${slideIndex === 0 ? "disabled" : ""}>← Anterior</button>
        <span style="font-weight:700;color:var(--pdf-navy);">Diap. ${slide.number} / ${SLIDES_DATA[SLIDES_DATA.length - 1].number}</span>
        <button class="btn btn-sm btn-primary" onclick="changeSlide(1)" ${slideIndex === SLIDES_DATA.length - 1 ? "disabled" : ""}>Siguiente →</button>
      </div>
    </div>
  `;

  container.innerHTML = bodyHtml + footerHtml;

  if (slide.type === "cover") {
    renderQrCodeIfVisible();
  }
}

function renderPresenterInteractiveBlock(slide, isPresenter = true) {
  const inter = slide.interaction;
  const slideResponses = Object.values(APP_STATE.room.responses?.[slide.id] || {});
  const totalVotes = slideResponses.length;
  const reveal = APP_STATE.room.revealAnswers;

  let contentHtml = "";

  if (inter.kind === "mcq" || inter.kind === "tf" || inter.kind === "poll") {
    const counts = inter.options.map(() => 0);
    slideResponses.forEach((r) => {
      if (typeof r.value === "number" && counts[r.value] !== undefined) {
        counts[r.value]++;
      }
    });

    const letters = ["A", "B", "C", "D"];
    const barsHtml = inter.options
      .map((opt, idx) => {
        const count = counts[idx];
        const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
        const isCorrectOption =
          (inter.kind === "mcq" || inter.kind === "tf") && reveal && idx === inter.correctIndex;

        return `
          <div class="chart-row ${isCorrectOption ? "correct-highlight" : ""}">
            <div class="chart-fill" style="width: ${pct}%;"></div>
            <div class="chart-row-content">
              <span>
                <strong>${letters[idx] || idx + 1}.</strong> ${escapeHtml(opt)}
                ${isCorrectOption ? " ✅ <em>(Respuesta Correcta)</em>" : ""}
              </span>
              <span class="chart-pct">${count} voto${count === 1 ? "" : "s"} (${pct}%)</span>
            </div>
          </div>
        `;
      })
      .join("");

    contentHtml = `<div class="chart-bars">${barsHtml}</div>`;
  } else if (inter.kind === "wordcloud") {
    const freqMap = {};
    slideResponses.forEach((r) => {
      const raw = String(r.value || "").trim();
      if (!raw) return;
      raw
        .split(/[\s,;]+/)
        .map((w) => w.trim())
        .filter((w) => w.length >= 2)
        .forEach((word) => {
          const key = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          freqMap[key] = (freqMap[key] || 0) + 1;
        });
    });

    const entries = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);
    if (entries.length === 0) {
      contentHtml = `
        <div class="wordcloud-canvas">
          <span style="color:var(--pdf-text-muted);font-size:0.92rem;">
            Esperando palabras de los participantes desde sus móviles...
          </span>
        </div>`;
    } else {
      const maxCount = Math.max(...entries.map((e) => e[1]), 1);
      const wordsHtml = entries
        .map(([word, count], i) => {
          const sizeRem = 0.95 + (count / maxCount) * 1.35;
          const color = WORD_COLORS[i % WORD_COLORS.length];
          return `<span class="word-item" style="font-size:${sizeRem.toFixed(2)}rem;color:${color};background:rgba(30,58,95,0.06);">
            ${escapeHtml(word)} <sup style="font-size:0.7rem;opacity:0.75;">(${count})</sup>
          </span>`;
        })
        .join("");
      contentHtml = `<div class="wordcloud-canvas">${wordsHtml}</div>`;
    }
  } else if (inter.kind === "open") {
    if (slideResponses.length === 0) {
      contentHtml = `
        <div style="background:#fff;border:1px solid var(--pdf-border);border-radius:8px;padding:1rem;color:var(--pdf-text-muted);font-size:0.92rem;">
          Esperando respuestas abiertas de los participantes...
        </div>`;
    } else {
      const cardsHtml = slideResponses
        .slice()
        .reverse()
        .map(
          (r) => `
          <div class="open-answer-card">
            <div class="open-answer-author">
              <span>👤 ${escapeHtml(r.userName || "Participante")}</span>
              <span>+${r.scoreDelta || 80} pts</span>
            </div>
            <div class="open-answer-text">${escapeHtml(r.value)}</div>
          </div>`
        )
        .join("");
      contentHtml = `<div class="open-answers-grid">${cardsHtml}</div>`;
    }
  }

  const showRevealBtn = isPresenter && (inter.kind === "mcq" || inter.kind === "tf");

  return `
    <div class="interactive-block">
      ${isPresenter ? renderSurveyTimerWidget(slide.id) : ""}
      <div class="interactive-header">
        <div style="display:flex;align-items:center;gap:0.6rem;">
          <span class="interactive-type-tag">${escapeHtml(inter.badge)}</span>
          <span style="font-size:0.84rem;font-weight:600;color:var(--pdf-navy);">
            📊 ${totalVotes} respuesta${totalVotes === 1 ? "" : "s"} en tiempo real
          </span>
        </div>
        ${showRevealBtn
      ? `<button class="btn btn-sm ${reveal ? "btn-primary" : ""}" onclick="toggleRevealAnswers()">
                ${reveal ? "👁️ Ocultar Respuesta Correcta" : "✅ Mostrar Respuesta Correcta"}
              </button>`
      : ""
    }
      </div>
      <div class="interactive-question">${escapeHtml(inter.question)}</div>
      ${contentHtml}
    </div>
  `;
}

function renderSlideLoopVideoBlock(videoCard) {
  if (!videoCard) return "";
  return `
    <div style="width:100%;height:100%;border-radius:10px;overflow:hidden;background:#000;box-shadow:0 10px 26px rgba(15,23,42,0.28);display:flex;align-items:center;justify-content:center;">
      <video
        id="gamer-reel-video"
        src="${escapeHtml(videoCard.src)}"
        autoplay
        loop
        muted
         defaultMuted
        playsinline
        disablePictureInPicture
        onloadedmetadata="this.muted=true;this.volume=0;this.play().catch(()=>{});"
        style="width:100%;height:100%;max-height:520px;aspect-ratio:9/16;display:block;object-fit:cover;pointer-events:none;"
      ></video>
    </div>
  `;
}

function renderPollAbcdResultsBlock(sourceSlide) {
  if (!sourceSlide || !sourceSlide.interaction) return "";
  const inter = sourceSlide.interaction;
  const slideResponses = Object.values(APP_STATE.room.responses?.[sourceSlide.id] || {});
  const totalVotes = slideResponses.length;

  const counts = (inter.options || []).map(() => 0);
  slideResponses.forEach((r) => {
    if (typeof r.value === "number" && counts[r.value] !== undefined) {
      counts[r.value]++;
    }
  });

  const letters = ["A", "B", "C", "D"];
  const cardColors = [
    { bg: "#eef4fb", border: "#1e3a5f", text: "#1e3a5f" },
    { bg: "#eaf6f0", border: "#1f7a4c", text: "#1f7a4c" },
    { bg: "#fef9e7", border: "#b45309", text: "#b45309" },
    { bg: "#f3f1fa", border: "#5b21b6", text: "#5b21b6" }
  ];

  const cardsHtml = (inter.options || [])
    .map((opt, idx) => {
      const count = counts[idx] || 0;
      const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
      const col = cardColors[idx % cardColors.length];
      return `
        <div style="background:${col.bg};border:2px solid ${col.border};border-radius:10px;padding:1rem 0.85rem;text-align:center;">
          <div style="font-size:0.84rem;font-weight:800;color:${col.text};text-transform:uppercase;letter-spacing:0.04em;">
            Opción ${letters[idx] || idx + 1}
          </div>
          <div style="font-size:2.25rem;font-weight:900;color:${col.text};line-height:1.15;margin:0.25rem 0;">
            ${count}
          </div>
          <div style="font-size:0.82rem;font-weight:700;color:${col.text};">
            ${count === 1 ? "1 Participante" : `${count} Participantes`} (${pct}%)
          </div>
          <div style="font-size:0.78rem;color:var(--pdf-text-main);margin-top:0.35rem;line-height:1.25;">
            ${escapeHtml(opt)}
          </div>
        </div>
      `;
    })
    .join("");

  const barsHtml = (inter.options || [])
    .map((opt, idx) => {
      const count = counts[idx] || 0;
      const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
      return `
        <div class="chart-row">
          <div class="chart-fill" style="width:${pct}%;"></div>
          <div class="chart-row-content">
            <span>
              <strong>Opción ${letters[idx] || idx + 1}:</strong> ${escapeHtml(opt)}
            </span>
            <span class="chart-pct">${count} (${pct}%)</span>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="interactive-block" style="margin-top:0.75rem;">
      <div class="interactive-header">
        <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
          <span class="interactive-type-tag">📊 Conteo Numérico por Opción (A, B, C, D)</span>
          <span style="font-size:0.86rem;font-weight:700;color:var(--pdf-navy);">
            Total de respuestas: ${totalVotes}
          </span>
        </div>
      </div>

      <div class="interactive-question" style="margin-bottom:1.15rem;">
        ${escapeHtml(inter.question)}
      </div>

      <!-- Cuatro tarjetas con los números de las opciones A, B, C y D -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:0.85rem;margin-bottom:1.35rem;">
        ${cardsHtml}
      </div>

      <!-- Barras comparativas en vivo -->
      <div class="chart-bars">
        ${barsHtml}
      </div>
    </div>
  `;
}

function renderTfStatsChartBlock(sourceSlide) {
  if (!sourceSlide || !sourceSlide.interaction) return "";
  const inter = sourceSlide.interaction;
  const slideResponses = Object.values(APP_STATE.room.responses?.[sourceSlide.id] || {});
  const connectedCount = Object.keys(APP_STATE.room.users || {}).length;
  const totalBase = Math.max(connectedCount, slideResponses.length);

  let correctCount = 0;
  let wrongCount = 0;

  slideResponses.forEach((r) => {
    if (r.value === inter.correctIndex || r.isCorrect === true) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const unansweredCount = Math.max(0, totalBase - (correctCount + wrongCount));

  const correctPct = totalBase > 0 ? Math.round((correctCount / totalBase) * 100) : 0;
  const wrongPct = totalBase > 0 ? Math.round((wrongCount / totalBase) * 100) : 0;
  const unansweredPct = totalBase > 0 ? Math.round((unansweredCount / totalBase) * 100) : 0;

  const correctLabel = inter.options?.[inter.correctIndex] || "Verdadero";

  return `
    <div class="interactive-block" style="margin-top:0.75rem;">
      <div class="interactive-header">
        <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
          <span class="interactive-type-tag">📊 Gráfico de Desempeño (Solo Números)</span>
          <span style="font-size:0.86rem;font-weight:700;color:var(--pdf-navy);">
            👥 Total Conectados: ${totalBase}
          </span>
        </div>
        <span style="font-size:0.84rem;font-weight:700;color:var(--accent-success);">
          Respuesta correcta: ${escapeHtml(correctLabel)}
        </span>
      </div>

      <div class="interactive-question" style="margin-bottom:1.15rem;">
        ${escapeHtml(inter.question)}
      </div>

      <!-- Tarjetas numéricas (Sin nombres) -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:0.85rem;margin-bottom:1.35rem;">
        <div style="background:#eaf6f0;border:2px solid #1f7a4c;border-radius:10px;padding:1rem;text-align:center;">
          <div style="font-size:2rem;font-weight:800;color:#1f7a4c;line-height:1.1;">${correctCount}</div>
          <div style="font-size:0.85rem;font-weight:700;color:#1f7a4c;margin-top:0.2rem;">✅ Contestaron Bien (${correctPct}%)</div>
        </div>
        <div style="background:#fdf0f0;border:2px solid #b83232;border-radius:10px;padding:1rem;text-align:center;">
          <div style="font-size:2rem;font-weight:800;color:#b83232;line-height:1.1;">${wrongCount}</div>
          <div style="font-size:0.85rem;font-weight:700;color:#b83232;margin-top:0.2rem;">❌ Contestaron Mal (${wrongPct}%)</div>
        </div>
        <div style="background:#f1f5f9;border:2px solid #64748b;border-radius:10px;padding:1rem;text-align:center;">
          <div style="font-size:2rem;font-weight:800;color:#475569;line-height:1.1;">${unansweredCount}</div>
          <div style="font-size:0.85rem;font-weight:700;color:#475569;margin-top:0.2rem;">⏳ No Contestaron (${unansweredPct}%)</div>
        </div>
      </div>

      <!-- Gráfico de barras horizontal en vivo (Solo números) -->
      <div class="chart-bars">
        <div class="chart-row" style="border-color:#1f7a4c;">
          <div class="chart-fill" style="width:${correctPct}%;background:rgba(31,122,76,0.22);"></div>
          <div class="chart-row-content">
            <span style="color:#1f7a4c;font-weight:700;">✅ Contestaron Bien</span>
            <span class="chart-pct" style="color:#1f7a4c;">${correctCount} (${correctPct}%)</span>
          </div>
        </div>

        <div class="chart-row" style="border-color:#b83232;">
          <div class="chart-fill" style="width:${wrongPct}%;background:rgba(184,50,50,0.2);"></div>
          <div class="chart-row-content">
            <span style="color:#b83232;font-weight:700;">❌ Contestaron Mal</span>
            <span class="chart-pct" style="color:#b83232;">${wrongCount} (${wrongPct}%)</span>
          </div>
        </div>

        <div class="chart-row" style="border-color:#64748b;">
          <div class="chart-fill" style="width:${unansweredPct}%;background:rgba(100,116,139,0.22);"></div>
          <div class="chart-row-content">
            <span style="color:#475569;font-weight:700;">⏳ No Contestaron</span>
            <span class="chart-pct" style="color:#475569;">${unansweredCount} (${unansweredPct}%)</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDualPoll3dChartBlock(sourceSlide) {
  if (!sourceSlide || !sourceSlide.pollLeft || !sourceSlide.pollRight) return "";
  const connectedCount = Object.keys(APP_STATE.room.users || {}).length;

  const buildSingle3dCard = (pollObj, titleBadge) => {
    const resList = Object.values(APP_STATE.room.responses?.[pollObj.id] || {});
    const totalBase = Math.max(connectedCount, resList.length);

    let yesCount = 0;
    let noCount = 0;
    resList.forEach((r) => {
      if (r.value === 0) yesCount++;
      else if (r.value === 1) noCount++;
    });

    const noneCount = Math.max(0, totalBase - (yesCount + noCount));

    const yesPct = totalBase > 0 ? Math.round((yesCount / totalBase) * 100) : 0;
    const noPct = totalBase > 0 ? Math.round((noCount / totalBase) * 100) : 0;
    const nonePct = totalBase > 0 ? Math.round((noneCount / totalBase) * 100) : 0;

    // Altura proporcional en píxeles para las columnas 3D (mínimo 14px, máximo 145px)
    const yesHeight = Math.max(14, Math.round((yesPct / 100) * 145));
    const noHeight = Math.max(14, Math.round((noPct / 100) * 145));
    const noneHeight = Math.max(14, Math.round((nonePct / 100) * 145));

    return `
      <div class="chart3d-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.4rem;">
          <span class="interactive-type-tag">${escapeHtml(titleBadge)}</span>
          <span style="font-size:0.82rem;font-weight:800;color:var(--pdf-navy);">
            Total: ${totalBase}
          </span>
        </div>

        <div class="interactive-question" style="font-size:1rem;margin-bottom:0.75rem;">
          ${escapeHtml(pollObj.question)}
        </div>

        <!-- Escenario de Columnas 3D (Solo números) -->
        <div class="chart3d-stage">
          <div class="chart3d-col-wrap">
            <div class="chart3d-num-badge" style="color:#15803d;border-color:#22c55e;">
              ${yesCount} (${yesPct}%)
            </div>
            <div class="chart3d-bar bar-yes" style="height:${yesHeight}px;"></div>
          </div>

          <div class="chart3d-col-wrap">
            <div class="chart3d-num-badge" style="color:#b91c1c;border-color:#ef4444;">
              ${noCount} (${noPct}%)
            </div>
            <div class="chart3d-bar bar-no" style="height:${noHeight}px;"></div>
          </div>

          <div class="chart3d-col-wrap">
            <div class="chart3d-num-badge" style="color:#334155;border-color:#64748b;">
              ${noneCount} (${nonePct}%)
            </div>
            <div class="chart3d-bar bar-none" style="height:${noneHeight}px;"></div>
          </div>
        </div>

        <!-- Etiquetas inferiores -->
        <div class="chart3d-labels-row">
          <div class="chart3d-label-item" style="color:#15803d;">
            ✅ Sí: ${yesCount}
          </div>
          <div class="chart3d-label-item" style="color:#b91c1c;">
            ❌ No: ${noCount}
          </div>
          <div class="chart3d-label-item" style="color:#475569;">
            ⏳ Sin resp.: ${noneCount}
          </div>
        </div>
      </div>
    `;
  };

  return `
    <div class="participant-slide2-grid" style="margin-top:0.85rem;">
      <div>
        ${buildSingle3dCard(sourceSlide.pollLeft, "📊 Gráfico 3D · Encuesta 1")}
      </div>
      <div>
        ${buildSingle3dCard(sourceSlide.pollRight, "📊 Gráfico 3D · Encuesta 2")}
      </div>
    </div>
  `;
}

function renderFinalStatsBanner() {
  const users = Object.values(APP_STATE.room.users || {}).sort(
    (a, b) => (b.score || 0) - (a.score || 0)
  );
  const totalResponses = Object.values(APP_STATE.room.responses || {}).reduce(
    (acc, slideObj) => acc + Object.keys(slideObj || {}).length,
    0
  );

  const top3Html =
    users.length === 0
      ? `<p style="font-size:0.9rem;color:var(--pdf-text-muted);">Aún no hay participantes registrados. Podés usar el botón "Simular Respuestas Demo" en el panel derecho.</p>`
      : users
        .slice(0, 5)
        .map((u, idx) => {
          const medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `#${idx + 1}`;
          return `
              <div class="leaderboard-row" style="background:#fff;">
                <span><strong>${medal} ${escapeHtml(u.name)}</strong> (${u.answersCount || 0} resp.)</span>
                <span class="leaderboard-score">${u.score || 0} pts</span>
              </div>
            `;
        })
        .join("");

  return `
    <div class="interactive-block" style="margin-top:1.5rem;">
      <div class="interactive-header">
        <span class="interactive-type-tag">🏆 Podio Final y Estadísticas de la Presentación</span>
        <span style="font-size:0.85rem;font-weight:700;color:var(--pdf-navy);">
          ${users.length} participantes · ${totalResponses} interacciones totales
        </span>
      </div>
      <div class="leaderboard-list">
        ${top3Html}
      </div>
    </div>
  `;
}

function renderPresenterSidebar() {
  const sidebar = document.getElementById("presenter-sidebar");
  if (!sidebar) return;

  const slideIndex = APP_STATE.room.currentSlide || 0;
  const slide = SLIDES_DATA[slideIndex] || SLIDES_DATA[0];
  const users = Object.values(APP_STATE.room.users || {}).sort(
    (a, b) => (b.score || 0) - (a.score || 0)
  );

  const targetResponseSlideId = slide.sourceSlideId || slide.id;
  const dualSlideRef =
    slide.type === "dual-poll"
      ? slide
      : slide.type === "dual-poll-3d-chart"
        ? SLIDES_DATA.find((s) => s.id === slide.sourceSlideId)
        : null;

  const currentSlideResponses = dualSlideRef
    ? Math.max(
      Object.keys(APP_STATE.room.responses?.[dualSlideRef.pollLeft.id] || {}).length,
      Object.keys(APP_STATE.room.responses?.[dualSlideRef.pollRight.id] || {}).length
    )
    : Object.keys(APP_STATE.room.responses?.[targetResponseSlideId] || {}).length;

  const totalAllResponses = Object.values(APP_STATE.room.responses || {}).reduce(
    (acc, obj) => acc + Object.keys(obj || {}).length,
    0
  );

  const participationRate =
    users.length > 0 ? Math.min(100, Math.round((currentSlideResponses / users.length) * 100)) : 0;

  const leaderboardHtml =
    users.length === 0
      ? `<div style="font-size:0.83rem;color:var(--pdf-text-muted);text-align:center;padding:0.75rem 0;">
          Sin participantes aún. Escaneá el QR o presioná "Simular Clase".
        </div>`
      : users
        .map((u, i) => {
          const rankClass = i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : "";
          return `
              <div class="leaderboard-row">
                <div style="display:flex;align-items:center;">
                  <span class="leaderboard-rank ${rankClass}">${i + 1}</span>
                  <span style="font-weight:600;">${escapeHtml(u.name)}</span>
                </div>
                <span class="leaderboard-score">${u.score || 0} pts</span>
              </div>
            `;
        })
        .join("");

  const slideSelectorOptions = SLIDES_DATA.map(
    (s, idx) =>
      `<option value="${idx}" ${idx === slideIndex ? "selected" : ""}>
        ${s.number}. ${escapeHtml(s.shortTitle)}
      </option>`
  ).join("");

  sidebar.innerHTML = `
    <div class="sidebar-card">
      <h3>
        <span>🎛️ Control del Presentador</span>
        <span style="font-size:0.76rem;color:var(--pdf-text-muted);">Diapositiva ${slide.number}/${SLIDES_DATA[SLIDES_DATA.length - 1].number}</span>
      </h3>

      <select class="input-field" style="margin-bottom:0.65rem;padding:0.5rem;" onchange="goToSlide(Number(this.value))">
        ${slideSelectorOptions}
      </select>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-bottom:0.65rem;">
        <button class="btn" onclick="changeSlide(-1)" ${slideIndex === 0 ? "disabled" : ""}>← Anterior</button>
        <button class="btn btn-primary" onclick="changeSlide(1)" ${slideIndex === SLIDES_DATA.length - 1 ? "disabled" : ""}>Siguiente →</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:0.45rem;">
        <button class="btn btn-lavender btn-sm" onclick="simulateClassActivity()">
          ✨ Simular Respuestas de Clase (Demo)
        </button>
        <button class="btn btn-sm" onclick="resetRoomData()">
          🗑️ Reiniciar Datos de Sala
        </button>
      </div>
    </div>

    <div class="sidebar-card">
      <h3>📈 Estadísticas en Tiempo Real</h3>
      <div class="kpi-grid">
        <div class="kpi-box">
          <div class="kpi-value">${users.length}</div>
          <div class="kpi-label">Conectados</div>
        </div>
        <div class="kpi-box">
          <div class="kpi-value">${currentSlideResponses}</div>
          <div class="kpi-label">Resp. Diapositiva</div>
        </div>
        <div class="kpi-box">
          <div class="kpi-value">${participationRate}%</div>
          <div class="kpi-label">Participación</div>
        </div>
        <div class="kpi-box">
          <div class="kpi-value">${totalAllResponses}</div>
          <div class="kpi-label">Resp. Totales</div>
        </div>
      </div>

      <div style="background:var(--pdf-cell-right-bg);border-radius:6px;padding:0.55rem 0.7rem;border:1px solid #eceaf4;">
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:0.25rem;">
          <span>Progreso de respuestas actual</span>
          <strong>${participationRate}%</strong>
        </div>
        <div style="height:8px;background:#e2e8f0;border-radius:999px;overflow:hidden;">
          <div style="width:${participationRate}%;height:100%;background:var(--pdf-navy);transition:width 0.3s;"></div>
        </div>
      </div>
    </div>

    <div class="sidebar-card">
      <h3>
        <span>🏆 Ranking de Puntuación</span>
        <span style="font-size:0.74rem;color:var(--pdf-text-muted);">En vivo</span>
      </h3>
      <div class="leaderboard-list">
        ${leaderboardHtml}
      </div>
    </div>
  `;
}

/* =========================================================
   RENDERIZADO VISTA PARTICIPANTE (MÓVIL SINCRONIZADO)
   ========================================================= */
function renderParticipantMobileView() {
  const container = document.getElementById("participant-view");
  if (!container) return;

  const rawSlideIndex = APP_STATE.room.currentSlide || 0;
  const canControl = !APP_STATE.isQrGuest;

  // Si un participante en celular escaneó el QR y aún no ingresó su nombre en esta sesión, mostrar siempre el registro primero;
  // una vez registrado con su nombre, pasa automáticamente a la Diapositiva 1 (Portada Institucional).
  if (!canControl && !APP_STATE.participantUser) {
    if (document.getElementById("participant-name-input")) {
      return;
    }
    container.innerHTML = `
      <div class="participant-wrapper">
        <div class="mobile-card">
          <div class="mobile-header">
            <div>
              <div style="font-weight:800;font-size:1rem;">Subcultura Gamer en el NEA</div>
              <div style="font-size:0.76rem;opacity:0.85;">Instituto Superior Carmen Molina de Llano</div>
            </div>
            <span class="mobile-user-score">Registro de Participante</span>
          </div>
          <div class="mobile-body">
            <h3 style="color:var(--pdf-navy);margin-bottom:0.5rem;">¡Bienvenido/a a la presentación interactiva!</h3>
            <p style="font-size:0.9rem;color:var(--pdf-text-muted);margin-bottom:1rem;">
              Ingresá tu nombre o apodo gamer para registrarte y pasar a la Diapositiva 1.
            </p>
            <form onsubmit="registerParticipant(event)">
              <input
                type="text"
                id="participant-name-input"
                class="input-field"
                placeholder="Tu nombre o apodo (ej. Matías, Sofi_NEA)"
                required
                maxlength="28"
                autocomplete="off"
              />
              <button type="submit" class="btn btn-primary" style="width:100%;padding:0.8rem;">
                Registrarme e Ir a Diapositiva 1 →
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Cuando el participante en celular ya ingresó por el QR mientras la sala está en la Diapositiva 0,
  // mostrarle directamente la Diapositiva 1 (Portada Institucional).
  const slideIndex = !canControl && rawSlideIndex === 0 && APP_STATE.participantUser ? 1 : rawSlideIndex;
  const slide = SLIDES_DATA[slideIndex] || SLIDES_DATA[0];

  // Si el presentador en la PC está en la Diapositiva 0 (QR) usando la Vista de Participante, mostrar el QR también allí
  if (canControl && slide.type === "cover") {
    const usersList = Object.values(APP_STATE.room.users || {});
    const connectedCount = usersList.length;
    const avatarsHtml =
      usersList.length > 0
        ? usersList
          .slice(0, 12)
          .map((u) => `<span class="user-chip">🟢 ${escapeHtml(u.name)}</span>`)
          .join("")
        : `<span style="font-size:0.8rem;color:var(--pdf-text-muted);">Esperando que los participantes escaneen el código QR...</span>`;

    container.innerHTML = `
      <div class="participant-wrapper" style="max-width: 780px;">
        <div class="pdf-sheet" style="min-height: auto; padding: 2rem 1.75rem;">
          <div class="pdf-cover-header" style="margin-bottom: 1.25rem;">
            <h1>${escapeHtml(slide.institution.title)}</h1>
            <h2>${escapeHtml(slide.institution.subtitle)}</h2>
            <p class="pdf-subtitle">${escapeHtml(slide.institution.topic)}</p>
          </div>

          <div style="max-width: 560px; margin: 0 auto;">
            <div class="qr-hero-card">
              <span class="qr-hero-badge">Acceso Móvil en Tiempo Real · Diapositiva 0</span>
              <h3 style="color:var(--pdf-navy);font-size:1.15rem;margin-bottom:0.25rem;">
                Escaneá para participar en vivo
              </h3>
              <p style="font-size:0.86rem;color:var(--pdf-text-muted);margin-bottom:0.5rem;">
                Al escanear el QR, los participantes ingresan su nombre y pasan a la Diapositiva 1
              </p>

              <div class="qr-canvas-wrapper" id="qr-code-container"></div>

              <div class="short-link-box">
                <span class="short-link-label">Enlace Corto de Acceso</span>
                <div class="short-link-url" id="short-link-text">${escapeHtml(APP_STATE.shortUrlDisplay)}</div>
              </div>

              <div class="connected-counter-card">
                <span class="connected-number" id="cover-connected-count">${connectedCount}</span>
                <div style="text-align:left;font-size:0.84rem;line-height:1.25;">
                  <div>Usuarios Conectados</div>
                  <div style="font-weight:400;font-size:0.74rem;opacity:0.88;">Sala: ${escapeHtml(APP_STATE.roomId)}</div>
                </div>
              </div>

              <div class="connected-avatars">
                ${avatarsHtml}
              </div>

              <div style="margin-top: 1.15rem;">
                <button class="btn btn-primary" style="padding: 0.7rem 1.35rem; font-size: 0.95rem;" onclick="changeSlide(1)">
                  Siguiente (Ir a Diapositiva 1) →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    renderQrCodeIfVisible();
    return;
  }

  // Si estamos en la Diapositiva 1 (Portada Institucional), mostrarla reflejada también en la vista Participante
  if (slide.type === "cover-institutional") {
    const rowsHtml = slide.institution.table
      .map(
        ([label, val]) => `
        <tr>
          <th>${escapeHtml(label)}</th>
          <td>${escapeHtml(val)}</td>
        </tr>`
      )
      .join("");

    container.innerHTML = `
      <div class="participant-wrapper" style="max-width: 780px;">
        <div class="pdf-sheet" style="min-height: auto; padding: 2rem 1.75rem;">
          <div class="pdf-cover-header">
            <h1>${escapeHtml(slide.institution.title)}</h1>
            <h2>${escapeHtml(slide.institution.subtitle)}</h2>
            <p class="pdf-subtitle">${escapeHtml(slide.institution.topic)}</p>
          </div>

          <div style="max-width: 720px; margin: 0 auto; width: 100%;">
            <table class="pdf-meta-table">
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
            ${canControl
        ? `<div style="margin-top: 1.25rem;">
                    <button class="btn btn-primary" style="padding: 0.7rem 1.35rem; font-size: 0.95rem;" onclick="changeSlide(1)">
                      Siguiente →
                    </button>
                  </div>`
        : ""
      }
          </div>
        </div>
      </div>
    `;
    return;
  }

  const user = APP_STATE.participantUser || { id: "guest", name: "Participante", score: 0 };
  const uid = user.id;
  const existingResponse = APP_STATE.room.responses?.[slide.id]?.[uid];
  const reveal = APP_STATE.room.revealAnswers;

  // Resumen sincronizado de la diapositiva actual
  let summaryHtml = "";
  if (slide.type === "cover-institutional" || slide.type === "cover") {
    summaryHtml = `
      <div class="mobile-slide-summary">
        <div style="font-size:0.75rem;font-weight:700;color:var(--pdf-navy);text-transform:uppercase;">
          Diapositiva ${slide.number} · ${escapeHtml(slide.shortTitle)}
        </div>
        <h3 style="color:var(--pdf-navy);font-size:1.1rem;margin:0.25rem 0;">
          ${escapeHtml(slide.institution.topic)}
        </h3>
        <p style="font-size:0.86rem;color:var(--pdf-text-muted);">
          Grupo: 5to Elemento · Integrantes: Matías Toledo, Emilio Thorlet, Mirko, Ignacio · Profesora: Lic. Beatriz Cabrera.
        </p>
      </div>
    `;
  } else if (
    slide.type === "poll-results" ||
    slide.type === "poll-abcd-results" ||
    slide.type === "tf-stats-chart" ||
    slide.type === "dual-poll" ||
    slide.type === "dual-poll-3d-chart"
  ) {
    summaryHtml = `
      <div class="mobile-slide-summary">
        <div style="font-size:0.74rem;font-weight:700;color:var(--pdf-navy);text-transform:uppercase;">
          Diapositiva ${slide.number} de ${SLIDES_DATA[SLIDES_DATA.length - 1].number} · ${slide.type === "dual-poll"
        ? "Encuesta Doble"
        : slide.type === "dual-poll-3d-chart"
          ? "Gráfico 3D en Tiempo Real"
          : "Resultados en Vivo"
      }
        </div>
        <h3 style="color:var(--pdf-navy);font-size:1.05rem;margin:0.25rem 0;">
          ${escapeHtml(slide.sectionTitle)}
        </h3>
      </div>
    `;
  } else if (slide.type === "content") {
    const bulletsPreview = (slide.bullets || [])
      .map((b) => `<li style="margin-bottom:0.35rem;font-size:0.88rem;"><strong>${escapeHtml(b.lead)}</strong> ${escapeHtml(b.text)}</li>`)
      .join("");
    summaryHtml = `
      <div class="mobile-slide-summary">
        <div style="font-size:0.74rem;font-weight:700;color:var(--pdf-navy);text-transform:uppercase;">
          Diapositiva ${slide.number} de ${SLIDES_DATA[SLIDES_DATA.length - 1].number} · Sincronizada
        </div>
        <h3 style="color:var(--pdf-navy);font-size:1.05rem;margin:0.25rem 0 0.5rem;">
          ${escapeHtml(slide.subSectionTitle || slide.sectionTitle)}
        </h3>
        ${bulletsPreview
        ? `<ul style="padding-left:1.15rem;">${bulletsPreview}</ul>`
        : `<p style="font-size:0.88rem;color:var(--pdf-text-main);">${escapeHtml((slide.paragraphs || [])[0] || "")}</p>`
      }
      </div>
    `;
  } else {
    summaryHtml = `
      <div class="mobile-slide-summary">
        <div style="font-size:0.75rem;font-weight:700;color:var(--pdf-navy);text-transform:uppercase;">
          Diapositiva Final · Conclusión y Podio
        </div>
        <h3 style="color:var(--pdf-navy);font-size:1.05rem;margin:0.25rem 0;">
          3. Conclusión, Bibliografía y Anexos
        </h3>
        <p style="font-size:0.88rem;color:var(--pdf-text-main);">
          ${escapeHtml((slide.conclusionParagraphs || [])[0] || "")}
        </p>
      </div>
    `;
  }

  // Bloque de interacción móvil
  let mobileInteractionHtml = "";
  const inter = slide.interaction;

  if (slide.type === "poll-results") {
    const sourceSlide = SLIDES_DATA.find((s) => s.id === slide.sourceSlideId) || SLIDES_DATA[2];
    mobileInteractionHtml = renderPresenterInteractiveBlock(sourceSlide, false);
  } else if (slide.type === "poll-abcd-results") {
    const sourceSlide = SLIDES_DATA.find((s) => s.id === slide.sourceSlideId);
    mobileInteractionHtml = renderPollAbcdResultsBlock(sourceSlide);
  } else if (slide.type === "tf-stats-chart") {
    const sourceSlide = SLIDES_DATA.find((s) => s.id === slide.sourceSlideId);
    mobileInteractionHtml = renderTfStatsChartBlock(sourceSlide);
  } else if (slide.type === "dual-poll-3d-chart") {
    const sourceSlide = SLIDES_DATA.find((s) => s.id === slide.sourceSlideId);
    mobileInteractionHtml = renderDualPoll3dChartBlock(sourceSlide);
  } else if (!inter) {
    mobileInteractionHtml = `
      <div style="text-align:center;padding:1.25rem;background:var(--pdf-lavender-bg);border-radius:10px;border:1px solid var(--pdf-lavender-border);">
        <div style="font-size:1.4rem;margin-bottom:0.3rem;">👀</div>
        <div style="font-weight:700;color:var(--pdf-navy);">Pantalla Sincronizada con el Presentador</div>
        <p style="font-size:0.85rem;color:var(--pdf-text-muted);margin-top:0.25rem;">
          Cuando el presentador avance a una diapositiva con actividad, aparecerá automáticamente aquí.
        </p>
      </div>
    `;
  } else if (inter.kind === "mcq" || inter.kind === "tf" || inter.kind === "poll") {
    const letters = ["A", "B", "C", "D"];
    const buttonsHtml = inter.options
      .map((opt, idx) => {
        const isSelected = existingResponse && existingResponse.value === idx;
        let stateClass = isSelected ? "selected" : "";
        if (reveal && (inter.kind === "mcq" || inter.kind === "tf")) {
          if (idx === inter.correctIndex) stateClass = "correct";
          else if (isSelected) stateClass = "wrong";
        }
        return `
          <button
            class="option-choice-btn ${stateClass}"
            onclick="submitParticipantChoice('${slide.id}', ${idx})"
            ${existingResponse ? "disabled" : ""}
          >
            <span class="option-letter">${letters[idx] || idx + 1}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      })
      .join("");

    const feedbackBanner = existingResponse
      ? `<div style="margin-top:0.85rem;padding:0.7rem;border-radius:8px;background:var(--accent-success-bg);color:var(--accent-success);font-weight:700;font-size:0.88rem;text-align:center;">
          ✅ Respuesta enviada (+${existingResponse.scoreDelta} pts)
        </div>`
      : "";

    mobileInteractionHtml = `
      <div>
        ${renderSurveyTimerWidget(slide.id)}
        <span class="interactive-type-tag" style="display:inline-block;margin-bottom:0.5rem;">${escapeHtml(inter.badge)}</span>
        <div class="interactive-question">${escapeHtml(inter.question)}</div>
        <div class="option-btn-list">
          ${buttonsHtml}
        </div>
        ${feedbackBanner}
      </div>
    `;
  } else if (inter.kind === "wordcloud" || inter.kind === "open") {
    mobileInteractionHtml = `
      <div>
        <span class="interactive-type-tag" style="display:inline-block;margin-bottom:0.5rem;">${escapeHtml(inter.badge)}</span>
        <div class="interactive-question">${escapeHtml(inter.question)}</div>
        <form onsubmit="submitParticipantText(event, '${slide.id}')">
          <input
            type="text"
            id="participant-text-input"
            class="input-field"
            placeholder="${escapeHtml(inter.placeholder || "Escribí tu respuesta...")}"
            required
            maxlength="180"
          />
          <button type="submit" class="btn btn-primary" style="width:100%;padding:0.75rem;">
            ${existingResponse ? "Enviar otra respuesta" : `Enviar respuesta (+${inter.points} pts)`}
          </button>
        </form>
        ${existingResponse
        ? `<div style="margin-top:0.75rem;padding:0.65rem;border-radius:8px;background:var(--accent-success-bg);color:var(--accent-success);font-size:0.85rem;font-weight:600;">
                ✅ Último envío: "${escapeHtml(existingResponse.value)}"
              </div>`
        : ""
      }
      </div>
    `;
  }

  if (slide.id === "slide-2") {
    const introParagraphsHtml = (slide.paragraphs || [])
      .map((p) => `<p class="pdf-paragraph" style="font-size:0.98rem;">${escapeHtml(p)}</p>`)
      .join("");

    const showSurvey = Boolean(APP_STATE.slide2SurveyOpened || APP_STATE.room.openedSurveys?.["slide-2"]);
    const animClass = APP_STATE.slide2SurveyAnimating ? "retro-arcade-spawn" : "";

    container.innerHTML = `
      <div class="participant-wrapper wide-split">
        <div class="mobile-card">
          <div class="mobile-header">
            <div>
              <div style="font-weight:800;font-size:0.98rem;">👤 ${escapeHtml(user.name)}</div>
              <div style="font-size:0.74rem;opacity:0.85;">Sincronizado en vivo · Diapositiva ${slide.number}/${SLIDES_DATA[SLIDES_DATA.length - 1].number}</div>
            </div>
            <span class="mobile-user-score">⭐ ${user.score || 0} pts</span>
          </div>
          <div class="mobile-body" style="padding: 1.5rem;">
            <div class="participant-slide2-grid ${showSurvey ? "" : "single-col"}">
              <!-- Lado Izquierdo: Introducción (+ Botón Encuesta solo para el presentador) -->
              <div>
                <h2 class="pdf-section-title" style="font-size:1.4rem;margin-bottom:0.85rem;">1. INTRODUCCIÓN</h2>
                ${introParagraphsHtml}
                ${canControl
        ? `<div style="margin-top: 1.25rem;">
                        <button type="button" class="btn-retro-encuesta" onclick="triggerSlide2RetroSurvey()">
                          🕹️ Encuesta
                        </button>
                      </div>`
        : ""
      }
              </div>

              <!-- Lado Derecho: Encuesta en Vivo (aparece al apretar el botón con efecto retro arcade) -->
              ${showSurvey
        ? `<div class="survey-arcade-panel ${animClass}">
                      ${mobileInteractionHtml}
                      ${canControl
          ? `<div style="margin-top: 1rem; display: flex; justify-content: flex-end;">
                              <button type="button" class="btn btn-primary" style="width: 100%; padding: 0.75rem;" onclick="changeSlide(1)">
                                Siguiente →
                              </button>
                            </div>`
          : ""
        }
                    </div>`
        : ""
      }
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (slide.type === "dual-poll") {
    const renderSinglePollBox = (pollObj) => {
      const pollResp = APP_STATE.room.responses?.[pollObj.id]?.[uid];
      const letters = ["A", "B"];
      const btns = pollObj.options
        .map((opt, idx) => {
          const isSelected = pollResp && pollResp.value === idx;
          return `
            <button
              class="option-choice-btn ${isSelected ? "selected" : ""}"
              onclick="submitParticipantChoice('${pollObj.id}', ${idx})"
              ${pollResp ? "disabled" : ""}
            >
              <span class="option-letter">${letters[idx] || idx + 1}</span>
              <span>${escapeHtml(opt)}</span>
            </button>
          `;
        })
        .join("");

      const feedback = pollResp
        ? `<div style="margin-top:0.85rem;padding:0.7rem;border-radius:8px;background:var(--accent-success-bg);color:var(--accent-success);font-weight:700;font-size:0.88rem;text-align:center;">
            ✅ Respuesta enviada (+${pollResp.scoreDelta} pts)
          </div>`
        : "";

      return `
        <div class="survey-arcade-panel">
          ${renderSurveyTimerWidget(slide.id)}
          <span class="interactive-type-tag" style="display:inline-block;margin-bottom:0.5rem;">${escapeHtml(pollObj.badge)}</span>
          <div class="interactive-question">${escapeHtml(pollObj.question)}</div>
          <div class="option-btn-list">
            ${btns}
          </div>
          ${feedback}
        </div>
      `;
    };

    container.innerHTML = `
      <div class="participant-wrapper wide-split">
        <div class="mobile-card">
          <div class="mobile-header">
            <div>
              <div style="font-weight:800;font-size:0.98rem;">👤 ${escapeHtml(user.name)}</div>
              <div style="font-size:0.74rem;opacity:0.85;">Sincronizado en vivo · Diapositiva ${slide.number}/${SLIDES_DATA[SLIDES_DATA.length - 1].number}</div>
            </div>
            <span class="mobile-user-score">⭐ ${user.score || 0} pts</span>
          </div>
          <div class="mobile-body" style="padding: 1.5rem;">
            <div class="participant-slide2-grid">
              <!-- Encuesta de la Izquierda -->
              <div>
                ${renderSinglePollBox(slide.pollLeft)}
              </div>

              <!-- Encuesta de la Derecha -->
              <div>
                ${renderSinglePollBox(slide.pollRight)}
              </div>
            </div>

            ${canControl
        ? `<div style="margin-top: 1.25rem; display: flex; justify-content: flex-end;">
                    <button type="button" class="btn btn-primary" style="padding: 0.75rem 1.5rem;" onclick="changeSlide(1)">
                      Siguiente →
                    </button>
                  </div>`
        : ""
      }
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Todas las demás diapositivas que tienen encuesta, preguntas o video: contenido a la izquierda y encuesta/pregunta/video a la derecha
  if (slide.type === "content" && (slide.interaction || slide.videoCard)) {
    const paragraphsHtml = (slide.paragraphs || [])
      .map((p) => `<p class="pdf-paragraph" style="font-size:0.96rem;">${escapeHtml(p)}</p>`)
      .join("");

    const bulletsHtml = slide.bullets
      ? `<ul class="pdf-list" style="margin-bottom:0;">
          ${slide.bullets
        .map(
          (b) =>
            `<li style="font-size:0.95rem;margin-bottom:0.65rem;"><strong>${escapeHtml(b.lead)}</strong> ${escapeHtml(b.text)}</li>`
        )
        .join("")}
        </ul>`
      : "";

    const footerParagraphsHtml = (slide.footerParagraphs || [])
      .map(
        (fp) =>
          `<p class="pdf-paragraph" style="font-size:0.96rem;margin-top:0.65rem;"><strong>${escapeHtml(fp.lead)}</strong> ${escapeHtml(fp.text)}</p>`
      )
      .join("");

    const isSlide4 = slide.id === "slide-3";
    const isSlide5 = slide.id === "slide-4";
    const isSlide8 = slide.id === "slide-5";
    const isSlide13 = slide.id === "slide-7";
    const isSlide14 = slide.id === "slide-8";
    const hasManualRevealBtn = isSlide4 || isSlide5 || isSlide8 || isSlide13 || isSlide14;

    const showRightSurvey = slide.videoCard
      ? Boolean(canControl)
      : hasManualRevealBtn
        ? Boolean(APP_STATE.openedSurveys[slide.id] || APP_STATE.room.openedSurveys?.[slide.id])
        : true;

    let rightAnimClass = "";
    if (APP_STATE.openedSurveys[slide.id + "_anim"]) {
      if (isSlide4) rightAnimClass = "next-level-spawn";
      else if (isSlide5) rightAnimClass = "flip-3d-card-spawn";
      else if (isSlide8) rightAnimClass = "pokeball-3d-emerge";
      else if (isSlide13) rightAnimClass = "modern-3d-hud-spawn";
      else if (isSlide14) rightAnimClass = "modern-3d-orbital-drop";
    }

    const coinsOverlayHtml =
      isSlide5 && APP_STATE.openedSurveys[slide.id + "_anim"]
        ? renderJumpingCoinsOverlay()
        : isSlide8 && APP_STATE.openedSurveys[slide.id + "_anim"]
          ? renderPokeball3dOverlay()
          : isSlide14 && APP_STATE.openedSurveys[slide.id + "_anim"]
            ? renderModern3dShardsOverlay()
            : "";

    const rightPanelContentHtml = slide.videoCard
      ? renderSlideLoopVideoBlock(slide.videoCard)
      : mobileInteractionHtml;

    container.innerHTML = `
      <div class="participant-wrapper wide-split">
        <div class="mobile-card">
          <div class="mobile-header">
            <div>
              <div style="font-weight:800;font-size:0.98rem;">👤 ${escapeHtml(user.name)}</div>
              <div style="font-size:0.74rem;opacity:0.85;">Sincronizado en vivo · Diapositiva ${slide.number}/${SLIDES_DATA[SLIDES_DATA.length - 1].number}</div>
            </div>
            <span class="mobile-user-score">⭐ ${user.score || 0} pts</span>
          </div>
          <div class="mobile-body" style="padding: 1.5rem;">
            <div class="participant-slide2-grid ${showRightSurvey ? "" : "single-col"}">
              <!-- Lado Izquierdo: Contenido de la diapositiva -->
              <div>
                <h2 class="pdf-section-title" style="font-size:1.35rem;margin-bottom:0.4rem;">${escapeHtml(slide.sectionTitle)}</h2>
                ${slide.subSectionTitle ? `<h3 class="pdf-subsection-title" style="font-size:1.12rem;margin-bottom:0.85rem;">${escapeHtml(slide.subSectionTitle)}</h3>` : ""}
                ${paragraphsHtml}
                ${bulletsHtml}
                ${footerParagraphsHtml}
                ${canControl && isSlide4
        ? `<div style="margin-top: 1.35rem;">
                        <button type="button" class="btn-next-level" onclick="triggerSlide4NextLevelSurvey('${slide.id}')">
                          ⭐ Next Level
                        </button>
                      </div>`
        : canControl && isSlide5
          ? `<div style="margin-top: 1.35rem;">
                        <button type="button" class="btn-next-level" onclick="triggerSlide5FlipCoinsSurvey('${slide.id}')">
                          🪙 Next Level
                        </button>
                      </div>`
          : canControl && isSlide8
            ? `<div style="margin-top: 1.35rem;">
                        <button type="button" class="btn-next-level pokeball-btn" onclick="triggerSlide8PokeballSurvey('${slide.id}')">
                          <span class="pokeball-btn-icon"></span> Next Level
                        </button>
                      </div>`
            : canControl && isSlide13
              ? `<div style="margin-top: 1.35rem;">
                        <button type="button" class="btn-next-level modern-hud" onclick="triggerSlide13Modern3dSurvey('${slide.id}')">
                          🚀 Next Level
                        </button>
                      </div>`
              : canControl && isSlide14
                ? `<div style="margin-top: 1.35rem;">
                        <button type="button" class="btn-next-level modern-loot-drop" onclick="triggerSlide14Orbital3dSurvey('${slide.id}')">
                          🔥 Next Level
                        </button>
                      </div>`
                : ""
      }
              </div>

              <!-- Lado Derecho: Encuesta / Pregunta / Video Reel (+ Botón Siguiente solo para el presentador) -->
              ${showRightSurvey
        ? `<div style="position: relative;">
                      ${coinsOverlayHtml}
                      <div class="survey-arcade-panel ${rightAnimClass}" ${slide.videoCard
          ? 'style="padding:0;overflow:hidden;border:2px solid var(--pdf-navy);background:#000;"'
          : ""
        }>
                        ${rightPanelContentHtml}
                        ${canControl && !slide.videoCard
          ? `<div style="margin-top: 1rem; display: flex; justify-content: flex-end;">
                                <button type="button" class="btn btn-primary" style="width: 100%; padding: 0.75rem;" onclick="changeSlide(1)">
                                  Siguiente →
                                </button>
                              </div>`
          : ""
        }
                      </div>
                      ${canControl && slide.videoCard
          ? `<div style="margin-top: 0.85rem; display: flex; justify-content: flex-end;">
                              <button type="button" class="btn btn-primary" style="width: 100%; padding: 0.75rem;" onclick="changeSlide(1)">
                                Siguiente →
                              </button>
                            </div>`
          : ""
        }
                    </div>`
        : ""
      }
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Diapositiva 17 (Cierre: Conclusión -> al presionar "Ver Resultados" desaparece la conclusión y muestra el ranking completo)
  if (slide.type === "closing") {
    const showFinalResults = Boolean(APP_STATE.openedSurveys[slide.id]);
    const animClass = APP_STATE.openedSurveys[slide.id + "_anim"] ? "final-ranking-spawn" : "";

    let closingBodyHtml = "";
    if (showFinalResults) {
      closingBodyHtml = renderFullParticipantsLeaderboardBlock(animClass);
    } else {
      const conclHtml = (slide.conclusionParagraphs || [])
        .map((p) => `<p class="pdf-paragraph" style="font-size:0.96rem;">${escapeHtml(p)}</p>`)
        .join("");

      closingBodyHtml = `
        <div>
          <h2 class="pdf-section-title" style="font-size:1.35rem;margin-bottom:0.65rem;">3. CONCLUSIÓN</h2>
          ${conclHtml}

          ${canControl
          ? `<div style="margin-top: 1.5rem; text-align: center;">
                  <button type="button" class="btn-ver-resultados" onclick="triggerSlide17FinalResults('${slide.id}')">
                    🏆 Ver Resultados
                  </button>
                </div>`
          : ""
        }
        </div>
      `;
    }

    container.innerHTML = `
      <div class="participant-wrapper wide-split">
        <div class="mobile-card">
          <div class="mobile-header">
            <div>
              <div style="font-weight:800;font-size:0.98rem;">👤 ${escapeHtml(user.name)}</div>
              <div style="font-size:0.74rem;opacity:0.85;">Sincronizado en vivo · Diapositiva ${slide.number}/${SLIDES_DATA[SLIDES_DATA.length - 1].number}</div>
            </div>
            <span class="mobile-user-score">⭐ ${user.score || 0} pts</span>
          </div>
          <div class="mobile-body" style="padding: 1.5rem;">
            ${closingBodyHtml}
          </div>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="participant-wrapper ${slide.type === "poll-results" ||
      slide.type === "poll-abcd-results" ||
      slide.type === "tf-stats-chart" ||
      slide.type === "dual-poll-3d-chart"
      ? "wide-split"
      : ""
    }">
      <div class="mobile-card">
        <div class="mobile-header">
          <div>
            <div style="font-weight:800;font-size:0.98rem;">👤 ${escapeHtml(user.name)}</div>
            <div style="font-size:0.74rem;opacity:0.85;">Sincronizado en vivo · Diapositiva ${slide.number}/${SLIDES_DATA[SLIDES_DATA.length - 1].number}</div>
          </div>
          <span class="mobile-user-score">⭐ ${user.score || 0} pts</span>
        </div>
        <div class="mobile-body">
          ${summaryHtml}
          ${mobileInteractionHtml}
          ${canControl && slideIndex < SLIDES_DATA.length - 1
      ? `<div style="margin-top: 1rem; display: flex; justify-content: flex-end;">
                  <button type="button" class="btn btn-primary" style="padding: 0.75rem 1.35rem;" onclick="changeSlide(1)">
                    Siguiente →
                  </button>
                </div>`
      : ""
    }
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   MODAL DE CONFIGURACIÓN FIREBASE Y URL DE ACCESO MÓVIL
   ========================================================= */
function openFirebaseModal() {
  const modal = document.getElementById("firebase-modal");
  if (!modal) return;

  const urlInput = document.getElementById("custom-base-url-input");
  if (urlInput) {
    urlInput.value = APP_STATE.customBaseUrl || APP_STATE.fullJoinUrl.split("?")[0];
  }

  const fbInput = document.getElementById("firebase-config-textarea");
  const savedFb = localStorage.getItem("agy_firebase_config");
  if (fbInput && savedFb) {
    fbInput.value = savedFb;
  }

  modal.classList.add("open");
}

function closeFirebaseModal() {
  const modal = document.getElementById("firebase-modal");
  if (modal) modal.classList.remove("open");
}

function saveNetworkAndFirebaseSettings(event) {
  event.preventDefault();
  const urlInput = document.getElementById("custom-base-url-input");
  const fbInput = document.getElementById("firebase-config-textarea");

  if (urlInput) {
    APP_STATE.customBaseUrl = urlInput.value.trim();
    computeAccessLinks();
  }

  const fbText = (fbInput?.value || "").trim();
  if (fbText) {
    try {
      const parsed = JSON.parse(fbText);
      connectFirebase(parsed, true);
    } catch (e) {
      alert("El JSON de configuración de Firebase no tiene un formato válido. Verificá las comillas.");
      return;
    }
  } else {
    closeFirebaseModal();
  }

  renderAll();
}

function playRetroArcadeSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    // Notas estilo arcade clásico 8-bit (Atari / Pac-Man / Coin Insert)
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.075);
      gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.075);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.075 + 0.07);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.075);
      osc.stop(ctx.currentTime + i * 0.075 + 0.075);
    });
  } catch (e) { }
}

function triggerSlide2RetroSurvey() {
  APP_STATE.slide2SurveyOpened = true;
  APP_STATE.slide2SurveyAnimating = true;
  APP_STATE.room.openedSurveys = ensurePlainObject(APP_STATE.room.openedSurveys);
  APP_STATE.room.openedSurveys["slide-2"] = getEstimatedServerNow();
  APP_STATE.room.slideSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  playRetroArcadeSound();
  commitStateChange({
    action: "open_survey",
    slideId: "slide-2",
    slideSeq: APP_STATE.room.slideSeq
  });
  setTimeout(() => {
    APP_STATE.slide2SurveyAnimating = false;
  }, 950);
}

function playNextLevelSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    // Fanfarria "1-UP / Next Level / Stage Clear" estilo consolas de 8/16 bits (Super Mario / Atari)
    const melody = [
      { freq: 392.0, time: 0.0, dur: 0.08 },   // G4
      { freq: 523.25, time: 0.09, dur: 0.08 }, // C5
      { freq: 659.25, time: 0.18, dur: 0.08 }, // E5
      { freq: 783.99, time: 0.27, dur: 0.14 }, // G5
      { freq: 659.25, time: 0.43, dur: 0.09 }, // E5
      { freq: 1046.5, time: 0.54, dur: 0.22 }  // C6
    ];
    melody.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.time);
      gain.gain.setValueAtTime(0.14, ctx.currentTime + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.time + n.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + n.time);
      osc.stop(ctx.currentTime + n.time + n.dur + 0.01);
    });
  } catch (e) { }
}

function triggerSlide4NextLevelSurvey(slideId = "slide-3") {
  APP_STATE.openedSurveys[slideId] = true;
  APP_STATE.openedSurveys[slideId + "_anim"] = true;
  APP_STATE.room.openedSurveys = ensurePlainObject(APP_STATE.room.openedSurveys);
  APP_STATE.room.openedSurveys[slideId] = getEstimatedServerNow();
  APP_STATE.room.slideSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  playNextLevelSound();
  commitStateChange({
    action: "open_survey",
    slideId,
    slideSeq: APP_STATE.room.slideSeq
  });
  setTimeout(() => {
    APP_STATE.openedSurveys[slideId + "_anim"] = false;
  }, 1050);
}

function renderJumpingCoinsOverlay() {
  const coinsSpec = [
    { startX: "18%", driftX: "-55px", peakY: "-70px", delay: "0.00s" },
    { startX: "28%", driftX: "-35px", peakY: "-95px", delay: "0.06s" },
    { startX: "38%", driftX: "-18px", peakY: "-80px", delay: "0.12s" },
    { startX: "48%", driftX: "12px", peakY: "-105px", delay: "0.04s" },
    { startX: "55%", driftX: "28px", peakY: "-85px", delay: "0.10s" },
    { startX: "65%", driftX: "45px", peakY: "-90px", delay: "0.16s" },
    { startX: "75%", driftX: "60px", peakY: "-65px", delay: "0.08s" },
    { startX: "33%", driftX: "-42px", peakY: "-60px", delay: "0.18s" },
    { startX: "60%", driftX: "38px", peakY: "-75px", delay: "0.22s" },
    { startX: "45%", driftX: "-10px", peakY: "-92px", delay: "0.14s" }
  ];

  const coinsHtml = coinsSpec
    .map(
      (c) => `
      <div
        class="arcade-falling-coin"
        style="--start-x:${c.startX};--drift-x:${c.driftX};--peak-y:${c.peakY};--coin-delay:${c.delay};"
      >$</div>`
    )
    .join("");

  return `<div class="coins-burst-container">${coinsHtml}</div>`;
}

function playCoinsBurstSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    // Sonido clásico de múltiples monedas saltando (B5 -> E6 estilo Super Mario Coin)
    const coinTimes = [0.0, 0.11, 0.22, 0.34];
    coinTimes.forEach((t) => {
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "square";
      osc1.frequency.setValueAtTime(987.77, ctx.currentTime + t); // B5
      osc1.frequency.setValueAtTime(1318.51, ctx.currentTime + t + 0.055); // E6
      gain1.gain.setValueAtTime(0.08, ctx.currentTime + t);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.22);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(ctx.currentTime + t);
      osc1.stop(ctx.currentTime + t + 0.23);
    });
  } catch (e) { }
}

function triggerSlide5FlipCoinsSurvey(slideId = "slide-4") {
  APP_STATE.openedSurveys[slideId] = true;
  APP_STATE.openedSurveys[slideId + "_anim"] = true;
  APP_STATE.room.openedSurveys = ensurePlainObject(APP_STATE.room.openedSurveys);
  APP_STATE.room.openedSurveys[slideId] = getEstimatedServerNow();
  APP_STATE.room.slideSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  playCoinsBurstSound();
  commitStateChange({
    action: "open_survey",
    slideId,
    slideSeq: APP_STATE.room.slideSeq
  });
  setTimeout(() => {
    APP_STATE.openedSurveys[slideId + "_anim"] = false;
  }, 1650);
}

function playModern3dGameSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    // Sonido de videojuego moderno 3D (barrido holográfico + acorde sintetizador sci-fi/eSports)
    const sweepOsc = ctx.createOscillator();
    const sweepGain = ctx.createGain();
    sweepOsc.type = "sawtooth";
    sweepOsc.frequency.setValueAtTime(140, ctx.currentTime);
    sweepOsc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.28);
    sweepGain.gain.setValueAtTime(0.06, ctx.currentTime);
    sweepGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    sweepOsc.connect(sweepGain);
    sweepGain.connect(ctx.destination);
    sweepOsc.start(ctx.currentTime);
    sweepOsc.stop(ctx.currentTime + 0.31);

    const chord = [
      { freq: 440.0, time: 0.14, dur: 0.38, type: "sine" },     // A4
      { freq: 554.37, time: 0.18, dur: 0.36, type: "triangle" },// C#5
      { freq: 659.25, time: 0.22, dur: 0.36, type: "triangle" },// E5
      { freq: 880.0, time: 0.26, dur: 0.45, type: "sine" }      // A5
    ];
    chord.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = n.type;
      osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.time);
      gain.gain.setValueAtTime(0.09, ctx.currentTime + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.time + n.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + n.time);
      osc.stop(ctx.currentTime + n.time + n.dur + 0.02);
    });
  } catch (e) { }
}

function triggerSlide13Modern3dSurvey(slideId = "slide-7") {
  APP_STATE.openedSurveys[slideId] = true;
  APP_STATE.openedSurveys[slideId + "_anim"] = true;
  APP_STATE.room.openedSurveys = ensurePlainObject(APP_STATE.room.openedSurveys);
  APP_STATE.room.openedSurveys[slideId] = getEstimatedServerNow();
  APP_STATE.room.slideSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  playModern3dGameSound();
  commitStateChange({
    action: "open_survey",
    slideId,
    slideSeq: APP_STATE.room.slideSeq
  });
  setTimeout(() => {
    APP_STATE.openedSurveys[slideId + "_anim"] = false;
  }, 1250);
}

function renderModern3dShardsOverlay() {
  const shardsSpec = [
    { sx: "-130px", sy: "-95px", delay: "0.22s" },
    { sx: "135px", sy: "-90px", delay: "0.24s" },
    { sx: "-155px", sy: "15px", delay: "0.26s" },
    { sx: "160px", sy: "20px", delay: "0.25s" },
    { sx: "-115px", sy: "105px", delay: "0.28s" },
    { sx: "120px", sy: "110px", delay: "0.27s" },
    { sx: "0px", sy: "-135px", delay: "0.21s" },
    { sx: "-65px", sy: "-120px", delay: "0.29s" },
    { sx: "70px", sy: "-125px", delay: "0.23s" },
    { sx: "0px", sy: "130px", delay: "0.30s" }
  ];

  const shardsHtml = shardsSpec
    .map(
      (s) => `
      <div
        class="modern-3d-shard"
        style="--sx:${s.sx};--sy:${s.sy};--shard-delay:${s.delay};"
      ></div>`
    )
    .join("");

  return `<div class="shards-3d-burst-container">${shardsHtml}</div>`;
}

function playModern3dOrbitalDropSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    // 1. Caída orbital (descenso rápido de frecuencia)
    const dropOsc = ctx.createOscillator();
    const dropGain = ctx.createGain();
    dropOsc.type = "sine";
    dropOsc.frequency.setValueAtTime(920, ctx.currentTime);
    dropOsc.frequency.exponentialRampToValueAtTime(65, ctx.currentTime + 0.34);
    dropGain.gain.setValueAtTime(0.11, ctx.currentTime);
    dropGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.36);
    dropOsc.connect(dropGain);
    dropGain.connect(ctx.destination);
    dropOsc.start(ctx.currentTime);
    dropOsc.stop(ctx.currentTime + 0.37);

    // 2. Impacto sub-grave 3D + fanfarria mítica de cofre/drop (estilo Battle Royale / RPG moderno)
    const notes = [
      { freq: 110.0, time: 0.32, dur: 0.28, type: "triangle", vol: 0.16 }, // Sub-impacto A2
      { freq: 587.33, time: 0.35, dur: 0.25, type: "sawtooth", vol: 0.07 }, // D5
      { freq: 739.99, time: 0.42, dur: 0.28, type: "triangle", vol: 0.09 }, // F#5
      { freq: 880.0, time: 0.49, dur: 0.32, type: "triangle", vol: 0.10 }, // A5
      { freq: 1174.66, time: 0.57, dur: 0.48, type: "sine", vol: 0.12 }  // D6 (Brillo mítico)
    ];
    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = n.type;
      osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.time);
      gain.gain.setValueAtTime(n.vol, ctx.currentTime + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.time + n.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + n.time);
      osc.stop(ctx.currentTime + n.time + n.dur + 0.02);
    });
  } catch (e) { }
}

function triggerSlide14Orbital3dSurvey(slideId = "slide-8") {
  APP_STATE.openedSurveys[slideId] = true;
  APP_STATE.openedSurveys[slideId + "_anim"] = true;
  APP_STATE.room.openedSurveys = ensurePlainObject(APP_STATE.room.openedSurveys);
  APP_STATE.room.openedSurveys[slideId] = getEstimatedServerNow();
  APP_STATE.room.slideSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  playModern3dOrbitalDropSound();
  commitStateChange({
    action: "open_survey",
    slideId,
    slideSeq: APP_STATE.room.slideSeq
  });
  setTimeout(() => {
    APP_STATE.openedSurveys[slideId + "_anim"] = false;
  }, 1450);
}

function renderPokeball3dOverlay() {
  return `
    <div class="pokeball-3d-stage">
      <div class="pokeball-3d-sphere">
        <div class="pokeball-energy-core"></div>
        <div class="pokeball-half-top"></div>
        <div class="pokeball-center-btn"></div>
        <div class="pokeball-half-bottom"></div>
      </div>
    </div>
  `;
}

function playPokeball3dSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // 1. Lanzamiento y rebote de la Pokébola (0.0s - 0.55s)
    const throwOsc = ctx.createOscillator();
    const throwGain = ctx.createGain();
    throwOsc.type = "sine";
    throwOsc.frequency.setValueAtTime(320, ctx.currentTime);
    throwOsc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.18);
    throwGain.gain.setValueAtTime(0.09, ctx.currentTime);
    throwGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    throwOsc.connect(throwGain);
    throwGain.connect(ctx.destination);
    throwOsc.start(ctx.currentTime);
    throwOsc.stop(ctx.currentTime + 0.21);

    // Dos "wobbles" clásicos de Pokébola antes de abrirse
    [0.26, 0.44].forEach((t) => {
      const wobOsc = ctx.createOscillator();
      const wobGain = ctx.createGain();
      wobOsc.type = "triangle";
      wobOsc.frequency.setValueAtTime(440, ctx.currentTime + t);
      wobOsc.frequency.exponentialRampToValueAtTime(587.33, ctx.currentTime + t + 0.09);
      wobGain.gain.setValueAtTime(0.09, ctx.currentTime + t);
      wobGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.11);
      wobOsc.connect(wobGain);
      wobGain.connect(ctx.destination);
      wobOsc.start(ctx.currentTime + t);
      wobOsc.stop(ctx.currentTime + t + 0.12);
    });

    // 2. Apertura de la Pokébola ("¡Poff!" de luz + fanfarria Pokémon al salir la encuesta en 0.72s)
    const notes = [
      { freq: 523.25, time: 0.70, dur: 0.12, type: "square", vol: 0.08 }, // C5
      { freq: 659.25, time: 0.80, dur: 0.12, type: "square", vol: 0.08 }, // E5
      { freq: 783.99, time: 0.90, dur: 0.14, type: "square", vol: 0.09 }, // G5
      { freq: 1046.5, time: 1.02, dur: 0.38, type: "triangle", vol: 0.13 }  // C6
    ];
    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = n.type;
      osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.time);
      gain.gain.setValueAtTime(n.vol, ctx.currentTime + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.time + n.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + n.time);
      osc.stop(ctx.currentTime + n.time + n.dur + 0.02);
    });
  } catch (e) { }
}

function triggerSlide8PokeballSurvey(slideId = "slide-5") {
  APP_STATE.openedSurveys[slideId] = true;
  APP_STATE.openedSurveys[slideId + "_anim"] = true;
  APP_STATE.room.openedSurveys = ensurePlainObject(APP_STATE.room.openedSurveys);
  APP_STATE.room.openedSurveys[slideId] = getEstimatedServerNow();
  APP_STATE.room.slideSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  playPokeball3dSound();
  commitStateChange({
    action: "open_survey",
    slideId,
    slideSeq: APP_STATE.room.slideSeq
  });
  setTimeout(() => {
    APP_STATE.openedSurveys[slideId + "_anim"] = false;
  }, 1800);
}

function renderFullParticipantsLeaderboardBlock(animClass = "") {
  const users = Object.values(APP_STATE.room.users || {}).sort(
    (a, b) => (b.score || 0) - (a.score || 0) || (a.joinedAt || 0) - (b.joinedAt || 0)
  );

  const rowsHtml =
    users.length === 0
      ? `<div style="text-align:center;padding:2rem 1rem;color:var(--pdf-text-muted);font-size:0.98rem;">
          Aún no hay participantes registrados en la sala.
        </div>`
      : users
        .map((u, idx) => {
          const pos = idx + 1;
          const medal = pos === 1 ? "🥇" : pos === 2 ? "🥈" : pos === 3 ? "🥉" : "";
          const rankClass = pos === 1 ? "gold" : pos === 2 ? "silver" : pos === 3 ? "bronze" : "";
          return `
              <div class="final-ranking-row ${rankClass}">
                <div class="final-ranking-left">
                  <span class="final-ranking-pos ${rankClass}">${medal ? `${medal} ${pos}°` : `${pos}°`}</span>
                  <span class="final-ranking-name">${escapeHtml(u.name)}</span>
                </div>
                <div class="final-ranking-score">
                  ⭐ ${u.score || 0} pts
                </div>
              </div>
            `;
        })
        .join("");

  return `
    <div class="final-ranking-card ${animClass}">
      <div class="final-ranking-header">
        <div class="final-ranking-badge">🏆 RESULTADOS FINALES · TABLA DE POSICIONES</div>
        <h2 class="final-ranking-title">Lista de Participantes y Puntaje Total</h2>
        <p class="final-ranking-subtitle">
          Participantes que ingresaron: <strong>${users.length}</strong> (ordenados de mayor a menor puntaje)
        </p>
      </div>
      <div class="final-ranking-list">
        ${rowsHtml}
      </div>
    </div>
  `;
}

function playFinalLeaderboardSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    // Fanfarria triunfal de podio final
    const notes = [
      { freq: 523.25, time: 0.0, dur: 0.12, type: "triangle", vol: 0.11 }, // C5
      { freq: 659.25, time: 0.12, dur: 0.12, type: "triangle", vol: 0.11 }, // E5
      { freq: 783.99, time: 0.24, dur: 0.12, type: "triangle", vol: 0.12 }, // G5
      { freq: 1046.5, time: 0.38, dur: 0.45, type: "sine", vol: 0.15 }  // C6
    ];
    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = n.type;
      osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.time);
      gain.gain.setValueAtTime(n.vol, ctx.currentTime + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.time + n.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + n.time);
      osc.stop(ctx.currentTime + n.time + n.dur + 0.02);
    });
  } catch (e) { }
}

function triggerSlide17FinalResults(slideId = "slide-10") {
  APP_STATE.openedSurveys[slideId] = true;
  APP_STATE.openedSurveys[slideId + "_anim"] = true;
  APP_STATE.room.openedSurveys = ensurePlainObject(APP_STATE.room.openedSurveys);
  APP_STATE.room.openedSurveys[slideId] = Date.now();
  APP_STATE.room.slideSeq = nextSlideSeq();
  APP_STATE.lastLocalSlideChangeAt = Date.now();
  playFinalLeaderboardSound();
  commitStateChange({
    action: "open_survey",
    slideId,
    slideSeq: APP_STATE.room.slideSeq
  });
  setTimeout(() => {
    APP_STATE.openedSurveys[slideId + "_anim"] = false;
  }, 1100);
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

window.addEventListener("DOMContentLoaded", initApp);

