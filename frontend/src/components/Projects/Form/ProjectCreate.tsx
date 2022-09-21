/** CSS Module */
import styles from './ProjectCreate.module.css';

const ProjectCreate = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <main className={styles['create-form-wrapper']}>
            <form className={styles['create-form']} onSubmit={handleSubmit}>
                <div className={styles['create-input-wrapper']}>
                    <input className={styles['create-input']} type="text" placeholder="Nombre del Proyecto" required />
                </div>
                <div className={styles['create-input-wrapper']}>
                    <input className={styles['create-input']} type="text" placeholder="Ciudad" required />
                </div>
                <div className={styles['create-input-wrapper']}>
                    <input className={styles['create-input']} type="text" placeholder="Entidades" required />
                </div>
                <div className={styles['create-input-wrapper']}>
                    <input className={styles['create-input']} type="text" placeholder="Ciudad" required />
                </div>
                <div className={styles['create-input-wrapper']}>
                    <input className={styles['create-input']} type="text" placeholder="Objetivo" required />
                </div>
                <div className={styles['create-input-wrapper']}>
                    <input className={styles['create-input']} type="text" placeholder="Descripción" required />
                </div>
                <div className={styles['create-input-wrapper']}>
                    <input className={styles['create-input']} type="text" placeholder="Duración" required />
                </div>
                <div className={styles['create-input-wrapper']}>
                    <select name="" id="">
                        <option selected disabled>
                            Selecciona una categoría
                        </option>
                        <option>No Ejecutado</option>
                        <option>Ejecutado</option>
                    </select>
                </div>
                <div className={styles['file-input-wrapper']}>
                    <input type="file" />
                </div>
                <button className={styles['create-form-button']} type="submit">
                    Agregar
                </button>
            </form>
        </main>
    );
};

export default ProjectCreate;
