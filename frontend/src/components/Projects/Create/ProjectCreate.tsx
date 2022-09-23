import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../../features/authSlice';
import CreateForm from '../Form/CreateForm';

const ProjectCreate = () => {
    const user = useSelector(selectAuthUser);

    return (
        <div>
            {user ? <CreateForm /> : <h1>Debes iniciar sesión para crear un proyecto</h1>}
        </div>
    )
};

export default ProjectCreate;
