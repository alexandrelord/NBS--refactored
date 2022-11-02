/** CSS Module */
import styles from './Home.module.css';

import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <div className={styles.home}>
            <NavBar />

            <div className={styles['home-title']}>
                <h1>Acción Climática Colombia</h1>
                <h2>Soluciones basadas en la Naturaleza</h2>
            </div>
            <div className={styles['home-image-rights']}>
                <a target="_blank" href="http://www.juanarredondo.com/overview/">
                    Magdalena Basin © Juan Arredondo
                </a>
            </div>
        </div>
    );
};

export default Home;
