// Fuente única de datos del centro — cambiar aquí se propaga a toda la web.

export const SITE = {
  name: 'Beta 8 Center',
  psychologist: 'Santiago Navarro Zamora',
  credential: 'Psicólogo General Sanitario',
  colegiadoNum: 'CV17765',
  colegio: 'Colegio Oficial de Psicólogos de la Comunitat Valenciana',
  colegioSiglas: 'COPCV',
  colegiadoImg: '/colegiado-santiago-navarro.jpg',
  colegiadoImgAlt:
    'Sello del Colegio Oficial de Psicólogos de la Comunitat Valenciana acreditando a Santiago Navarro como colegiado CV17765',
  lema: 'Comprender lo que te ocurre es el primer paso para poder cambiarlo',
  description:
    'Consulta de psicología en Valencia. Terapia individual, infanto-juvenil, online, neurodivergencia (TDAH, TEA y altas capacidades) y orientación familiar. Pide cita con Santiago Navarro Zamora, Psicólogo General Sanitario.',

  // Contacto — variables fáciles de actualizar
  phone: '+34 679 410 618', // [temporal/personal; se actualizará con el nº definitivo del centro]
  phoneRaw: '+34679410618',
  email: 'Beta8center@gmail.com',
  whatsappMsg: 'Hola%2C%20me%20gustar%C3%ADa%20pedir%20m%C3%A1s%20informaci%C3%B3n.',

  // Sede
  address: 'C/ Gandía 10',
  city: 'Valencia',
  postalCode: '[PENDIENTE]',
  addressFull: 'C/ Gandía 10, Valencia',
  addressNote: 'Local en reforma — apertura prevista ~septiembre 2026',
  mapsEmbedSrc:
    'https://maps.google.com/maps?q=Calle+Gandia+10+Valencia+Spain&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapsLink: 'https://maps.google.com/?q=C%2F+Gand%C3%ADa+10%2C+Valencia%2C+Espa%C3%B1a',

  // SEO / Open Graph
  url: 'https://beta8center.es', // [PENDIENTE: dominio definitivo]
  ogImage: '/og-image.jpg', // [PENDIENTE: imagen Open Graph definitiva]

  // Legal (identidad fiscal — PENDIENTE revisión profesional)
  fiscalName: '[PENDIENTE: nombre o razón social]',
  nif: '[PENDIENTE: NIF/CIF]',
  fiscalAddress: '[PENDIENTE: domicilio fiscal]',

  // Precios
  priceSesion: 55,
  priceFamiliar: 65,
} as const;

export type Servicio = {
  slug: string;
  titulo: string;
  subtitulo: string;
  descripcionBreve: string;
  icono: string;
};

export const SERVICIOS: Servicio[] = [
  {
    slug: 'terapia-individual',
    titulo: 'Terapia individual',
    subtitulo: 'Un espacio para comprender lo que estás viviendo',
    descripcionBreve:
      'Acompañamiento personalizado para adultos que atraviesan dificultades emocionales, ansiedad, baja autoestima o procesos de cambio vital.',
    icono: 'person',
  },
  {
    slug: 'terapia-infanto-juvenil',
    titulo: 'Terapia infanto-juvenil',
    subtitulo: 'Acompañando el desarrollo emocional de niños y adolescentes',
    descripcionBreve:
      'Intervención especializada para niños y adolescentes con dificultades emocionales, conductuales, sociales o académicas.',
    icono: 'child',
  },
  {
    slug: 'terapia-online',
    titulo: 'Terapia online',
    subtitulo: 'La misma calidad terapéutica, estés donde estés',
    descripcionBreve:
      'Sesiones por videollamada con la misma rigurosidad y confidencialidad que la modalidad presencial, desde cualquier lugar.',
    icono: 'video',
  },
  {
    slug: 'neurodivergencia',
    titulo: 'Neurodivergencia',
    subtitulo: 'Comprender tu forma de funcionar es el primer paso para empezar a cuidarte',
    descripcionBreve:
      'Intervención especializada en TDAH, TEA y altas capacidades. Comprender tu perfil y construir estrategias que se adapten realmente a tu vida.',
    icono: 'brain',
  },
  {
    slug: 'orientacion-padres',
    titulo: 'Orientación a madres y padres',
    subtitulo: 'Herramientas para comprender, acompañar y educar mejor',
    descripcionBreve:
      'Estrategias educativas eficaces y respetuosas para afrontar límites, conductas difíciles, rutinas y conflictos cotidianos de la crianza.',
    icono: 'family',
  },
  {
    slug: 'terapia-familiar',
    titulo: 'Terapia familiar',
    subtitulo: 'Mejorar la comunicación para fortalecer las relaciones',
    descripcionBreve:
      'Espacio donde cada miembro de la familia puede expresarse y trabajar conjuntamente para encontrar nuevas formas de relacionarse.',
    icono: 'home',
  },
];
