import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom';
import {UserDetailsContextApp} from "./ZobloabContext/UserDetailsContext.tsx"
import { ThemeProvider } from '@/components/ui/theme-provider.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={'962956117113-78q487671iohvej1u68b65o3lbsv23ar.apps.googleusercontent.com'}  >
    {/* ThemeProvider this to toggle to light and dark mode */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UserDetailsContextApp>
          <App />
        </UserDetailsContextApp>
      </ThemeProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)