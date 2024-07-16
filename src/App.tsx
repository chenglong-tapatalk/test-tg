import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.tsx';

import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider,TonConnectButton } from '@tonconnect/ui-react';


function App() {

    return (
    <TonConnectUIProvider manifestUrl="https://test-long.metaforo.io/tonconnect-manifest.json">
        <Home />
    </TonConnectUIProvider>
    )
}

export default App