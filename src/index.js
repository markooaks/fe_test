import React from 'react';
import {createRoot} from 'react-dom/client';
import { ProductProvider } from './store/context';
import App from './App';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <ProductProvider>
    <App />
  </ProductProvider>
  </React.StrictMode>
);
