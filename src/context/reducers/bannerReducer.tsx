
const initialState = {
  banners: [
    {
      id: 1,
      title: 'Diseño grafico',
      content: '12 módulos',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645702664/education/home/subject-icon-1_dm7fml.png',
    },
    {
      id: 2,
      title: 'Matematicas',
      content: '12 módulos',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645702664/education/home/subject-icon-2_mtxsqn.png',
    },
    {
      id: 3,
      title: 'Enseñando',
      content: '12 módulos',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645702664/education/home/subject-icon-3_r8ebke.png',
    },
    {
      id: 4,
      title: 'Desarrollo',
      content: '12 módulos',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645702664/education/home/subject-icon-4_w56rqk.png',
    },
    {
      id: 5,
      title: 'Ciencia',
      content: '12 módulos',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645702664/education/home/subject-icon-5_lnqnnk.png',
    },
    {
      id: 6,
      title: 'Ingenieria',
      content: '12 módulos',
      image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645702664/education/home/subject-icon-6_xgdolf.png',
    },
  ],
  bannerSlider: null
}

export const bannerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
}