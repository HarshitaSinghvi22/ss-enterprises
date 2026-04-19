import {
  RouterProvider,
  createBrowserHistory,
  createRouter,
} from "@tanstack/react-router";
import { createRootRoute, createRoute } from "@tanstack/react-router";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PhitaPage from "./pages/PhitaPage";
import ProductsPage from "./pages/ProductsPage";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const clientsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/clients",
  component: ClientsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const phitaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/phita",
  component: PhitaPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productsRoute,
  clientsRoute,
  contactRoute,
  phitaRoute,
]);

const history = createBrowserHistory();
const router = createRouter({ routeTree, history });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
