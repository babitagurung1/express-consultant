
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppLayout from "../Applayout/Applayout";
import Home from "../Home/Home";



const Approuter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/header",
          element: <Header />
        },
        {
            path: "/",
            element: <Home />
          },
        
        {
          path: "/footer",
          element: <Footer />
        },
       
        
      ],
    //   errorElement : <NotFound />
    },

    
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Approuter;
