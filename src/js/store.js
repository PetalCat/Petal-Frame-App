import { createStore } from "framework7";
import localforage from "localforage";

const store = createStore({
  state: {
    token: null,
    username: null,
    server: "https://base.petalcat.dev",
    userCache: {},
    feed: [], // Initialize feed as an empty array for caching
    pendingUploads: [], // Add this
  },
  actions: {
    async loadPersistedState({ state }) {
      state.token = localStorage.getItem("token");
      state.username = localStorage.getItem("username");
      const server = localStorage.getItem("server");
      if (server) state.server = server;
      const userCache = await localforage.getItem("userCache");
      if (userCache) state.userCache = userCache;
      // Load persisted feed if available
      const persistedFeed = await localforage.getItem("feed");
      if (persistedFeed) state.feed = persistedFeed;
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
    async cacheUserData({ state }, user) {
      if (!user || !user.username) return;
      const key = user.username.toLowerCase();
      state.userCache[key] = {
        ...user,
        lastUpdated: Date.now(),
      };
      await localforage.setItem("userCache", state.userCache);
    },
    // New action to set and persist the feed data for caching
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
  },
});

export function getCachedUser(username) {
  if (!username) return null;
  const key = username.toLowerCase();
  return store.state.userCache[key] || null;
}

export default store;
