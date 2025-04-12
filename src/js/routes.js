import HomePage from "../pages/home.f7";
import LoginPage from "../pages/login.f7";
import RegisterPage from "../pages/register.f7";
import SettingsPage from "../pages/settings.f7";
import AdminPage from "../pages/admin.f7";
import NotFoundPage from "../pages/notfound.f7";

const routes = [
  {
    path: "/",
    component: HomePage,
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
