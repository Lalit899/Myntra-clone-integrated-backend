import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Home from './routes/Home.jsx'
import Bag from './routes/Bag.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import MyntraStore from './store/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { 
        path: '/',
        element: <Home/>,
      },
      { 
        path: '/bag',
        element: <Bag/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
