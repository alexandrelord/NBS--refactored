import { Link } from 'react-router-dom';

/** CSS Module */
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">NBS</Link>
            <div className="hamburger-wrapper">
                <svg className="hamburger" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </div>
            <div className="menu">
                <Link to="/projects">Proyectos</Link>
                <Link to="#">Agregar Proyectos</Link>
                <Link to="#">Iniciar Sesión</Link>
            </div>
        </nav>
    );
};

export default NavBar;
