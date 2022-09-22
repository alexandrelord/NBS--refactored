import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthUser, setIsAuthenticated } from '../../../features/authSlice';

/** CSS Module */
import styles from './Login.module.css';

/** Google Button */
import GoogleButton from 'react-google-button';

/** Service Functions */
import { api } from '../../../services/api';

const Login = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const { prevPath } = location.state as { prevPath: string };

    const fetchUser = async () => {
        try {
            const response = await api({ url: 'http://localhost:4000/users/auth/user', method: 'GET' });
            if (response.user) {
                dispatch(setIsAuthenticated(true));
                dispatch(setAuthUser(response.user));
                navigate(prevPath);
            }
        } catch (error) {
            console.error(error);
            dispatch(setIsAuthenticated(false));
            dispatch(setAuthUser(null));
            navigate('/login/error');
        }
    };

    const handleLogin = async () => {
        let timer: NodeJS.Timeout | null = null;
        const googleLoginUrl = 'http://localhost:4000/users/google/login';
        const newWindow = window.open(googleLoginUrl, '_blank', 'width=500,height=600');

        if (newWindow) {
            timer = setInterval(() => {
                if (newWindow.closed) {
                    fetchUser();
                    if (timer) clearInterval(timer);
                }
            }, 500);
        }
    };

    return (
        <div className={styles['buttons-container']}>
            <div className={styles['center']}>
                <GoogleButton onClick={handleLogin} />
            </div>
        </div>
    );
};

export default Login;
