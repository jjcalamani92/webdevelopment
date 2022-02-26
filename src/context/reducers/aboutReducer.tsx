const initialState = {
  aboutMe: {
    nombre: 'Jesus Calamani',
    edad: 29,
    email: 'jesuscalamani@outlook.com',
    direccion: 'La Paz - Bolivia',
    freelance: 'Disponible',
    skill: 'Full Stack Developer Jr',
    lenguaje: 'Español, Ingles',
    añosExperiencia: 3,
    clientesFelices: 6,
    proyectosCompletados: 7
},
  activeAbout: null,
};

export const aboutReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
