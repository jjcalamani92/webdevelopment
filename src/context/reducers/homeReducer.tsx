
const initialState = {
    sliders: [
        {
            id: 1,
            title: 'los mejores cursos que vas a encontrar los encuentras aqui!',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645702572/education/home/home-slide-1_gdwtuy.jpg',
        },
        {
            id: 2,
            title: 'los mejores cursos que vas a encontrar los encuentras aqui!',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645702571/education/home/home-slide-3_ybnnzb.jpg',
        },
        {
            id: 3,
            title: 'los mejores cursos que vas a encontrar los encuentras aqui!',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645702571/education/home/home-slide-2_to7lns.jpg',
        },
    ],
    activeSlider: null
}

export const homeReducer = ( state = initialState, action: any ) => {
    switch ( action.type ) {
        default:
            return state;
    }
}