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
        withCredentials: true,
        body: JSON.stringify(resource.data)
    };
    const response = await fetch(resource.url, options);
    console.log(response);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    } else if (response.status === 201) {
        return response;
    } else {
        return await response.json();
    }
};
