const initialState = {
  skills: [
    {
      _id: {
        $oid: "620d541617f900bed083dd2e",
      },
      title: "html",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018099/React-jj/habilidades/icon-1_s0ka77.png",
      description:
        "HTML, siglas en inglés de HyperText Markup Language (‘lenguaje de marcado de hipertexto’), hace referencia al lenguaje de marcado para la elaboración de páginas web.",
      type: "frontend",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d54a117f900bed083dd35",
      },
      title: "css",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018099/React-jj/habilidades/icon-2_kmnk3j.png",
      description:
        "CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.",
      type: "frontend",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d550417f900bed083dd3a",
      },
      title: "javascript",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018099/React-jj/habilidades/icon-3_lgz1fh.png",
      description:
        "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.",
      type: "frontend",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d55e617f900bed083dd44",
      },
      title: "sass",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-4_d7lq4d.png",
      description:
        "Sass es un lenguaje de hoja de estilos en cascada inicialmente diseñado por Hampton Catlin y desarrollado por Natalie Weizenbaum.​​Después de sus versiones iniciales, Nathan Weizenbaum y Chris Eppstein han continuado extendiendo Sass con SassScript, un lenguaje de script simple, usado en los ficheros Sass.",
      type: "frontend",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d576317f900bed083dd57",
      },
      title: "node",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018101/React-jj/habilidades/icon-5_imd9ev.png",
      description:
        "Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.",
      type: "backend",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d7b253a648f0201b4110f",
      },
      title: "angular",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-7_vv3yl3.png",
      description:
        "Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.",
      type: "framework",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d7bcd3a648f0201b41112",
      },
      title: "git",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-10_ruozxc.png",
      description:
        "Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d7c0b3a648f0201b41121",
      },
      title: "github",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-11_jjgd5p.png",
      description:
        "GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc.",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d7c4a3a648f0201b41127",
      },
      title: "MongoDB",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-12_zgzj5s.png",
      description:
        'MongoDB (del inglés humongous, "enorme") es un sistema de base de datos NoSQL, orientado a documentos y de código abierto.\n\nEn lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON (una especificación similar a JSON) con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida. ',
      type: "backend",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d7c753a648f0201b4112d",
      },
      title: "Bootstrap",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018101/React-jj/habilidades/icon-13_tej2gs.png",
      description:
        "Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d7ca03a648f0201b41133",
      },
      title: "MySQL",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018101/React-jj/habilidades/icon-9_uqvvmb.png",
      description:
        "MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo,1​2​ y una de las más populares en general junto a Oracle y Microsoft SQL Server, todo para entornos de desarrollo web. ",
      type: "backend",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d7dfb3a648f0201b41142",
      },
      title: "php",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645051330/React-jj/habilidades/php-icon-png-7_fo1vgx.png",
      description:
        "PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994.​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group.",
      type: "backend",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d7dfb3a648f0201b41144",
      },
      title: "express",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645136779/React-jj/habilidades/60d5df5a051d8765f7027878_expressjs_xzjdbg.png",
      description:
        "Traducción del inglés-Express.js, o simplemente Express, es un marco de aplicación web de back-end para Node.js, lanzado como software gratuito y de código abierto bajo la licencia MIT. Está diseñado para crear aplicaciones web y API. Se le ha llamado el marco de servidor estándar de facto para Node.js.",
      type: "framework",
      __v: 0,
    },
    {
      _id: {
        $oid: "620d7dfb3a648f0201b41145",
      },
      title: "Typescript",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645136729/React-jj/habilidades/Typescript_logo_2020_gjeedj.svg",
      description:
        "TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.",
      __v: 0,
    },
  ],
  activeSkill: null,
};

export const skillReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
