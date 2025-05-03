import HomePage from "../pages/home.f7";
import UploadPage from "../pages/upload.f7";
import GalleryWrapperPage from "../pages/gallery-wrapper.f7";
import GalleryPage from "../pages/gallery.f7";
import ProfilePage from "../pages/profile.f7";
import LoginPage from "../pages/login.f7";
import RegisterPage from "../pages/register.f7";
import SettingsPage from "../pages/settings.f7";
import AdminPage from "../pages/admin.f7";
import AlbumPage from "../pages/albums.f7";
import AlbumViewerPage from "../pages/album-viewer.f7";
import UserViewerPage from "../pages/user-viewer.f7";
import NotFoundPage from "../pages/notfound.f7";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/upload",
    component: UploadPage,
  },
  {
    path: "/gallery/",
    component: GalleryWrapperPage,
    keepAlive: false,
    tabs: [
      {
        path: "/",
        id: "tab-gallery",
        component: GalleryPage,
        keepAlive: false,
      },
      {
        path: "/albums/",
        id: "tab-albums",
        component: AlbumPage,
        keepAlive: false,
      },
    ],
  },
  {
    path: "/gallery-only",
    component: GalleryPage,
    keepAlive: false,
  },
  {
    path: "/albums",
    id: "tab-albums",
    component: AlbumPage,
  },
  {
    path: "/album/:albumId/",
    component: AlbumViewerPage,
    keepAlive: false,
    tabs: [
      {
        path: "/", // this is important!!
        id: "album-gallery", // match <div id="tab-album">
        component: GalleryPage, // your gallery.f7
        keepAlive: false,
      },
    ],
  },
  {
    path: "/user-uploads/:user/", // Route for user uploads
    component: UserViewerPage, // Use the user-viewer page\
    keepAlive: false,
    tabs: [
      {
        path: "/", // this is important!!
        id: "user-gallery", // match <div id="tab-album">
        component: GalleryPage, // your gallery.f7
        keepAlive: false,
      },
    ],
  },
  {
    path: "/profile/:username",
    component: ProfilePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register", // Corrected path to match the "Register" page
    component: RegisterPage,
  },
  {
    path: "/settings",
    component: SettingsPage,
  },
  {
    path: "/admin",
    component: AdminPage,
  },
  {
    path: "(.*)", // Catch-all route
    component: NotFoundPage, // Replace with your 404 page component
  },
];

export default routes;
