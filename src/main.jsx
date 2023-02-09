import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './views/Home/Home'
import Products from './views/Products/Products'
import ProductView from './views/Products/Products'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider,
  useParams 
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Products",
    element: <Products />,
    children: [
      {
        path: "/Products/:id",
        element: <ProductView />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
