import Map from '../../Map/Map';

import styles from './Detail.module.css';

const Detail = () => {
    return (
        <div className={styles['detail-container']}>
            <div className={styles['left-container']}>
                <div className={styles.header}>
                    <p className={styles['project-num']}>proyecto 01</p>
                </div>
                <div className={styles['project-title']}>
                    <h1>
                        <span className={styles['span-one']}>humedales </span>
                        <span className={styles['span-two']}>de la </span>
                        <span className={styles['span-three']}>Mojana</span>
                    </h1>
                    <div className={styles['project-objective']}>
                        <h2>Adaptación al cambio climático</h2>
                    </div>
                </div>
                <div className={styles['project-body']}>
                    <p className={styles['project-description']}>
                        Busca reducir la vulnerabilidad de las comunidades y de los humedales en la región de la Depresión Momposina a los riesgos de inundación y de sequía asociados con el cambio
                        climático y la variabilidad climática, a través del fortalecimiento de la capacidad de adaptación de las comunidades y de los humedales.
                    </p>
                </div>
            </div>
            <div className={styles['middle-container']}>
                <div className={styles['project-images']}>
                    <div className={styles['image']}></div>
                    <div className={styles['image']}></div>
                    <div className={styles['image']}></div>
                    <div className={styles['image']}></div>
                    <div className={styles['image']}></div>
                </div>
            </div>
            <div className={styles['right-container']}>
                <div className={styles['map-container']}>
                    <Map />
                </div>
                <div className={styles['project-info']}>
                    <p>
                        <span className={styles['info-title']}>Ubicación:</span> <span className={styles['info-text']}>Mojana, Cesar</span>
                    </p>
                    <p>
                        <span className={styles['span-one']}>Fecha de inicio:</span> 2019
                    </p>
                    <p>
                        <span className={styles['span-one']}>Fecha de finalización:</span> 2021
                    </p>
                    <p>
                        <span className={styles['span-one']}>Estado:</span> En ejecución
                    </p>
                    <p>
                        <span className={styles['span-one']}>Financiación:</span> $ 1.00
                    </p>
                    <p>
                        <span className={styles['span-one']}>Entidad:</span> Corporación Autónoma Regional del Cesar (CAR)
                    </p>
                    <p>
                        <span className={styles['span-one']}>Contacto:</span> <span className={styles['info-text']}>Juan Perez</span>
                    </p>
                    <p>
                        <span className={styles['span-one']}>Correo:</span> <span className={styles['info-text']}>JuanP@gmail.com</span>
                    </p>
                </div>
                <div className={styles['similar']}>
                    {/* <h2>Proyectos similares</h2> */}
                    {/* <div className={styles['similar-projects']}></div> */}
                </div>
                <div className={styles['footer']}>
                    <p>last edited: 1900-01-01</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;
