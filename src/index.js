import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

library.add(faMapPin);

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
