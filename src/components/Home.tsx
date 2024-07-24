import Card from "./Card"
import WebApp from '@twa-dev/sdk'

function Home() {
    

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
        <div className="card">
            <div>
                {WebApp.initData}
            </div>
            <br/>

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