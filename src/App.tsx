import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home.tsx';
import My from './views/My.tsx';
import Detail from './views/Detail.tsx';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import {PersistGate} from "redux-persist/integration/react";
import store,{persistor} from "./store";
import { Provider } from "react-redux";
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
    <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor} >
            <Provider store={store}>
                <TonConnectUIProvider manifestUrl="https://test-long.metaforo.io/tonconnect-manifest.json">
                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/detail/:id" element={<Detail />} />
                            <Route path="/my" element={<My />} />
                    </Routes>
                </TonConnectUIProvider>
            </Provider>
        </PersistGate>
    </QueryClientProvider>
    )
}

export default App