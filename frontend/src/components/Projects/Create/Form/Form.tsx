import { useState } from 'react';

import styles from './Form.module.css';

/** Interfaces */
import { IProject } from '../../../../types/interfaces';

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

    const renderPageTwo = () => {
        return (
            <>
                <div className={styles['input-container']}>
                    <label>Nombre del Proyecto</label>
                    <input onChange={(e) => setProject({ ...project, name: e.target.value })} required />
                </div>
                <div className={styles['input-container']}>
                    <label>Ciudad</label>
                    <input onChange={(e) => setProject({ ...project, city: e.target.value })} required />
                </div>
                <div className={styles['input-container']}>
                    <label>Líder del Proyecto</label>
                    <input onChange={(e) => setProject({ ...project, entity: e.target.value })} required />
                </div>
                <div className={styles.dates}>
                    <div className={styles['input-container']}>
                        <label>Fecha de Inicio</label>
                        <input type="date" onChange={(e) => setProject({ ...project, startDate: e.target.value })} required />
                    </div>
                    <div className={styles['input-container']}>
                        <label>Fecha de Finalización</label>
                        <input type="date" onChange={(e) => setProject({ ...project, endDate: e.target.value })} required />
                    </div>
                </div>
                <div className={styles['input-container']}>
                    <label htmlFor="files">Imagen</label>
                    <input id="files" onChange={(e) => setProject({ ...project, image: e.target.files })} type="file" required />
                </div>
            </>
        );
    };

    const renderPageThree = () => {
        return (
            <>
                <div className={styles['input-container']}>
                    <label>Objetivo</label>
                    <input onChange={(e) => setProject({ ...project, objective: e.target.value })} required />
                </div>
                <div className={styles['input-container']}>
                    <label>Estado</label>
                    <select onChange={(e) => setProject({ ...project, status: e.target.value })} required>
                        <option value="">--Selecciona un estado--</option>
                        <option>No Ejecutado</option>
                        <option>Ejecutado</option>
                    </select>
                </div>
                <div className={styles['input-container']}>
                    <label>Descripción</label>
                    <textarea onChange={(e) => setProject({ ...project, description: e.target.value })} required />
                </div>
            </>
        );
    };

    const renderPageFour = () => {
        return (
            <>
                <div className={styles['form-submit-container']}>
                    <h3>Gracias por contribuir a la base de datos de SBN!</h3>
                    <button className={styles['form-submit-button']}>Crear</button>
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
                    <div className={styles['form-body']}>
                        {currentPage === 1 && renderPageOne()}
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
