import NodeGeocoder from 'node-geocoder';

describe('Projects Service', () => {
    describe('geocoder', () => {
        it('should return a lat and lng', async () => {
            const options: NodeGeocoder.Options = {
                provider: 'openstreetmap',
            };
            const query = {
                city: 'Medellin',
                country: 'Colombia',
                limit: 1,
            };
            const data = await NodeGeocoder(options).geocode(query);

            const { latitude, longitude } = data[0];

            expect(latitude).toBeDefined();
            expect(longitude).toBeDefined();
        });
    });
});
