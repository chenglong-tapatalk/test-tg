import {diffTime} from "../helper/helper";
function Card(props) {
    const {data,index} = props;
    return (
    <div className="card" onClick={()=>{window.location.href='/?tab=detail&id='+data.id}}>
        <div className="card-top">
            <div className="ct-left">
                <img className="ct-right-img" src={data.advertiserVo.logoUrl} alt=""/>
                <div className="ct-left-text">
                    {data.advertiserVo.name}
                </div>
            </div>
            <div className="ct-right">
                Filter
            </div>
        </div>
        <div className="card-middle">
            <div className="cm-left">
                <div className="cml-title">
                    {data.name}
                </div>
                <div className="cml-desc">
                    <div className="cmld-time">
                        <img className="cmldt-img" src="time.png" alt=""/>
                        <div className="cmldt-text">
                            End in <span className="cmldt-time">{diffTime(data.endTime)}</span>
                        </div>

                    </div>
                    <div className="cmld-time cmld-people">
                        <img className="cmldt-img" src="people.png" alt=""/>
                        <div className="cmldt-text">
                            {data.participants}
                        </div>
                    </div>
                </div>
                <div className="card-bottom">
                    <img className="cb-img" src="t.png" alt=""/>
                    <div className="cb-text">
                        {data.reward}
                        <span className="cb-text-right">
                            USDT
                        </span>
                    </div>
                </div>
            </div>
            <div className="cm-right">
                <img className="cm-right-img" src={data.bannerUrl} alt=""/>
            </div>
        </div>

    </div>
    )
}

export default Card