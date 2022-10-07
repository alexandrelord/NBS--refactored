import { useState } from 'react';

/** CSS Module */
import styles from './Form.module.css';

/** Interfaces */
import { IProject } from '../../../../types/interfaces';

const CreateForm = () => {
    const [project, setProject] = useState<IProject>({} as IProject);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <section>
            <div className={styles['form-container']}>
                <form onSubmit={handleSubmit}>
                    <div className={styles['form-group']}>
                        <div className={styles.left}>
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

                            <div className={styles['input-wrapper']}>
                                <label htmlFor="files">Imagen</label>
                                <input id="files" onChange={(e) => setProject({ ...project, image: e.target.files })} type="file" required />
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles['input-wrapper']}>
                                <label>Objetivo</label>
                                <input onChange={(e) => setProject({ ...project, objective: e.target.value })} required />
                            </div>
                            <div className={styles['input-wrapper']}>
                                <label>Estado</label>
                                <select onChange={(e) => setProject({ ...project, status: e.target.value })} required>
                                    <option value="">--Selecciona un estado--</option>
                                    <option>No Ejecutado</option>
                                    <option>Ejecutado</option>
                                </select>
                            </div>
                            <div className={styles['input-wrapper']}>
                                <label>Descripción</label>
                                <textarea onChange={(e) => setProject({ ...project, description: e.target.value })} required />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Agregar</button>
                </form>
            </div>
        </section>
    );
};

export default CreateForm;
