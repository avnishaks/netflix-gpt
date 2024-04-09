import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';

export default function Body () {

    const appRoute=createBrowserRouter(
        [
            {
                path: "/",
                element: <Login/>
            },
            {
                path: "/browse",
                element: <Browse/>
            }
        ]
    )

    

    return (
        <div>
           <RouterProvider router={appRoute} />
        </div>
    );
}

