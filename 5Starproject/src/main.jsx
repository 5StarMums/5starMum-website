import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './App.css'
import Pricing from './pricing/Pricing'
import Waitlist from './waitlist/waitlist'
import Contact from './contact/contact'
import Privacy from './Terms/terms'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'pricing',
    element: <Pricing />
  },
  {
    path: 'waitlist',
    element: <Waitlist />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'terms',
    element: <Privacy />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
