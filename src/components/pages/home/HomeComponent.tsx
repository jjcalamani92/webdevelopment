
import { Boton } from '../../layouts/Boton'
import { HomeImage } from './HomeImage'

export const HomeComponent = () => {
    return (
        <section className="home">
            <HomeImage/>
            <div className="content">
                <h2>Hola, soy <span>Jesus Calamani</span></h2>
                <h3> desarrollador <span>Full Stack Developer</span> </h3>
                <p>Desarrollo páginas web, con una excelente relación calidad-precio, especialmente pensadas para la <span>pequeña y mediana empresa</span>.</p>
                <Boton
                    titleI="Sobre mi"
                    className="btn-general"
                    icon="user"
                    // handleclick={ handleClick } 
                />
                {/* <a href="/about" className="btn-1"> sobre mi <i className="fas fa-user"></i> </a> */}
            </div>
        </section>
    )
}
