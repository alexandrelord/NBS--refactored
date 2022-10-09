import { useState, useEffect } from 'react';

/** CSS Module */
import styles from './Projects.module.css';

/** Custom Components */
import Map from '../../Map/Map';
import ProjectCard from '../Card/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    return (
        <>
            <div className={styles['map-wrapper']}>
                <Map />
            </div>
            <div className={styles.projects}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </>
    );
};

export default Projects;
