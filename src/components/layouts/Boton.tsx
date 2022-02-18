

export const Boton = ( props:any ) => {
    const { title, titleI, className , handleclick, icon } = props;
    return (
        <button 
            className={`${ className }`}
            onClick={ handleclick }
        >
            <span> { title } </span> { titleI }
            <i className={`fas fa-${ icon }`}></i>
        </button>
    )
}
