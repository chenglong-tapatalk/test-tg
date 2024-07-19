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
            <button onClick={() => WebApp.showAlert(WebApp.backgroundColor)}>
                显示警告0
            </button>
            <button onClick={() => WebApp.showAlert(WebApp.initData)}>
                显示警告1
            </button>
            {/*<button onClick={() => WebApp.showAlert(WebApp.initDataUnsafe)}>*/}
            {/*    显示警告2*/}
            {/*</button>*/}
            <button onClick={() => WebApp.showAlert(WebApp.initDataUnsafe.hash)}>
                显示警告3
            </button>
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