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
            <button onClick={() => WebApp.showAlert(WebApp.initDataUnsafe.query_id)}>
                显示警告query_id
            </button>
            <button onClick={() => WebApp.showAlert(WebApp.initDataUnsafe.hash)}>
                显示警告hash
            </button>
            <button onClick={() => WebApp.showAlert(WebApp.initDataUnsafe.auth_date)}>
                显示警告auth_date
            </button>
            <button onClick={() => WebApp.showAlert(WebApp.initDataUnsafe.user.id)}>
                显示警告userid
            </button>
            <button onClick={() => WebApp.showAlert(WebApp.initDataUnsafe.user.username)}>
                显示警告username
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