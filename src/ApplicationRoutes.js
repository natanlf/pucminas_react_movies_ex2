import { MovieDetail } from "./Views/MovieDetail";
import { Movies } from "./Views/Movies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from './App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Movies />,
            },
            {
                path: "/movie/:movieId",
                element: <MovieDetail />,
            }
        ],
    },
]);

export const ApplicationRoutes = () => (
    <>
        <RouterProvider router={router} />
    </>
)