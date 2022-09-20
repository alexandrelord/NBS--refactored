import { MapContainer, TileLayer } from 'react-leaflet';

const LeafletMap = () => {
    return (
        <MapContainer center={[4.5709, -74.2973]} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            {/* <Marker 
      position={[40.8054,-74.0241]}
      animate={true}
      >
      </Marker> */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        </MapContainer>
    );
};

export default LeafletMap;
