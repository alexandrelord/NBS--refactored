import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthUser } from '../../features/authSlice';
import { setAuthUser, setIsAuthenticated } from '../../features/authSlice';
import { api } from '../../services/api';

/** CSS Module */
import styles from './NavBar.module.css';

const NavBar = () => {
    const user = useSelector(selectAuthUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const handleLogout = async () => {
        try {
            const response = await api({ url: 'http://localhost:4000/users/google/logout', method: 'GET' });

            if (response.logout === 'success') {
                dispatch(setIsAuthenticated(false));
                dispatch(setAuthUser(null));
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <nav className={pathname === '/' ? styles['home-page'] : styles['other-pages']}>
                <Link to="/">SBN</Link>
                <div className={styles['hamburger-wrapper']}>
                    <svg className={styles.hamburger} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                <div className={styles.menu}>
                    <Link to="/projects">Proyectos</Link>
                    <Link to="/projects/create">Crear Proyecto</Link>
                    {!user ? (
                        <Link to="/login" state={{ prevPath: pathname }}>
                            Iniciar Sesión
                        </Link>
                    ) : (
                        <Link to="#" onClick={handleLogout}>
                            {' '}
                            Cerrar Sesión{' '}
                        </Link>
                    )}
                </div>
            </nav>
        </>
    );
};

export default NavBar;
