import $ from "dom7";
import Framework7 from "framework7/bundle";
import { isMobile } from "./utils.js";
import routes from "./routes.js";
import "framework7/css/bundle";
import "framework7-icons";
import App from "../app.f7";
import store from "./store.js";
import "../css/app.css";

var app = new Framework7({
  name: "Petal Frame", // App name
  theme: "auto", // Automatic theme detection
  colors: {
    primary: "#1356D3", // ✅ standard 6-digit hex
  },

  el: "#app", // App root element
  component: App, // App main component
  // App store
  store: store,
  // App routes
  routes: routes,
  on: {
    init: function () {
      if (isMobile()) {
        console.log("Running on mobile");
      } else {
        console.log("Running on web");
      }
    },
  },
});
