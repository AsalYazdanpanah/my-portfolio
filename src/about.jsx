import React from 'react'
import ReactDOM from 'react-dom/client'

// همان استایل‌های عمومی‌ات (اگر index.css داری همونو ایمپورت کن)
import './index.css'

// اگر بک‌گراند یا استایل تیره می‌خواهی، می‌تونی همون کلاس‌های Tailwind/کد خودت رو اینجا هم اعمال کنی
import AboutPage from './AboutPage.jsx'

ReactDOM.createRoot(document.getElementById('about-root')).render(
  <React.StrictMode>
    <AboutPage />
  </React.StrictMode>
)
