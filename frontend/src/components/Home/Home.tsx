/** CSS Style */
import './Home.css';

import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <main className="home">
            <NavBar />

            <div className="home-title">
                <h1>Acción Climática Colombia</h1>
                <h2>Soluciones basadas en la Naturaleza</h2>
            </div>
            <div className="home-image-rights">
                <a target="_blank" href="http://www.juanarredondo.com/overview/">
                    Magdalena Basin © Juan Arredondo
                </a>
            </div>
        </main>
    );
};

export default Home;
