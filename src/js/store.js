import { createStore } from "framework7";
import localforage from "localforage";

const store = createStore({
  state: {
    token: null,
    username: null,
    server: "https://base.petalcat.dev",
    feed: [],
  },
  actions: {
    async loadPersistedState({ state }) {
      state.token = localStorage.getItem("token");
      state.username = localStorage.getItem("username");
      const server = localStorage.getItem("server");
      if (server) state.server = server;

      const feed = await localforage.getItem("feed");
      if (feed) state.feed = feed;
    },
    setAuth({ state }, { token, username }) {
      state.token = token;
      state.username = username;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
    },
    clearAuth({ state }) {
      state.token = null;
      state.username = null;
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    },
    setServer({ state }, server) {
      state.server = server;
      localStorage.setItem("server", server);
    },
    async setFeed({ state }, feed) {
      state.feed = feed;
      await localforage.setItem("feed", feed);
    },
  },
  getters: {
    isLoggedIn({ state }) {
      return !!state.token;
    },
    user({ state }) {
      return state.username;
    },
    server({ state }) {
      return state.server;
    },
    feed({ state }) {
      return state.feed;
    },
  },
});

export default store;
