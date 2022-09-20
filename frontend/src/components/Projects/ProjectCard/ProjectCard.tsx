import { Link } from 'react-router-dom';

/** CSS Module */
import styles from './ProjectCard.module.css';

const ProjectCard = () => {
    return (
        <div>
            <Link to="#">
                <img className={styles['project-card-image']} src="/assets/beaver_dam.jpeg" alt="" />
            </Link>

            <div className={styles['project-card-info']}>
                <span className={styles.title}>Beaver Dam</span>
                <span className={styles.description}>Climate Mitigation</span>
            </div>
        </div>
    );
};

export default ProjectCard;
