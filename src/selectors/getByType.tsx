export const getByType = ( products:any, type:any  ) => {
  const validType = ['page', 'site', 'app'];

  if (  !validType.includes( type ) ) {
      throw new Error(`Tipo de Web "${ type }" no es correcto`);
  }

  return products.filter( (work: { type: any; }) => work.type === type );
}