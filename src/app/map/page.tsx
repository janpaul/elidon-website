"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    mapkit: any;
  }
}

// const mapkitToken = process.env.NEXT_PUBLIC_MAPKIT_TOKEN ?? "";
const mapkitToken = "";

const MapPage = () => {
  useEffect(() => {
    if (window) {
      const { mapkit } = window;
      if (!mapkit) {
        return;
      }
      mapkit.init({ authorizationCallback: () => {}, language: "en" });
      const map = new mapkit.Map("mapContainer", {
        center: new mapkit.Coordinate(37.334883, -122.008977),
        mapType: mapkit.Map.MapTypes.Standard,
      });
      console.log({ map });
    }
  }, []);
  return (
    <>
      <script
        src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js"
        crossOrigin="anonymous"
        async
        data-callback="initMapKit"
        data-libraries="services,full-map,geojson,overlays,annotations,user-location"
        data-token={mapkitToken}
      />
      <div id="mapContainer" style={{ width: 512, height: 512 }}></div>
    </>
  );
};

export default MapPage;
