import { Request, Response } from 'express';
import Project from '../../models/Project';
import { geocoder, base64Encode } from './projectsUtil';
import { saveToImgur } from '../../services/imgur';

export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find({});
        if (!projects.length) res.status(404).json({ message: 'No projects found' });
        res.status(200).json({ projects });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
};

export const createProject = async (req: Request, res: Response) => {
    const { city } = req.body;

    try {
        if (req.file?.path !== undefined) {
            const image = base64Encode(req.file.path);
            const imgurResponse = await saveToImgur(image);
        }

        const coordinates = await geocoder(city);
        const newProject = new Project({ ...req.body, coordinates });
        const project = await newProject.save();
        res.status(201).json({ project });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
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
