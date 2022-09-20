/** CSS Module */
import LeafletMap from '../../Map/LeafletMap';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <main>
            <div className="map-wrapper">
                <LeafletMap />
            </div>
            <section>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>
        </main>
    );
};

export default Projects;
