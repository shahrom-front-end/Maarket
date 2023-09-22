import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./Layout/Layout";
import Basket from "./pages/Basket/Basket";
import Korzina from "./pages/Korzina/Korzina";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path:"Basket/:id",
        element: <Basket/>,
      },
      {
        path:"/Korzina",
        element: <Korzina/>,
      },
    ],
  },

])
function App (){
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
};

export default App;
