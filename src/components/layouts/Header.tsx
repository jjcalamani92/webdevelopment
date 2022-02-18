import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const handleOpen = () => {
        setOpenMenu(true);
    }
    const handleClose = () => {
        setOpenMenu(false);
    }
    window.onscroll = () => {
        setOpenMenu(false);
    }
    window.onload = () =>{
        setOpenMenu(false);
    }
    return (
        <header className="header">
            <NavLink
                to="/" 
                className="logo"
            > 
                
                <img className="icon" src='https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644875469/React-jj/lvsgwhadou1vkgmoscqu.png' alt="JJ web development jesus calamani"></img>
                
                Web<span>Development</span>
            </NavLink>
            <div className="header-navbar">
                    <nav 
                        className={openMenu ? 'navbar active animate__animated animate__fadeInRight' : 'navbar'}
                    >
                        <NavLink onClick={ handleClose }  to="/">Inicio <i className="fas fa-home" ></i> </NavLink>
                        <NavLink onClick={ handleClose } to="/sobre_mi">Sobre mi <i className="fas fa-user" ></i> </NavLink>
                        <NavLink onClick={ handleClose } to="/portafolio">Portafolio <i className="fas fa-briefcase" ></i> </NavLink>
                        <NavLink onClick={ handleClose } to="/servicios">Servicios <i className="fab fa-servicestack" ></i> </NavLink>
                        <NavLink onClick={ handleClose } to="/contacto">Contacto <i className="fas fa-address-book" ></i> </NavLink>
                    </nav>
                    
                    <div 
                        className="icons"
                    >
                        <div 
                            className={openMenu ? 'fas fa-times' : 'fas fa-bars menu-btn'}
                            onClick={ openMenu ? handleClose : handleOpen }
                        >
                        </div>
                    </div>
            </div>
            
        </header>
    )
}

export default Header;