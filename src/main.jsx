import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

import Home from './views/Home';
import About from './views/About';
import ContactUs from './views/ContactUs';
import BillerPartners from './views/BillerPartners';
import UnderConstruction from './views/UnderConstruction';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/contact-us', element: <ContactUs />},
  {path: '/biller-partners', element: <BillerPartners />},
  {path: '/under-construction', element: <UnderConstruction />},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
