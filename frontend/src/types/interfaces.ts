export interface IProject {
    name: string;
    city: string;
    entity: string;
    objective: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    image: FileList | null;
    url: string;
}
