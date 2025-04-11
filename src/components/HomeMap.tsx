import { MapContainer, GeoJSON } from "react-leaflet";
import africa from "../africa.json";
import { GeoJsonObject } from "geojson";
import "leaflet/dist/leaflet.css";
import CountryInfo from "./CountryInfo";

import "../App.css";
import { useAfricaMap } from "@/Context/MapContext";

const HomeMap = () => {
  const { center, FitMapBounds, getCountryStyle, onEachFeature } =
    useAfricaMap();
  return (
    <div className=" grid grid-cols-2   w-[951px]   h-[500px] py-[2%] ">
      <div className="">
        <CountryInfo />
      </div>


      <MapContainer
        center={center}
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
        className=" "
        zoomControl={false}
        attributionControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        zoom={8} 
      >
        <FitMapBounds />
        <GeoJSON
          data={africa as GeoJsonObject}
          style={getCountryStyle}
          onEachFeature={onEachFeature}
         
        />
      </MapContainer>
    </div>
  );
};

export default HomeMap;
