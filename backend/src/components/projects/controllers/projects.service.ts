import NodeGeocoder from 'node-geocoder';
import fs from 'fs';

export const geocoder = async (city: string) => {
    const options: NodeGeocoder.Options = {
        provider: 'openstreetmap',
    };

    const query: NodeGeocoder.Query = {
        address: city,
        country: 'Colombia',
        limit: 1,
        minConfidence: 0.8,
    };

    const data = await NodeGeocoder(options).geocode(query);
    const { latitude, longitude } = data[0];
    return { lat: latitude, lng: longitude };
};

export const base64Encode = (image: string) => {
    const bitmap = fs.readFileSync(image);
    return bitmap.toString('base64');
};
