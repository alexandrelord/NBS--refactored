import NodeGeocoder from 'node-geocoder';
import fs from 'fs';
import { StatusError } from '../../../utils/utils';
import Project, { IProject } from '../models/projects_models';
import { RequestInfo, RequestInit } from 'node-fetch';
const fetch = (url: RequestInfo, init?: RequestInit) => import('node-fetch').then(({ default: fetch }) => fetch(url, init));

/**
 * @param {string} city
 * @returns {object} latitude and longitude of the city
 *
 * @description This function takes a city name and returns the latitude and longitude of the city
 */

export const geocoder = async (city: string): Promise<object> => {
    const options: NodeGeocoder.Options = {
        provider: 'openstreetmap',
    };

    const query = {
        city: city,
        country: 'Colombia',
        limit: 1,
    };

    const data = await NodeGeocoder(options).geocode(query);

    return { lat: data[0].latitude, lng: data[0].longitude };
};

// ----------------------------------------------

/**
 * @returns {array} projects
 *
 * @description This function returns all the projects in the database
 */

export const findProjects = async (): Promise<IProject[]> => {
    const projects = await Project.find({});

    if (!projects.length) {
        throw new StatusError('No projects found', 404);
    }

    return projects;
};

// ----------------------------------------------

/**
 * @param {object} project
 * @returns {object} savedProject
 *
 * @description This function saves a project in the database
 */

export const saveProject = async (project: IProject): Promise<IProject> => {
    const newProject = new Project(project);
    const savedProject = await newProject.save();

    return savedProject;
};

// ----------------------------------------------

/**
 * @param {string} path
 * @returns {string} base64
 *
 * @description This function takes a path and returns the base64 string of the image
 */

export const base64Encode = (path: string): string => {
    const bitmap = fs.readFileSync(path);
    return bitmap.toString('base64');
};

// ----------------------------------------------

/**
 * @param {string} image
 * @returns {string} url
 *
 * @description This function takes a path and returns the url of the image
 * in the imgur platform
 */

// export const saveToImgur = async (image: string): Promise<string> => {
//     const options = {
//         method: 'POST',
//         url: 'https://api.imgur.com/3/image',
//         headers: {
//             Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
//         },
//         formData: {
//             image: '',
//             type: 'base64',
//         },
//     };

//     options.formData.image = image;
//     const response = await fetch(options.url, options);
//     const data = await response.json();
//     return data;
// };
