import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ setCreateValue }) => {
    const [position, setPosition] = useState([53, 10]);
    function MarkPoint() {
        const map = useMapEvent("click", (e) => {
            console.log(e.latlng);
            setPosition([e.latlng["lat"], e.latlng["lng"]]);
            setCreateValue((prev) => ({ ...prev, ["latitude"]: e.latlng["lat"] }));
            setCreateValue((prev) => ({ ...prev, ["longitude"]: e.latlng["lng"] }));
        });
        return (
            <Marker position={position}>
                <Popup>{position}</Popup>
            </Marker>
        );
    }

    return (
        <div>
            <MapContainer center={[53, 10]} zoom={10} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MarkPoint />
            </MapContainer>
        </div>
    );
};

export default Map;
