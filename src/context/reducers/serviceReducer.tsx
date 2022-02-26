const initialState = {
  services: [
    {
      id: 1,
      title: 'Diseño Web',
      content: 'El diseño web es una actividad que consiste en la planificación, diseño, implementación y mantenimiento de sitios web.',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644021138/React-jj/services/s-1_mgfqim.svg',
  },
  {
      id: 2,
      title: 'Seo Marketing',
      content: 'El posicionamiento en buscadores, optimización en motores de búsqueda o SEO (del inglés search engine optimization) es un conjunto de acciones orientadas a mejorar el posicionamiento de un sitio web en la lista de resultados de Google, Bing, u otros buscadores de internet.',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644021138/React-jj/services/s-2_fchjif.svg',
  },
  {
      id: 3,
      title: 'Alojamiento Web',
      content: 'El alojamiento web (en inglés: web hosting) es el servicio que provee a los usuarios de Internet un sistema para poder almacenar información, imágenes, vídeo, o cualquier contenido accesible vía web.',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644021138/React-jj/services/s-3_litgzy.svg',
  },
  {
      id: 4,
      title: 'Publicidad Digital',
      content: 'La publicidad en Internet es una forma de mercadotecnia y publicidad digital que utiliza internet para dirigir mensajes promocionales a los clientes. Incluye el email marketing, mercadotecnia en buscadores web (SEM), mercadotecnia en redes sociales, muchos tipos de publicidad por visualización (como banners en páginas web) y publicidad móvil. ',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644021138/React-jj/services/s-4_ucjlm7.svg',
  },
  {
      id: 5,
      title: 'Campaña Publicitaria',
      content: 'Una campaña publicitaria es una estrategia de comunicación que llevan a cabo las empresas para difundir un producto, servicio o material de la marca a su mercado meta, con el objetivo de fijarla en la mente de sus consumidores potenciales.',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644021138/React-jj/services/s-5_fwisbo.svg',
  },
  {
      id: 6,
      title: 'Marketing De Contenidos',
      content: 'Marketing de Contenidos es una estrategia de Marketing enfocada en atraer clientes potenciales de una manera natural, a partir de contenidos relevantes que se distribuyen en los distintos canales y medios digitales en los que está la audiencia.',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644021138/React-jj/services/s-6_bd6t7i.svg',
  },
  ],
  activeService: null,
};

export const serviceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
