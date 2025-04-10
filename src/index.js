import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Body from './components/Body';
import Offer from './components/Offer';
import Menus from './components/Menus';
import './index.css';
import MindRestaurants from './components/MindRestaurants';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Body />,
      },
      {
        path: 'offer',
        element: <Offer />,
      },
      {
        path: 'restaurant/:resId',
        element: <Menus />,
      },
      {
        path:"/MindRestaurant/:resId",
        element: <MindRestaurants />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
