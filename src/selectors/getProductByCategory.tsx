
export const getProductByCategory = ( products:any, category:any ) => {
    const validCategory = ['esencia', 'especias', 'especiasOrganicas'];
    if ( !validCategory.includes( category ) ) {
        throw new Error(`Tipo de categoria '${ category }' no es correcto`);

    }
    return products.filter( (product: { category: any; }) => product.category === category );
}