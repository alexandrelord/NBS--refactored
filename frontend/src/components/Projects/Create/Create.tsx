import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../../features/authSlice';
import CreateForm from './Form/Form';

/** CSS Module */
import styles from './Create.module.css';

const ProjectCreate = () => {
    const user = useSelector(selectAuthUser);

    return <section className={styles['create-container']}>{user ? <CreateForm /> : <h1 className={styles['Not-logged-in']}>Debes iniciar sesión para crear un proyecto</h1>}</section>;
};

export default ProjectCreate;
