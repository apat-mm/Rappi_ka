import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../styles/mapa.css';
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'

let iconLocation = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [30, 30],
    iconAnchor: [15, 70],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

const Mapa = () => {
    return (
        <div>
            <MapContainer center={[3.3294731471610204, -76.638593482354]} zoom={13} scrollWheelZoom={true} className="mapa">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[3.3294731471610204, -76.638593482354]} icon={iconLocation}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Mapa;