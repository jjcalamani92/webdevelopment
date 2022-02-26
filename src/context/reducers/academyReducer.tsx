const initialState = {
  academys: [
    {
      id: 1,
      academy: "UDEMY",
      description:
        "Udemy.com es una plataforma de aprendizaje en línea. Está dirigido a adultos profesionales.​ A diferencia de los programas académicos MOOC conducidos por tradicionales cursos de trabajo creados por las universidades, Udemy utiliza contenido de creadores en línea para vender y así conseguir ganancias.",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645201091/React-jj/habilidades/education/udemy-1_rjq5fg.svg",
    },
    {
      id: 2,
      academy: "platzi",
      description:
        "Platzi es una plataforma latinoamericana de educación en línea. ​ Fue fundada en 2014 por el ingeniero colombiano Freddy Vega y por el informático guatemalteco Christian Van Der Henst.",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645201230/React-jj/habilidades/education/badge-empodera-ecb8c41b-cdee-4126-bfb3-a6872e2fe2f8_yie6wn.png",
    },
    {
      id: 3,
      academy: "openwebinars",
      description:
        "Ponemos a tu alcance el nuevo modelo formativo con el que las empresas que cuidan su Talento IT consiguen los mejores resultados. Descubre la plataforma de eLearning tecnológico líder en el mercado hispanohablante. ",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645057336/React-jj/habilidades/education/ff80808165ffc80e01660abec89e00c1-large_btuuns.png",
    },
    {
      id: 4,
      academy: "edteam",
      description:
        "EDteam es un proyecto con la convicción de que la educación es la herramienta más poderosa para cambiar el mundo. Los avances de la ciencia, la tecnología y todos los campos humanos se deben a la educación. Con educación, las personas pueden salir de la pobreza y alcanzar sus sueños.",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645057210/React-jj/habilidades/education/edteam_nxcx8k.png",
    },
    {
      id: 5,
      academy: "Código Facilito",
      description:
        "Aprende desarrollo web con HTML5, CSS y JavaScript. Backend con Python. React, Go, Laravel. Desarrollo móvil con Android, Flutter y mucho más. Desde tu casa.",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645057468/React-jj/habilidades/education/VyV8Zp6p_UNT1GQaAthe3Ec_5_m03OhjNBZGvthRxcesnrmkXck3CwTfS7PjRqZh0_0_voujox.png",
    },
  ],
  activeAcademy: null,
};

export const academyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
