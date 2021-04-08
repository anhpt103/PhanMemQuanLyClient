import DefaultLayout from './layouts/DefaultLayout/Loadable';
import Login from './containers/Login/Loadable';

export default [
  {
    name: 'login',
    path: '/login',
    exact: true,
    layout: DefaultLayout,
    component: Login,
  },
];
