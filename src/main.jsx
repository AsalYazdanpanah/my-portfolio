import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// چون Portfolio کنار main.jsx داخل src است:
import Portfolio from './Portfolio.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);

