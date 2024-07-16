import { useState } from 'react'

import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider,TonConnectButton } from '@tonconnect/ui-react';
import Card from "./Card"

function Home() {
    const [count, setCount] = useState(0)

    return (
    <div className="main">
        <div className="filter">
            <div className="filter-left">
                YesBloom
            </div>
            <div className="filter-right">
                <img className="filter-right-img" src="filter.png" alt=""/>
                <div className="filter-right-text">
                    Filter
                </div>
            </div>
        </div>
        <div className="card-main">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    )
}

export default Home