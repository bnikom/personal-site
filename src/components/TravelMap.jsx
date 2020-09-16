import React, { useState } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import uuidv1 from 'uuid/v1';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mapData from '../mapData';

const INITIAL_VIEWPORT = {
  latitude: 37.61859557982719,
  longitude: -2.0274437500523406,
  zoom: 1,
}

const TravelMap = () => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const [showPopup, setShowPopup] = useState(false);
  const [pin, setPin] = useState(null);

  const handleMapClick = ({ lngLat, leftButton }) => {
    if (!leftButton) return;
  }

  return (
    <main>
      <ReactMapGL
        width='100%'
        // height="calc(100vh - 64px)"
        height="80vh"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiYm5pa29tIiwiYSI6ImNrMHNxbjgwNjAxN2MzbnBlZXNnZ3Rtc2gifQ.PQbU0Gc9uGPX90rMxbJcaw"
        onViewportChange={({ width, height, ...etc}) => setViewport(etc)}
        onClick={handleMapClick}
        /* scrollZoom={!mobileSize} */
        {...viewport}
      >
        <div className="navigation-control">
          <NavigationControl
            onViewportChange={viewport => setViewport(viewport)}
          />
        </div>
        {mapData.map(pin => (
          <Marker
            key={uuidv1()}
            latitude={pin.latitude}
            longitude={pin.longitude}
            offsetLeft={-10}
            offsetTop={-30}
          >
            <FontAwesomeIcon
              icon="map-pin"
              size={"2x"}
              color={"red"}
              onClick={() => { setPin(pin); setShowPopup(true)}}
              style={{ cursor: 'pointer' }}
            />
            
          </Marker>
        ))} 
        {showPopup &&
          <Popup
            latitude={pin.latitude}
            longitude={pin.longitude}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setShowPopup(false)}
            anchor="top"
            >
            <div>
              <div className="justify-content-center d-flex">
                <img
                  src={pin.image}
                  className="travel-img"
                  alt={`${pin.city}, ${pin.country}`}
                />
                </div>
                <p className="mb-0 mt-1">{pin.city}, {pin.country}</p>
                <p className="comments-pin mb-0">{pin.comments}</p>
            </div>
          </Popup>
        }
      </ReactMapGL>
    </main>
  );
};

export default TravelMap;