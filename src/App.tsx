import './App.css'
import Home from './components/Home.tsx';
// import My from './components/My.tsx';
import Detail from './components/Detail.tsx';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import {PersistGate} from "redux-persist/integration/react";
import store,{persistor} from "./store";
import { Provider } from "react-redux";
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import {getQueryVariable} from "./helper/helper";

const queryClient = new QueryClient();

function App() {
    return (
    <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor} >
            <Provider store={store}>
                <TonConnectUIProvider manifestUrl="https://test-long.metaforo.io/tonconnect-manifest.json">
                    {getQueryVariable('tab') == false && <Home />}
                    {getQueryVariable('tab') == 'detail' && <Detail />}
                    {/*<My />*/}
                </TonConnectUIProvider>
            </Provider>
        </PersistGate>
    </QueryClientProvider>
    )
}

export default App