import * as React from 'react';
import mapboxgl from 'mapbox-gl';
import { useRef, useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport,setViewport]=useState({
    width: 600, 
    height: 400,
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14
  });
  return (
    <div className='App'>
      {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoibG9naXRoYWQiLCJhIjoiY2xiNm12ZGxzMDJieTNxcDQ0NTBueGV6OSJ9.2YpuFxgN9MSgdleuVC8AhQ"}
      onViewportChange={nextViewport =>setViewport(nextViewport)}
    </div>
  );
}
export default App;