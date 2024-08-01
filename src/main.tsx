import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import { BrowserRouter } from 'react-router-dom';
import { setupTelegram } from './service/telegram.tsx'

WebApp.ready();
setupTelegram();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <React.StrictMode>
                <App />
        </React.StrictMode>
    </BrowserRouter>,
)
