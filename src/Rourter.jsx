import React from 'react';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { Coming, Layout, NotFound } from './components';
import { PAGE } from './constants';
import { MainPage, ReservationPage } from './pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: PAGE.ROOT,
          element: <Navigate to={PAGE.MAIN} replace />,
        },
        {
          path: PAGE.MAIN,
          element: <MainPage />,
        },
        {
          path: PAGE.RESERVATION,
          element: <ReservationPage />,
        },
        {
          path: PAGE.COMING,
          element: <Coming />,
        },
      ],
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
