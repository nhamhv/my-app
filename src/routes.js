import Home from './components/Home';

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/tacos",
    component: () => <h2>Sandwiches</h2>,
    routes: [
      {
        path: "/tacos/bus",
        component:  () => <h2>Sandwiches</h2>,
      },
      {
        path: "/tacos/cart",
        component: () => <h2>Sandwiches</h2>,
      }
    ]
  }
];

export default routes;
