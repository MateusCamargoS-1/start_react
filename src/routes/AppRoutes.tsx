import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Error404 from '../pages/Error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path: '/products',
    element: <Products />,
    errorElement: <Error404 />
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
