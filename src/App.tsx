import './App.css'
import Home from './components/Home.tsx';
// import My from './components/My.tsx';
// import Detail from './components/Detail.tsx';

import { TonConnectUIProvider } from '@tonconnect/ui-react';


function App() {

    return (
    <TonConnectUIProvider manifestUrl="https://test-long.metaforo.io/tonconnect-manifest.json">
        <Home />
        {/*<Detail />*/}
        {/*<My />*/}
    </TonConnectUIProvider>
    )
}

export default App