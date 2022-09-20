import { RequestInfo, RequestInit } from 'node-fetch';
const fetch = (url: RequestInfo, init?: RequestInit) => import('node-fetch').then(({ default: fetch }) => fetch(url, init));

const options = {
    method: 'POST',
    url: 'https://api.imgur.com/3/image',
    headers: {
        Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`
    },
    formData: {
        image: '',
        type: 'base64'
    }
};

export const saveToImgur = async (image: string) => {
    options.formData.image = image;
    const response = await fetch(options.url, options);
    const data = await response.json();
    return data;
};
