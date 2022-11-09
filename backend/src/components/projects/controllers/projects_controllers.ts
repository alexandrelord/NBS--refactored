import { Request, Response } from 'express';
import Project from '../models/projects_models';
import { geocoder, base64Encode, findProjects, saveProject, saveToImgur } from '../services/projects_services';
import { StatusError } from '../../../utils/utils';

export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = findProjects();
        res.status(200).json({ data: projects });
    } catch (error) {
        if (error instanceof StatusError) {
            res.status(error.status).json({ message: error.message });
        }
        throw error;
    }
};

export const createProject = async (req: Request, res: Response) => {
    const { city } = req.body;

    try {
        if (req.file?.path) {
            const image = base64Encode(req.file.path);
            const response = await saveToImgur(image);
        }

        // get lat lng from city
        const coordinates = await geocoder(city);

        // create project
        const project = { ...req.body, ...coordinates, image: response.data.link };
        const savedProject = await saveProject(project);

        res.status(201).json({ data: savedProject });
    } catch (error) {
        if (error instanceof StatusError) {
            res.status(error.status).json({ message: error.message });
        }
        throw error;
    }
};

export const deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const project = await Project.findByIdAndDelete(id);
        if (!project) res.status(404).json({ message: 'Project not found' });
        res.status(200).json({ project });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
};
