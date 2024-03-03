import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-igwgxo1b53ze0ele.us.auth0.com"
      clientId="Z4CN2azdLoGosO1tbux72gx4okGxdqai"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
     <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>

    </Auth0Provider>
  </React.StrictMode>,
)
