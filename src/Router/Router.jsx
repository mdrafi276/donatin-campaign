import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Info from "../Pages/Info/Info";
import Error from "../Pages/ErrorPage/Error";
const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/File.json"),
      },
      {
        path: "/donations",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader:() => fetch("/File.json"),
      },
      {
        path: "/donation/:id",
        element: <Info></Info>,
        loader: () => fetch("/File.json"),
      },
    ],
  },
]);

export default myCreatedRouter;