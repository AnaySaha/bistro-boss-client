import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './Routes/Routes';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";

import {  HelmetProvider } from 'react-helmet-async';
import AuthProviders from './firebase/providers/AuthProviders';

  
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
 <AuthProviders>
 <HelmetProvider>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
   </HelmetProvider>
 </AuthProviders>
  </React.StrictMode>,
);