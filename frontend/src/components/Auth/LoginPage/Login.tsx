/** CSS Module */
import styles from './Login.module.css';

/** Google Button */
import GoogleButton from "react-google-button";

/** Service Functions */
import {api} from '../../../services/api';

const Login = () => {
    
    const fetchUser = async () => {
        try {
            const response = await api({url: 'http://localhost:4000/users/auth/user', method: 'POST'});
            console.log(response);
            
        } catch (error) {
            console.error(error);
        }
    }
    
    const handleClick = async() => {
        let timer: NodeJS.Timeout | null = null;
        const googleLoginUrl = 'http://localhost:4000/users/login/google';
        const newWindow = window.open(googleLoginUrl, '_blank', 'width=500,height=600');

        if (newWindow) {
            timer = setInterval(() => {
                if (newWindow.closed) {
                    fetchUser();
                    if (timer) clearInterval(timer);
                }
            }, 500);
        }
    }

    return (
        <div className={styles['buttons-container']}>
            <div className={styles['center']}>
                <GoogleButton onClick={handleClick} />
            </div>
        </div>
    );
};

export default Login;