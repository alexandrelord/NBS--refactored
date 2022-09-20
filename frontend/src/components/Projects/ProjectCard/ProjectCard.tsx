import { Link } from 'react-router-dom';

/** CSS Module */
import './ProjectCard.css';

const ProjectCard = () => {
    return (
        <div>
            <Link to="#">
                <img className="project-image" src="/beaver_dam.jpeg" alt="" />
            </Link>
            <div className="project-info">
                <span className="title">Beaver Dam</span>
                <span className="description">Climate Mitigation</span>
            </div>
        </div>
    );
};

export default ProjectCard;
