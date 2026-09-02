// Contenido completo de los servicios — verbatim de §4 del BRIEF.md
// Usado por /servicios/[slug].astro

/** Perfil concreto dentro de un servicio (TDAH, TEA, altas capacidades…). */
export type PerfilServicio = {
  id: string;
  titulo: string;
  subtitulo: string;
  parrafos: string[];
  introLista: string;
  lista: string[];
  cierre: string[];
  /** Frase final que se destaca tipográficamente. */
  destacado?: string;
};

/** Bloque de temas transversales, cada uno con su propia explicación. */
export type BloqueTemas = {
  titulo: string;
  subtitulo: string;
  parrafos: string[];
  destacado?: string;
  introLista: string;
  temas: { titulo: string; texto: string }[];
};

/** Bloque de cierre argumental con listado de objetivos. */
export type BloqueCierre = {
  titulo: string;
  aperturas: string[];
  parrafos: string[];
  introLista: string;
  lista: string[];
  cierre: string;
};

export type ServicioDetalle = {
  slug: string;
  titulo: string;
  subtitulo: string;
  descripcionIntro: string[];
  /** Etiquetas destacadas intercaladas tras la introducción (p. ej. los perfiles). */
  descripcionDestacados?: string[];
  /** Párrafos que continúan la introducción tras los destacados. */
  descripcionCierre?: string[];
  quePodemosTrabajar: string[];
  /** Sobrescribe el titular por defecto "¿En qué podemos trabajar?". */
  listaTitulo?: string;
  perfiles?: PerfilServicio[];
  bloqueTemas?: BloqueTemas;
  bloqueCierre?: BloqueCierre;
  comoProceso: string;
  porQueIniciar?: string;
  /** Frase de cierre destacada al final del contenido del servicio. */
  cierre?: string;
  precio: number;
  metaDescription: string;
};

