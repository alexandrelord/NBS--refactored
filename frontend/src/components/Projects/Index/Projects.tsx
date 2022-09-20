/** CSS Module */
import styles from './Projects.module.css';

/** Custom Components */
import LeafletMap from '../../Map/LeafletMap';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    return (
        <>
            <div className={styles['map-wrapper']}>
                <LeafletMap />
            </div>
            <div className={styles.projects}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </>
    );
};

export default Projects;
