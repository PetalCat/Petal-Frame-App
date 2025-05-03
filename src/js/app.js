import $ from "dom7";
import Framework7 from "framework7/bundle";
import { isMobile } from "./utils.js";
import routes from "./routes.js";
import "framework7/css/bundle";
import "framework7-icons";
import App from "../app.f7";
import store from "./store.js";
import "../css/app.css";
import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });

const app = new Framework7({
  name: "Petal Frame",
  theme: "auto",
  colors: {
    primary: "#1356D3",
  },
  el: "#app",
  component: App,
  store: store,
  routes: routes,
  view: {
    xhrCache: false,
    stackPages: false,
    reloadAll: true,
  },
  router: {
    ignoreCache: true,
  },
  on: {
    init() {
      console.log("Running on", isMobile() ? "mobile" : "web");

      // ✅ Delay to allow initial load before checking
      setTimeout(async () => {
        try {
          const res = await fetch("/version.txt", { cache: "no-store" });
          const serverVersion = await res.text();
          const localVersion = localStorage.getItem("pf_version");

          if (localVersion !== serverVersion) {
            console.log("[PWA] New version detected – reloading");
            localStorage.setItem("pf_version", serverVersion);
            window.location.reload(true);
          }
        } catch (err) {
          console.warn("[PWA] Failed to check version.txt", err);
        }
      }, 10000);
    },
  },
});
