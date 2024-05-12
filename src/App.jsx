import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import LogIn from "./Pages/Login/Login";
// import Registration from "./Pages/Registration/Registration";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/notFound/NotFound";
import Cart from "./Pages/Cart/Card";
import Korzina from "./Pages/Korzina/Korzina";


function App()
{


  const router = createBrowserRouter([
    // {
    //   path: "/login",
    //   element: <LogIn />,
    // },
    // {
    //   path: "/registration",
    //   element: <Registration />,
    // },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "korzina",
          element: <Korzina />
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "cart/:id",
          element: <Cart />,
        },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
