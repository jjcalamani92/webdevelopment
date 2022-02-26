import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBriefcase,
  faCode,
  faContactBook,
  faHouse,
  faMoon,
  faSquarePollVertical,
  faSun,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, openMenu } from "../../context/actions/Menu";
import { themeDark, themeLight } from '../../context/actions/Theme';

interface State {
  Menu: any
  Theme: any
}

const Header = () => {
  const { menu } = useSelector( (state: State) => state.Menu );
  const { theme } = useSelector( (state: State) => state.Theme );
  const dispatch = useDispatch();

  const handleDark = () => {
    dispatch( themeDark() );
  }
  const handleLight = () => {
    dispatch( themeLight() );
  }

  if (theme) {
    document.body.classList.add('active');
    console.log('light theme');
    
  } else{
    document.body.classList.remove('active');
    console.log('light theme');
  }

  const handleOpen = () => {
    dispatch( openMenu() );
  };
  const handleClose = () => {
    dispatch( closeMenu() );
  };

  useEffect(() => {
    const scrollListener = () => {
      dispatch( closeMenu() );
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [dispatch]);
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <FontAwesomeIcon className="icon" icon={faCode} />
        Web<span>Development</span>
      </NavLink>
      <div className="header-navbar">
        <nav
          className={
            menu
              ? "navbar active"
              : "navbar"
          }
        >
          <NavLink onClick={handleClose} to="/">
            Inicio <FontAwesomeIcon className="icon" icon={faHouse} />{" "}
          </NavLink>
          <NavLink onClick={handleClose} to="/sobre_mi">
            Sobre mi <FontAwesomeIcon className="icon" icon={faUser} />{" "}
          </NavLink>
          <NavLink onClick={handleClose} to="/portafolio">
            Portafolio <FontAwesomeIcon className="icon" icon={faBriefcase} />{" "}
          </NavLink>
          <NavLink onClick={handleClose} to="/servicios">
            Servicios{" "}
            <FontAwesomeIcon className="icon" icon={faSquarePollVertical} />{" "}
          </NavLink>
          <NavLink onClick={handleClose} to="/blogs">
            blogs{" "}
            <FontAwesomeIcon className="icon" icon={faBlogger} />{" "}
          </NavLink>

          <NavLink onClick={handleClose} to="/contacto">
            Contacto <FontAwesomeIcon className="icon" icon={faContactBook} />{" "}
          </NavLink>
        </nav>

        <div className="icons">

          {/* <div
            onClick={theme ? handleDark : handleLight}
          >
            <FontAwesomeIcon icon={theme ? faSun : faMoon} />
          </div> */}
          <div
            onClick={menu ? handleClose : handleOpen}
          >
            <FontAwesomeIcon icon={menu ? faTimes : faBars} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
