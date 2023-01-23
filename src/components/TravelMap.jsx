import React, { useState } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax, no-unused-vars
import mapboxgl from '!mapbox-gl';
import Map, { NavigationControl, Marker, Popup } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mapData from '../mapData';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYm5pa29tIiwiYSI6ImNsZDhmb3hhNTF1bHUzcHA1bXJ3OTl5dWkifQ.FWqPpoNANuyOnZxHmYJYGw'

const TravelMap = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pin, setPin] = useState(null);

  const handleMapClick = ({ lngLat, leftButton }) => {
    if (!leftButton) return;
  }

  return (
    <main>
      <Map
        style={{width: '100%', height: '80vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          zoom: 1
        }}
        onClick={handleMapClick}
      >
        <div className="navigation-control">
          <NavigationControl />
        </div>
        {mapData.map((pin, index) => (
          <Marker
            key={index}
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
              <div className="justify-content-center d-flex travel-border">
                <img
                  src={pin.image}
                  className="travel-img"
                  alt={`${pin.city}, ${pin.country}`}
                />
                </div>
                <p className="comments-pin mb-0 mt-1">{pin.city}, {pin.country}</p>
                <p className="comments-pin mb-0 mt-2">{pin.comments}</p>
            </div>
          </Popup>
        }
      </Map>
    </main>
  );
};

export default TravelMap;