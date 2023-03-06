
import React ,{useEffect}from 'react'
import { MapContainer, TileLayer, Marker,Popup,useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import pic from "./placeholder.png"
const Maps = (props) => {
  const position = [10.1632, 76.6413]
  const icon =L.icon({
    iconUrl:pic,
    iconSize:[38,38]
  })
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);

  return null;
}

  return (
    <MapContainer center={position} zoom={13} style={{width:"100%",height:"100%"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=xxYc51xrf2K5oar3rGp3"
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            A pretty cCSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  )
}

export default Maps