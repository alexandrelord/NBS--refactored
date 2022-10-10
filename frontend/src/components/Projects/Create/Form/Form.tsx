import { useState } from 'react';

import { api } from '../../../../services/api';

import styles from './Form.module.css';

/** Interfaces */
import { IProject } from '../../../../types/interfaces';
import { imageOverlay } from 'leaflet';

const Form = () => {
    const [project, setProject] = useState<IProject>({} as IProject);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = [1, 2, 3, 4, 5];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // const response = api({ url: 'http://localhost:4000/projects/create', method: 'POST', data: project });
            const response = api({ url: 'https://api.imgur.com/3/image', method: 'POST', data: project.image });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
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

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target; // FileList
        const maxUploadFiles = 5;

        if (files && files.length > maxUploadFiles) {
            // Check if there are more than 5 files
            alert(`Solo puedes subir ${maxUploadFiles} imágenes`); // Alert the user
            return;
        }

        if (files) {
            const filesArray = Array.from(files).map((file) => URL.createObjectURL(file)); // create a local URL for each file
            const arrayBase64: string[] = [];

            for (let i = 0; i < filesArray.length; i++) {
                const reader = new FileReader(); // create a file reader, FileReader is a built-in JS object
                reader.readAsDataURL(files[i]); // read the binary data and encode it as base64 dataURL. - a base64 dataURL is a string containing a representation of the file's data encoded as a base64 string.
                reader.onload = () => {
                    const base64 = reader.result?.toString().split(',')[1]; // remove the Data-URL declaration (data:*/*;base64,) preceding the base64-encoded data, and retrieve only the base64 encoded string
                    if (base64) {
                        arrayBase64.push(base64);
                    }
                };
            }
            setProject({ ...project, image: arrayBase64 });
        }
    };

    const renderPageFour = () => {
        return (
            <>
                <div className={styles['input-container']}>
                    <div className={styles['input-container']}>
                        <label htmlFor="files">Imagen</label>
                        <input id="files" multiple onChange={handleImage} type="file" required />
                    </div>
                    <div className={styles['input-container']}>
                        <label htmlFor="files">Link</label>
                        <input id="files" onChange={(e) => setProject({ ...project, url: e.target.value })} type="url" />
                    </div>
                </div>
            </>
        );
    };

    const renderPageFive = () => {
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
                            0{currentPage} de 0{pages.length}
                        </p>
                    </div>
                    <div className={styles['form-body']}>
                        {currentPage === 1 && renderPageOne()}
                        {currentPage === 2 && renderPageTwo()}
                        {currentPage === 3 && renderPageThree()}
                        {currentPage === 4 && renderPageFour()}
                        {currentPage === 5 && renderPageFive()}
                    </div>
                </form>
                <div className={styles['form-image']}>
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

export default Form;
