import { Link } from 'react-router-dom';

/** CSS Module */
import styles from './ProjectCard.module.css';

const ProjectCard = () => {
    return (
        <Link to="#">
            <div className={styles['card-container']}>
                <div className={styles['card-image']}></div>

                <div className={styles['card-body']}>
                    <span className={styles.title}>Project Title</span>
                    <span className={styles.description}>Project Objective</span>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
