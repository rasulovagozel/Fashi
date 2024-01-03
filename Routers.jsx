import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/features/Layout";
import Home from "./src/pages/Home";
import Shop from "./src/pages/Shop";
import Collection from "./src/pages/Collection";
import Blog from "./src/pages/Blog";
import Contact from "./src/pages/Contact";
import Pages from "./src/pages/Pages";

export const routers=createBrowserRouter([
    {
        element:<Layout />,
        children:[
            {
                element:<Home />,
                path:"/"
            },
            {
                element:<Shop />,
                path:"/shop"
            },
            {
                element:<Collection />,
                path:"/collection"
            },
            {
                element:<Blog />,
                path:"/blog"
            },
            {
                element:<Contact />,
                path:"/contact"
            },
            {
                element:<Pages />,
                path:"/pages"
            }
        ]
    }
])