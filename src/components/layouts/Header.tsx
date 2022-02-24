import { faBars, faBriefcase, faCode, faContactBook, faHouse, faSquarePollVertical, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                
                <FontAwesomeIcon className="icon" icon={faCode}/>
                Web<span>Development</span>
            </NavLink>
            <div className="header-navbar">
                    <nav 
                        className={openMenu ? 'navbar active animate__animated animate__fadeInRight' : 'navbar'}
                    >
                        <NavLink onClick={ handleClose }  to="/">Inicio <FontAwesomeIcon className="icon" icon={faHouse}/> </NavLink>
                        <NavLink onClick={ handleClose } to="/sobre_mi">Sobre mi <FontAwesomeIcon className="icon" icon={faUser} /> </NavLink>
                        <NavLink onClick={ handleClose } to="/portafolio">Portafolio <FontAwesomeIcon className="icon" icon={faBriefcase}/> </NavLink>
                        <NavLink onClick={ handleClose } to="/servicios">Servicios <FontAwesomeIcon className="icon" icon={faSquarePollVertical}/> </NavLink>
                        <NavLink onClick={ handleClose } to="/contacto">Contacto <FontAwesomeIcon className="icon" icon={faContactBook}/> </NavLink>
                    </nav>
                    
                    <div 
                        className="icons"
                    >
                        <div 
                            
                            className='menu-btn'
                            onClick={ openMenu ? handleClose : handleOpen }
                        >
                            <FontAwesomeIcon icon={openMenu ? faTimes : faBars} />
                        </div>
                    </div>
            </div>
            
        </header>
    )
}

export default Header;