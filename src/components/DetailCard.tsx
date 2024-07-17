function DetailCard() {

    return (
    <div className="card">
        <div className="card-top card-top-detail">
            <div className="ct-left ctd-left">
                <img className="ct-right-img ctd-right-img" src="card.png" alt=""/>
                <div className="ct-left-text ctd-left-text">
                    YesBloom
                </div>
            </div>
            <div className="ct-right">
                Filter
            </div>
        </div>
        <div className="detail-card-middle">
            <div className="cm-left cml-left">
                <div className="cml-title cmld-title">
                    Daily Cryoto Learning Task
                </div>
                <div className="cml-detail">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </div>
                <div className="cml-desc">
                    <div className="cmld-time">
                        <img className="cmldt-img" src="time.png" alt=""/>
                        <div className="cmldt-text cmldc-text">
                            End in <span className="cmldt-time">5d:23h:29m</span>
                        </div>

                    </div>
                    <div className="cmld-time cmld-people">
                        <img className="cmldt-img" src="people.png" alt=""/>
                        <div className="cmldt-text cmldc-text">
                            1382
                        </div>
                    </div>
                </div>
                <div className="card-bottom">
                    <img className="cb-img cbd-img" src="t.png" alt=""/>
                    <div className="cb-text cbd-text">
                        2.8
                        <span className="cb-text-right cbd-text-right">
                            USDT
                        </span>
                    </div>
                </div>
            </div>

        </div>

    </div>
    )
}

export default DetailCard