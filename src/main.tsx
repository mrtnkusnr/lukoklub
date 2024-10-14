import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import TrainingsPage from "./components/TrainingsPage.tsx";
import ApplicationPage from "./components/ApplicationPage.tsx";
import GalleryPage from "./components/GalleryPage.tsx";
import NotFoundPage from "./components/NotFound.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./components/ContactPage.tsx";
import Layout from "./components/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/treningy",
        element: <TrainingsPage />,
      },
      {
        path: "/prihlaska",
        element: <ApplicationPage />,
      },
      {
        path: "/galeria",
        element: <GalleryPage />,
      },
      {
        path: "/kontakt",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
