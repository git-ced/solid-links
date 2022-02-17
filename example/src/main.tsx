// ANCHOR Solid
import { render } from 'solid-js/web';

// ANCHOR Twind
import { setup } from 'twind';
import 'twind/shim';

// ANCHOR Components
import App from './App';

setup({ darkMode: 'class' });

const root = document.getElementById('app');

if (root) {
  render(() => <App />, root);
}
