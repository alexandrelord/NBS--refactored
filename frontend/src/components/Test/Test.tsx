import { useState } from 'react';

import styles from './Test.module.css';

/** Interfaces */
import { IProject } from '../../types/interfaces';

const renderPageOne = () => {
    return (
        <div className={styles['form-title']}>
            <h1>
                <span className={styles['span-one']}>Crear</span>
                <span className={styles['span-two']}>Proyecto</span>
            </h1>
        </div>
    );
};

const renderPageThree = () => {
    return (
        <div className={styles['form-title']}>
            <h1>
                <span className={styles['span-one']}>Page</span>
                <span className={styles['span-two']}>Three</span>
            </h1>
        </div>
    );
};

const renderPageFour = () => {
    return (
        <div className={styles['form-title']}>
            <h1>
                <span className={styles['span-one']}>Page</span>
                <span className={styles['span-two']}>Four</span>
            </h1>
        </div>
    );
};

const Test = () => {
    const [project, setProject] = useState<IProject>({} as IProject);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = [1, 2, 3, 4];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(project);
    };

    const handlePageNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { value } = e.currentTarget;
        if (value === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        if (value === 'next' && currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const renderPageTwo = () => {
        return (
            <>
                <div className={styles['input-wrapper']}>
                    <label>Nombre del Proyecto</label>
                    <input onChange={(e) => setProject({ ...project, name: e.target.value })} required />
                </div>
                <div className={styles['input-wrapper']}>
                    <label>Ciudad</label>
                    <input onChange={(e) => setProject({ ...project, city: e.target.value })} required />
                </div>
                <div className={styles['input-wrapper']}>
                    <label>Líder del Proyecto</label>
                    <input onChange={(e) => setProject({ ...project, entity: e.target.value })} required />
                </div>
                <div className={styles.dates}>
                    <div className={styles['input-wrapper']}>
                        <label>Fecha de Inicio</label>
                        <input type="date" onChange={(e) => setProject({ ...project, startDate: e.target.value })} required />
                    </div>
                    <div className={styles['input-wrapper']}>
                        <label>Fecha de Finalización</label>
                        <input type="date" onChange={(e) => setProject({ ...project, endDate: e.target.value })} required />
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className={styles['create-container']}>
            <div className={styles['form-container']}>
                <form className={styles['form']} onSubmit={handleSubmit}>
                    <div className={styles['form-header']}>
                        <p>
                            página 0{currentPage} de 0{pages[3]}
                        </p>
                    </div>
                    {currentPage === 1 && renderPageOne()}
                    <div className={styles['form-body']}>
                        {currentPage === 2 && renderPageTwo()}
                        {currentPage === 3 && renderPageThree()}
                        {currentPage === 4 && renderPageFour()}
                    </div>
                </form>
                <div className={styles['image']}>
                    <div className={styles['button-container']}>
                        <button className={styles.up} value="prev" onClick={handlePageNumber}>
                            <i className={styles['arrow']}></i>
                        </button>
                        <button className={styles.down} value="next" onClick={handlePageNumber}>
                            <i className={styles['arrow']}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
