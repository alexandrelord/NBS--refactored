import NodeGeocoder from 'node-geocoder';
import { IProject } from '../../src/components/projects/models/projects_models';
import { geocoder } from '../../src/components/projects/services/projects_services';
// import { findProjects } from '../../src/components/projects/services/projects_services';
// import { StatusError } from '../../src/utils/utils';

describe('Service Functions', () => {
    // describe('findProjects function', () => {
    //     it('should return an array of projects', async () => {
    //         const projects = await findProjects();

    //         expect(projects).toBeInstanceOf(Array);
    //     });
    //     it('should throw an error if no projects are found', async () => {
    //         try {
    //             await findProjects();
    //         } catch (error) {
    //             if (error instanceof StatusError) {
    //                 expect(error.message).toBe('No projects found');
    //                 expect(error.status).toBe(404);
    //             } else {
    //                 throw error;
    //             }
    //         }
    //     });
    // });
    describe('geocoder function', () => {
        it('should return an object with the latitude and longitude of the city', async () => {
            const response = await geocoder('Medellín');
            console.log(response);
            expect(response).toHaveProperty('lat');
            expect(response).toHaveProperty('lng');
        });
    });
});
