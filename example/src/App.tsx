// ANCHOR Solid
import {
  JSX,
  lazy,
} from 'solid-js';

// ANCHOR Router
import {
  createRouterTree,
  Router,
} from 'solid-tiny-router';

const ROUTES = createRouterTree([
  {
    path: '/',
    component: lazy(() => import('./pages')),
  },
]);

export default function App(): JSX.Element {
  return <Router routes={ROUTES} />;
}
