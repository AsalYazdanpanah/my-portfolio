// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// ⬇️ بجای App، Portfolio را ایمپورت کن
import Portfolio from './Portfolio.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ⬇️ و همین‌جا هم Portfolio را رندر کن */}
    <Portfolio />
  </StrictMode>,
);
