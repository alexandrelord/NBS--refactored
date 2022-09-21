import { useState, useEffect } from 'react';

/** CSS Module */
import styles from './Projects.module.css';

/** Custom Components */
import LeafletMap from '../../Map/LeafletMap';
import ProjectCard from '../Card/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

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
