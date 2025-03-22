// React Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapShow = ({ position }) => {
    // console.log(position[0]);
    return (
        <div>
            <MapContainer center={[position[0], position[1]]} zoom={10} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup>{`Latitude: ${position[0]} | Longitude: ${position[1]}`}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapShow;
