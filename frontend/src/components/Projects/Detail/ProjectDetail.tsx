import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

/** CSS Style */
import './ProjectDetail.css';

const ProjectDetail = () => {
    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const response = await api({ url: `/api/project/`, method: 'GET' });
                response.project && setProject(response.project);
            } catch (error) {
                // error instanceof Error && setErrorMsg(error.message);
                console.error(error);
            }
        })();
    }, []);

    return (
        <main>
            <div className="project-main">
                <p className="project-num">Proyecto 01</p>
                <div className="project-title">
                    <h1>
                        <span className="span-one">humedales</span>
                        <span className="span-two">de la</span>
                        <span className="span-three">Mojana</span>
                    </h1>
                </div>
                <p className="project-description">
                    Busca reducir la vulnerabilidad de las comunidades y de los humedales en la región de la Depresión Momposina a los riesgos de inundación y de sequía asociados con el cambio
                    climático y la variabilidad climática, a través del fortalecimiento del Sistema de Información Hidrometeorológico SIA, la recuperación de los humedales, el aumento en la capacidad
                    de adaptación de las comunidades locales y la incorporación de la gestión del riesgo y las medidas de adaptación en los procesos de planeación y toma de decisiones.
                </p>
                <img src="/assets/tree.jpeg" alt="" />
            </div>
        </main>
    );
};

export default ProjectDetail;
