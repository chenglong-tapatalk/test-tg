function Card() {

    return (
    <div className="card">
        <div className="card-top">
            <div className="ct-left">
                <img className="ct-right-img" src="card.png" alt=""/>
                <div className="ct-left-text">
                    YesBloom
                </div>
            </div>
            <div className="ct-right">
                Filter
            </div>
        </div>
        <div className="card-middle">
            <div className="cm-left">
                <div className="cml-title">
                    Daily Cryoto Learning Task
                </div>
                <div className="cml-desc">
                    <div className="cmld-time">
                        <img className="cmldt-img" src="time.png" alt=""/>
                        <div className="cmldt-text">
                            End in <span className="cmldt-time">5d:23h:29m</span>
                        </div>

                    </div>
                    <div className="cmld-time cmld-people">
                        <img className="cmldt-img" src="people.png" alt=""/>
                        <div className="cmldt-text">
                            1382
                        </div>
                    </div>
                </div>
                <div className="card-bottom">
                    <img className="cb-img" src="t.png" alt=""/>
                    <div className="cb-text">
                        2.8
                        <span className="cb-text-right">
                            USDT
                        </span>
                    </div>
                </div>
            </div>
            <div className="cm-right">
                <img className="cm-right-img" src="card-right.png" alt=""/>
            </div>
        </div>

    </div>
    )
}

export default Card