import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductPage from './pages/ProductPage/ProductPage';

const routes = [
   {
      path: '/',
      exact: true,
      main: () => <HomePage />,
   },
   {
      path: '/home',
      exact: false,
      main: () => <HomePage />,
   },
   {
      path: '/products',
      exact: true,
      main: () => <ProductPage />,
   },
   {
      path: '/products/add',
      exact: false,
      main: ({ history }) => <ProductActionPage history={history} />,
   },
   {
      path: '/products/:id/edit',
      exact: false,
      main: ({ match, history }) => (
         <ProductActionPage match={match} history={history} />
      ),
   },
   {
      path: '',
      exact: false,
      main: () => <NotFoundPage />,
   },
];

export default routes;
