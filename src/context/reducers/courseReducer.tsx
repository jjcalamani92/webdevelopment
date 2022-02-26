const initialState = {
  courses: [
    {
      id: 1,
      title: 'Desarrollo Web Completo Con HTML5, CSS3, JS AJAX PHP Y MySQL',
      academy: '[UDEMY]',
      description: 'Un curso paso a paso si deseas comenzar en el mundo de la programación Web.',
      teacher: 'Juan Pablo De La Torre Valdez',
      date: '2019-2020'
  },
  {
      id: 2,
      title: 'CSS Grid Y Flexbox, La Guía Definitiva',
      academy: '[UDEMY]',
      description: 'Si nunca has escrito una sola línea de Código HTML y CSS este curso es para ti, incluso si quieres profundizar y dominar las nuevas formas de crear layouts como son Flexbox, CSS Grid, Propiedades Lógicas este curso es para ti.',
      teacher: 'Juan Pablo De La Torre Valdez',
      date: '2019-2020'
  },
  {
      id: 3,
      title: 'JavaScript Moderno Guía Definitiva',
      academy: '[UDEMY]',
      description: 'En este curso aprenderás JavaScript desde los fundamentos hasta temas más avanzados como Prototypes, Delegation, Classes, Ajax, Promises, Generadores, Orientado a Objetos, Fetch API, Async Await, Async JS, Objetos, así como consumir REST APIs entre muchos más.',
      teacher: 'Juan Pablo De La Torre Valdez',
      date: '2019-2020'
  },
  {
      id: 4,
      title: 'Bootstrap 4 TODO sobre diseño web con BOOTSTRAP',
      academy: '[UDEMY]',
      description: 'Con este curso aprenderás a crear páginas web con BOOTSTRAP 4, lo único que necesitas es tener conocimientos básicos de HTML Y CSS.',
      teacher: 'Carlos Valdes',
      date: '2019-2020'
  },
  {
      id: 5,
      title: 'Curso de Bootstrap 4',
      academy: '[UDEMY]',
      description: 'Crea sitios web compatibles entre navegadores de forma fácil y práctica con Bootstrap, un framework frontend que te permite definir estructuras y agregar estilos, comportamientos, modals, tooltips y animaciones. Conoce cómo y en qué casos usarlo en este Curso de Bootstrap.',
      teacher: 'Sacha Lifszyc',
      date: '2019-2020'
  },
  {
      id: 6,
      title: 'JavaScript – ECMAScript 6 y todos sus detalles',
      academy: '[UDEMY]',
      description: 'Continua tu evolución en JavaScript al estándar ES6 y aprende todo lo que esta nueva entrega tiene para ti. ',
      teacher: 'Fernando Herrera',
      date: '2019-2020'
  },
  {
      id: 7,
      title: 'Node: De Cero A Experto',
      academy: '[UDEMY]',
      description: 'Rest, despliegues, Heroku, Mongo, Git, GitHub, Sockets, archivos, JWT y mucho más para ser un experto en Node ',
      teacher: 'Fernando Herrera',
      date: '2019-2020'
  },
  {
      id: 8,
      title: 'PHP 7 Y MYSQL - Desarrollo Web Php Y Bases De Datos Mysql',
      academy: '[UDEMY]',
      description: 'El curso completo, práctico y desde cero de php mysql aprende a programar en php desde cero con este master en php ',
      teacher: 'Carlos Valdes',
      date: '2019-2020'
  },
  {
      id: 9,
      title: 'GIT+GitHub',
      academy: '[UDEMY]',
      description: 'Aprende a trabajar versionando tu código de una forma segura y en equipo. ',
      teacher: 'Fernando Herrera',
      date: '2019-2020'
  },
  {
      id: 10,
      title: 'React ( Hooks Y MERN )',
      academy: '[UDEMY]',
      description: 'Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, SASS, Multiple Routers... ',
      teacher: 'Fernando Herrera',
      date: '2019-2020'
  },
  
  {
      id: 11,
      title: 'MEAN Stack: Master NodeJS Y Angular',
      academy: '[UDEMY]',
      description: 'Implementaremos un proyecto que te enseñara paso a paso a como crear Aplicaciones Web con las herramientas integradas, en un curso pensado para desarrolladores Javascript.',
      teacher: 'Vaxi Drez',
      date: '2020-2021'
  },
  {
      id: 12,
      title: 'MongoDB',
      academy: '[CODIGO FACILITO]',
      description: 'Aprende de bases de datos no relacionales con uno de los motores más populares en ese ámbito, MongoDB. Te enseñamos a manejar y consultar la BD desde 0.',
      teacher: 'Eduardo García',
      date: '2021-2022'
  },
  {
      id: 13,
      title: 'React Native',
      academy: '[UDEMY]',
      description: 'TypeScript, React Native CLI, Google y Apple maps, cámara, GPS, polylines, hooks, autenticación, despliegues y más ',
      teacher: 'Fernando Herrera',
      date: '2021-2022'
  },
  ],
  activeCourse: null,
};

export const courseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
