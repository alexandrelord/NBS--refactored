interface IResource<T> {
    url: string;
    method: string;
    data?: T;

}

export const api = async <T>(resource: IResource<T>) => {
    const options = {
        method: resource.method,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        credentials: 'include' as RequestCredentials,
        body: JSON.stringify(resource.data)
    };
    const response = await fetch(resource.url, options);
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }
    return await response.json();

};
