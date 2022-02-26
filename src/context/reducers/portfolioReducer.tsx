const initialState = {
  works: [
    {
      id: 1,
      title: 'shop huellitas',
      content: 'Sitio web de una veterinaria',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019958/React-jj/portfolio/img01_wony4i.jpg',
      url: 'https://shophuellitas.netlify.app/',
      type: 'page',
      work: 'produccion'

  },
  {
      id: 2,
      title: 'Bienes y raices',
      content: 'Página web de una empresa de venta de casas',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019960/React-jj/portfolio/img09_x5r0g8.jpg',
      url: 'https://heuristic-sinoussi-d6deb2.netlify.app/',
      type: 'page',
      work: 'desarrollo'
  },
  {
      id: 9,
      title: 'web development',
      content: 'Nuestro sitio',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644875469/React-jj/lvsgwhadou1vkgmoscqu.png',
      url: 'https://jjwebdevelopment92.herokuapp.com/',
      type: 'site',
      work: 'produccion'
  },
  {
      id: 3,
      title: 'metal gym',
      content: 'Sitio web de un gimnasio',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019958/React-jj/portfolio/img05_ecdo2t.jpg',
      url: 'https://metalgym.netlify.app/',
      type: 'site',
      work: 'produccion'
  },
  {
      id: 4,
      title: 'coffee shop',
      content: 'Tienda de café',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019959/React-jj/portfolio/img11_uac9q2.jpg',
      url: 'https://shopcafe.netlify.app/',
      type: 'page',
      work: 'produccion'
  },
  {
      id: 5,
      title: 'coffee shop',
      content: 'Tienda de café',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019958/React-jj/portfolio/img06_qdtj6x.jpg',
      url: 'https://nervous-minsky-825e8e.netlify.app/',
      type: 'page',
      work: 'desarrollo'
  },
  {
      id: 6,
      title: 'pollo frito',
      content: 'Sitio web de un restaurante',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019958/React-jj/portfolio/img02_vpwfmk.jpg',
      url: 'https://donpollo.netlify.app/',
      type: 'page',
      work: 'desarrollo'
  },
  {
      id: 7,
      title: 'VERANET',
      content: 'Sitio web de una empresa de internet',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019992/React-jj/portfolio/logo_pcqkee.png',
      url: 'https://veranet-react.herokuapp.com/',
      type: 'site',
      work: 'desarrollo'
  },
  {
      id: 8,
      title: 'ADIIISOL',
      content: 'Tienda Online',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645643137/React-jj/portfolio/tamano-del-sol_hllriy.jpg',
      url: 'https://adiisol.herokuapp.com/',
      type: 'site',
      work: 'desarrollo'
  },
  {
      id: 9,
      title: 'Glasses Shop',
      content: 'Página web de una tienda de lentes',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645643597/React-jj/portfolio/tipos-de-lentes-instagram-ok-vision-lentes_rj7mim.jpg',
      url: 'https://glassesshops.herokuapp.com/',
      type: 'page',
      work: 'produccion'
  },
  {
      id: 10,
      title: 'Constructora sol',
      content: 'Página web de una empresa constructora',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645643671/React-jj/portfolio/materiales-construccion_hxvw3j.jpg',
      url: 'https://constructorasol.herokuapp.com/',
      type: 'page',
      work: 'desarrollo'
  },
  {
      id: 11,
      title: 'ADMIN',
      content: 'Panel de administración de clientes',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644878059/React-jj/portfolio/Integrate-AdminLTE-In-Laravel-Complete-Guide-01_gdmqce.png',
      url: 'https://veranet.herokuapp.com/',
      type: 'app',
      work: 'desarrollo'
  },
  {
      id: 12,
      title: 'Academia Focus',
      content: 'Página web de una academia',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645713371/React-jj/portfolio/TN_school-notebook-with-pencil-animated-clipart-3_qy7zda.jpg',
      url: 'https://academyfocus.herokuapp.com/',
      type: 'page',
      work: 'desarrollo'
  },
  {
      id: 13,
      title: 'Car shop',
      content: 'Página web de agencia de venta de autos',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019960/React-jj/portfolio/img07_n1vbcz.jpg',
      url: 'https://carsshops.herokuapp.com/',
      type: 'page',
      work: 'produccion'
  },
  {
      id: 14,
      title: 'Clinica Muelitas',
      content: 'Página web de una clinica dental',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645749666/React-jj/portfolio/dentistaenalcorcon_i9ybur.jpg',
      url: 'https://clinicamuelitas.herokuapp.com/',
      type: 'page',
      work: 'produccion'
  },
  ],
  activeWork: null,
};

export const portfolioReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