export const SERVICIOS_DETALLE: ServicioDetalle[] = [
  {
    slug: 'terapia-individual',
    titulo: 'Terapia individual',
    subtitulo: 'Un espacio para comprender lo que estás viviendo',
    descripcionIntro: [
      'En determinados momentos de la vida podemos sentir que las herramientas que siempre nos habían funcionado dejan de ser suficientes. La ansiedad, el estrés, la tristeza, la inseguridad o los problemas en las relaciones pueden acabar afectando a nuestro bienestar y hacer que el día a día resulte cada vez más difícil.',
      'La terapia individual ofrece un espacio de confianza donde poder detenernos, comprender qué está ocurriendo y empezar a construir nuevas formas de afrontar las dificultades. No se trata únicamente de aliviar el malestar, sino de comprender por qué aparece, qué factores lo mantienen y cómo desarrollar estrategias que te permitan recuperar el equilibrio y mejorar tu calidad de vida.',
      'Cada proceso terapéutico es único. Por ello, la intervención se adapta a tus necesidades, objetivos y circunstancias personales, utilizando técnicas respaldadas por la evidencia científica y respetando siempre tu ritmo de cambio.',
      'Mi objetivo es acompañarte para que puedas comprender mejor tu funcionamiento, potenciar tus fortalezas y adquirir herramientas que favorezcan un bienestar duradero, tanto a nivel emocional como personal.',
    ],
    quePodemosTrabajar: [
      'Ansiedad, estrés y preocupaciones constantes',
      'Estado de ánimo bajo o síntomas depresivos',
      'Baja autoestima e inseguridad',
      'Gestión emocional',
      'Dependencia emocional',
      'Dificultades en las relaciones de pareja',
      'Conflictos familiares',
      'Duelo y pérdidas',
      'Procesos de separación',
      'Cambios importantes en la vida',
      'Perfeccionismo y autoexigencia',
      'Toma de decisiones',
      'Gestión del estrés laboral',
      'Burnout o agotamiento emocional',
      'Crecimiento personal y autoconocimiento',
    ],
    comoProceso:
      'Las primeras sesiones estarán orientadas a conocerte, comprender tu historia y definir conjuntamente los objetivos terapéuticos. A partir de ahí diseñaremos un plan de intervención individualizado, revisando periódicamente la evolución y adaptando el tratamiento según tus necesidades. El objetivo no es únicamente reducir el malestar actual, sino ayudarte a desarrollar recursos que puedas utilizar de forma autónoma también en el futuro.',
    porQueIniciar:
      'Pedir ayuda no significa que hayas fracasado o que no seas capaz de afrontar tus problemas. En muchas ocasiones supone precisamente lo contrario: dar el primer paso para comprender lo que está ocurriendo y empezar a cuidarte de una forma diferente. La terapia puede convertirse en un espacio donde sentirte escuchado, comprender mejor lo que estás viviendo y avanzar hacia una vida con mayor equilibrio, bienestar y satisfacción personal.',
    precio: 55,
    metaDescription:
      'Terapia individual para adultos en Valencia. Ansiedad, autoestima, gestión emocional, burnout y más. Intervención personalizada con evidencia científica. Santiago Navarro, Psicólogo General Sanitario.',
  },
  {
    slug: 'terapia-infanto-juvenil',
    titulo: 'Terapia infanto-juvenil',
    subtitulo: 'Acompañando el desarrollo emocional de niños y adolescentes',
    descripcionIntro: [
      'La infancia y la adolescencia son etapas de grandes cambios, aprendizajes y desafíos. Durante este proceso pueden aparecer dificultades emocionales, conductuales, sociales o académicas que afecten al bienestar del menor y al funcionamiento de toda la familia. En muchas ocasiones, detrás de una conducta desafiante, un bajo rendimiento escolar o un cambio en el estado de ánimo existe un malestar que el niño o adolescente todavía no sabe expresar.',
      'La terapia infanto-juvenil ofrece un espacio seguro y adaptado a cada etapa evolutiva donde comprender qué está ocurriendo, identificar las necesidades del menor y desarrollar herramientas que favorezcan su bienestar. La intervención siempre se adapta a las características individuales de cada niño o adolescente, utilizando estrategias acordes a su edad y forma de comprender el mundo.',
      'Cuando resulta beneficioso, el trabajo se realiza también junto a la familia, proporcionando pautas que faciliten la generalización de los avances al entorno cotidiano y favorezcan un desarrollo saludable.',
    ],
    quePodemosTrabajar: [
      'Ansiedad infantil o adolescente',
      'Miedos y fobias',
      'Baja autoestima e inseguridad',
      'Problemas de conducta',
      'Rabietas frecuentes',
      'Dificultades para gestionar las emociones',
      'Impulsividad',
      'Problemas de atención y concentración',
      'TDAH',
      'Autismo (TEA)',
      'Acoso escolar (bullying)',
      'Dificultades para hacer amigos',
      'Aislamiento social',
      'Problemas de adaptación escolar',
      'Bajo rendimiento académico',
      'Gestión del uso de pantallas',
      'Separación o divorcio de los padres',
      'Duelo',
      'Cambios importantes en la familia',
      'Conflictos familiares',
    ],
    comoProceso:
      'Las primeras sesiones estarán dirigidas a comprender la situación del menor, conocer su contexto familiar y escolar y establecer unos objetivos de intervención adaptados a sus necesidades. Siempre que sea necesario, se trabajará conjuntamente con la familia para favorecer un cambio estable y duradero.',
    precio: 55,
    metaDescription:
      'Terapia psicológica para niños y adolescentes en Valencia. Ansiedad, conducta, TDAH, TEA, bullying y dificultades escolares. Santiago Navarro, Psicólogo General Sanitario.',
  },
  {
    slug: 'terapia-online',
    titulo: 'Terapia online',
    subtitulo: 'La misma calidad terapéutica, estés donde estés',
    descripcionIntro: [
      'La terapia online permite acceder a un tratamiento psicológico de calidad desde cualquier lugar, manteniendo la misma rigurosidad, confidencialidad y eficacia que la modalidad presencial. Gracias a la videollamada, es posible realizar un proceso terapéutico cómodo y flexible, adaptado a tu ritmo de vida.',
      'Esta modalidad resulta especialmente útil para personas que viven fuera de Valencia, tienen horarios complicados, viajan con frecuencia o prefieren realizar las sesiones desde un entorno donde se sienten cómodas.',
      'El trabajo terapéutico sigue exactamente el mismo proceso que en consulta presencial: comprender las dificultades, establecer objetivos individualizados y desarrollar herramientas que favorezcan el bienestar emocional.',
    ],
    quePodemosTrabajar: [
      'Ansiedad',
      'Estrés',
      'Ataques de pánico',
      'Estado de ánimo bajo',
      'Autoestima',
      'Gestión emocional',
      'Relaciones de pareja',
      'Dependencia emocional',
      'Duelo',
      'Problemas familiares',
      'TDAH en adultos',
      'Autismo en adultos',
      'Organización y planificación',
      'Perfeccionismo',
      'Burnout',
      'Procesos de cambio',
      'Crecimiento personal',
    ],
    comoProceso:
      'Solo necesitarás un lugar tranquilo, conexión a internet y un dispositivo con cámara. Las sesiones mantienen el mismo nivel de confidencialidad y profesionalidad que la terapia presencial.',
    precio: 55,
    metaDescription:
      'Terapia psicológica online con Santiago Navarro, Psicólogo General Sanitario. Sesiones por videollamada con la misma calidad que la consulta presencial. Flexible y confidencial.',
  },
  {
    slug: 'neurodivergencia',
    titulo: 'Neurodivergencia',
    subtitulo: 'Comprender tu forma de funcionar es el primer paso para empezar a cuidarte',
    descripcionIntro: [
      'No existe una única forma de pensar, aprender, concentrarse, comunicarse o relacionarse con el mundo.',
      'La neurodivergencia hace referencia a aquellas personas cuyo funcionamiento neurológico y forma de procesar la información difieren de lo considerado más habitual. Dentro de este concepto pueden encontrarse diferentes perfiles, cada uno con sus propias características, fortalezas y necesidades.',
      'En Beta 8 Center centramos nuestra atención especialmente en tres perfiles:',
    ],
    descripcionDestacados: ['TDAH', 'TEA', 'Altas capacidades'],
    descripcionCierre: [
      'Cada uno de ellos puede manifestarse de una forma diferente en cada persona. Por eso, no trabajamos desde etiquetas ni desde soluciones universales, sino desde una comprensión individualizada de cada perfil y de las necesidades concretas de la persona.',
      'La terapia no busca cambiar quién eres ni hacerte funcionar como los demás. El objetivo es ayudarte a comprender mejor tu forma de funcionar, identificar las dificultades que están interfiriendo en tu bienestar y desarrollar estrategias que se adapten realmente a tu vida.',
    ],
    // El listado transversal se sustituye aquí por el detalle de cada perfil.
    quePodemosTrabajar: [],
    perfiles: [
      {
        id: 'tdah',
        titulo: 'TDAH',
        subtitulo: 'Comprender tu atención para organizar mejor tu vida',
        parrafos: [
          'El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es un trastorno del neurodesarrollo que puede influir en la atención, la impulsividad, la actividad y diferentes funciones ejecutivas.',
          'Sin embargo, el TDAH no se manifiesta de la misma manera en todas las personas. Algunas pueden experimentar dificultades principalmente relacionadas con la atención; otras, con la impulsividad, la organización, la gestión del tiempo o la regulación emocional.',
        ],
        introLista: 'En terapia podemos trabajar aspectos como:',
        lista: [
          'Organización y planificación',
          'Gestión del tiempo',
          'Priorización de tareas',
          'Inicio y finalización de actividades',
          'Procrastinación',
          'Atención y concentración',
          'Memoria de trabajo',
          'Control de impulsos',
          'Flexibilidad cognitiva',
          'Regulación emocional',
          'Gestión de la frustración',
          'Autoestima',
          'Ansiedad asociada a la sensación de no llegar a todo',
          'Dificultades académicas o laborales',
        ],
        cierre: [
          'Las funciones ejecutivas son procesos que nos ayudan a organizar nuestra conducta y dirigirla hacia nuestros objetivos. Cuando existen dificultades en estas áreas, tareas aparentemente sencillas pueden requerir un esfuerzo mucho mayor.',
          'Por eso, el objetivo no es simplemente decirte que te organices mejor, sino ayudarte a comprender cómo funciona tu atención y a construir estrategias, sistemas y herramientas que se adapten a tu forma de funcionar.',
        ],
      },
      {
        id: 'tea',
        titulo: 'TEA',
        subtitulo: 'Comprenderte mejor para relacionarte con el mundo de una manera más auténtica',
        parrafos: [
          'El Trastorno del Espectro Autista (TEA) es un trastorno del neurodesarrollo que puede influir en la comunicación, la interacción social, la forma de procesar la información, los intereses y la respuesta a determinados estímulos.',
          'El autismo es un espectro amplio y cada persona puede experimentarlo de una forma diferente. No existe una única manera de ser autista ni un único perfil de necesidades.',
        ],
        introLista: 'En terapia podemos trabajar aspectos como:',
        lista: [
          'Habilidades de comunicación',
          'Relaciones interpersonales',
          'Habilidades sociales',
          'Comprensión de situaciones sociales',
          'Asertividad y establecimiento de límites',
          'Regulación emocional',
          'Ansiedad',
          'Sobrecarga y saturación',
          'Gestión de cambios y situaciones imprevistas',
          'Dificultades relacionadas con la sensibilidad sensorial',
          'Autoestima',
          'Identidad',
          'Enmascaramiento o masking',
          'Relaciones académicas, laborales o familiares',
        ],
        cierre: [
          'El objetivo de la intervención no es eliminar las características propias de la persona ni obligarla a comportarse de una manera que no le representa.',
          'Se trata de comprender mejor las propias necesidades, desarrollar herramientas de comunicación y regulación, identificar los apoyos necesarios y favorecer una mayor autonomía y bienestar.',
        ],
        destacado: 'La terapia debe ayudarte a vivir mejor, no a esconder quién eres.',
      },
      {
        id: 'altas-capacidades',
        titulo: 'Altas capacidades',
        subtitulo: 'Comprender un funcionamiento diferente también implica comprender sus dificultades',
        parrafos: [
          'Las altas capacidades hacen referencia a perfiles con características cognitivas y de aprendizaje que pueden diferir de las de la población general. Sin embargo, tener una elevada capacidad intelectual o un talento específico no significa estar libre de dificultades emocionales o psicológicas.',
          'En ocasiones, algunas personas con altas capacidades pueden sentirse diferentes, experimentar una elevada autoexigencia o tener dificultades para encontrar un entorno en el que sentirse comprendidas.',
        ],
        introLista: 'En terapia podemos trabajar aspectos como:',
        lista: [
          'Perfeccionismo',
          'Autoexigencia',
          'Frustración',
          'Ansiedad',
          'Aburrimiento o desmotivación',
          'Dificultades de adaptación',
          'Sensación de ser diferente',
          'Problemas de autoestima',
          'Gestión de las expectativas',
          'Dificultades en las relaciones sociales',
          'Identidad y autoconocimiento',
          'Gestión emocional',
        ],
        cierre: [
          'Las altas capacidades no deben entenderse únicamente desde las fortalezas. Una persona puede tener grandes capacidades cognitivas y, al mismo tiempo, experimentar ansiedad, inseguridad, dificultades emocionales o problemas de adaptación.',
          'La terapia puede ayudarte a comprender mejor tu forma de pensar y aprender, gestionar las exigencias que te impones y desarrollar una relación más equilibrada contigo mismo.',
        ],
      },
    ],
    bloqueTemas: {
      titulo: 'Una base común: la salud mental',
      subtitulo: 'Cada perfil es diferente. El malestar psicológico también merece ser atendido.',
      parrafos: [
        'Aunque el TDAH, el TEA y las altas capacidades presentan características diferentes, las personas que forman parte de estos perfiles también pueden experimentar dificultades psicológicas que pueden aparecer en cualquier persona.',
      ],
      destacado: 'La neurodivergencia no protege frente a problemas de salud mental.',
      introLista: 'Por eso, independientemente del perfil, en terapia también podemos trabajar:',
      temas: [
        {
          titulo: 'Ansiedad',
          texto:
            'Preocupación constante, anticipación, miedo, pensamientos repetitivos, ansiedad social o sensación de estar permanentemente en alerta.',
        },
        {
          titulo: 'Estrés y sobrecarga',
          texto:
            'Dificultad para desconectar, sensación de no poder llegar a todo, saturación mental y agotamiento emocional.',
        },
        {
          titulo: 'Gestión emocional',
          texto:
            'Comprender lo que sientes, identificar qué desencadena tus emociones y desarrollar formas más útiles de regularlas.',
        },
        {
          titulo: 'Autoestima',
          texto:
            'Trabajar la autocrítica, la sensación de no ser suficiente y las experiencias de fracaso o incomprensión acumuladas.',
        },
        {
          titulo: 'Depresión y bajo estado de ánimo',
          texto:
            'Pérdida de motivación, tristeza, aislamiento, desesperanza o dificultades para disfrutar de las actividades cotidianas.',
        },
        {
          titulo: 'Trauma y experiencias difíciles',
          texto:
            'Procesar experiencias que han tenido un impacto emocional y que continúan influyendo en la forma de relacionarte contigo mismo y con los demás.',
        },
        {
          titulo: 'Relaciones interpersonales',
          texto:
            'Comunicación, límites, conflictos, vínculos familiares y dificultades en las relaciones sociales.',
        },
      ],
    },
    bloqueCierre: {
      titulo: 'Una terapia adaptada a tu forma de funcionar',
      aperturas: [
        'No hay dos personas con TDAH iguales.',
        'No hay dos personas autistas iguales.',
        'Y no todas las personas con altas capacidades experimentan su realidad de la misma manera.',
      ],
      parrafos: [
        'Por eso, una intervención psicológica eficaz debe tener en cuenta tanto las características del perfil neurodivergente como la historia, las necesidades y los objetivos individuales de cada persona.',
        'En Beta 8 Center trabajamos desde una perspectiva individualizada y basada en la evidencia científica, combinando la comprensión del perfil neurodivergente con la intervención sobre las dificultades psicológicas que puedan estar afectando a tu bienestar.',
        'El objetivo no es cambiar quién eres.',
      ],
      introLista: 'Es ayudarte a:',
      lista: [
        'Comprender mejor cómo funcionas',
        'Identificar tus necesidades',
        'Desarrollar estrategias útiles',
        'Mejorar tu regulación emocional',
        'Organizar mejor tu día a día',
        'Fortalecer tu autoestima',
        'Mejorar tus relaciones',
        'Afrontar la ansiedad y el estrés',
        'Construir una vida que se adapte mejor a ti',
      ],
      cierre:
        'No se trata de aprender a funcionar como los demás. Se trata de comprender cómo funcionas tú y encontrar las herramientas que realmente te ayuden a vivir mejor.',
    },
    comoProceso:
      'El tratamiento se adapta completamente a las necesidades de cada persona, buscando comprender tanto las dificultades como las fortalezas para construir estrategias útiles que puedan aplicarse en el día a día.',
    precio: 55,
    metaDescription:
      'Psicología para personas neurodivergentes en Valencia: TDAH, TEA y altas capacidades en niños, adolescentes y adultos. Enfoque individualizado y basado en la evidencia. Santiago Navarro, Psicólogo General Sanitario.',
  },
  {
    slug: 'orientacion-padres',
    titulo: 'Orientación a madres y padres',
    subtitulo: 'Herramientas para comprender, acompañar y educar mejor',
    descripcionIntro: [
      'La crianza puede plantear situaciones difíciles y, en ocasiones, no siempre sabemos cómo responder ante determinados comportamientos o conflictos.',
      'La orientación a madres y padres ofrece un espacio para comprender mejor las necesidades de los hijos y aprender estrategias educativas eficaces, respetuosas y adaptadas a cada situación.',
      'El objetivo no es buscar una forma perfecta de educar, sino ayudarte a contar con más herramientas, claridad y seguridad para afrontar los retos cotidianos de la crianza.',
    ],
    listaTitulo: 'Podemos trabajar',
    quePodemosTrabajar: [
      'Límites y normas en casa',
      'Manejo de conductas difíciles',
      'Refuerzo positivo',
      'Consecuencias y establecimiento de límites',
      'Cómo responder ante rabietas y explosiones emocionales',
      'Comunicación con los hijos',
      'Estilos educativos y pautas de crianza',
      'Gestión de conflictos familiares',
      'Rutinas y hábitos',
      'Dificultades relacionadas con el sueño, los deberes o las pantallas',
      'Conductas desafiantes',
      'Celos entre hermanos',
      'Coordinación entre progenitores',
      'Estrategias adaptadas a niños y adolescentes con TDAH o TEA',
    ],
    comoProceso:
      'Analizaremos las necesidades de vuestro hijo y del conjunto familiar para diseñar estrategias educativas realistas que puedan aplicarse en el día a día y favorezcan un ambiente más tranquilo y seguro.',
    cierre:
      'Educar no consiste en tener siempre la respuesta correcta. Consiste en comprender qué está ocurriendo y aprender nuevas formas de responder.',
    precio: 55,
    metaDescription:
      'Orientación a madres y padres en Valencia: límites, conductas difíciles, rutinas, pantallas, comunicación y crianza con TDAH o TEA. Santiago Navarro, Psicólogo General Sanitario.',
  },
  {
    slug: 'terapia-familiar',
    titulo: 'Terapia familiar',
    subtitulo: 'Mejorar la comunicación para fortalecer las relaciones',
    descripcionIntro: [
      'Cuando una familia atraviesa un momento complicado, el malestar suele afectar a todos sus miembros. Los conflictos mantenidos, las dificultades de comunicación o los cambios importantes pueden generar un clima de tensión que repercute en el bienestar de toda la familia.',
      'La terapia familiar ofrece un espacio donde cada persona puede expresar cómo vive la situación, sentirse escuchada y trabajar conjuntamente para encontrar nuevas formas de relacionarse y resolver los conflictos. El objetivo es fortalecer los vínculos familiares, mejorar la comunicación y favorecer un entorno más saludable para todos.',
    ],
    quePodemosTrabajar: [
      'Conflictos entre padres e hijos',
      'Problemas de convivencia',
      'Dificultades de comunicación',
      'Discusiones frecuentes',
      'Adolescencia',
      'Problemas de conducta',
      'Separación o divorcio',
      'Reorganización familiar',
      'Familias reconstituidas',
      'Enfermedad de un familiar',
      'Procesos de duelo',
      'Dependencia emocional',
      'Cuidado de familiares',
      'Conflictos entre hermanos',
      'Dificultades relacionadas con TDAH o TEA',
      'Gestión de crisis familiares',
      'Establecimiento de acuerdos familiares',
      'Fortalecimiento del vínculo',
    ],
    comoProceso: '',
    precio: 65,
    metaDescription:
      'Terapia familiar en Valencia. Conflictos, comunicación, separación, duelo y crisis familiares. Espacio donde toda la familia trabaja conjuntamente. Santiago Navarro, Psicólogo General Sanitario.',
  },
];

export function getServicioBySlug(slug: string): ServicioDetalle | undefined {
  return SERVICIOS_DETALLE.find((s) => s.slug === slug);
}
