import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/index';
import Home from '../pages/Home';
const KiwiRoutes = () => {

    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },  
            ],
        },
     
        
    ]);

    return <RouterProvider router={router} />;
};

export default KiwiRoutes;