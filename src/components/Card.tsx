import dayjs from 'dayjs';
function Card(props) {

    const diffTime = (time: Date | string) => {
        console.log(dayjs(time).diff(dayjs(),'second'));
        const times = dayjs(time).diff(dayjs(),'second');
        let d = '0';
        let i = '00';
        let s = '00';
        if (times > 86400) {
            d = Math.floor(times / 86400) + '';
        }
        const hour = times % 86400;
        if (hour > 3600) {
            i = Math.floor(hour / 3600) + '';
            if (parseInt(i) < 10) {
                i = '0' + i;
            }
        }
        const minute = hour % 3600;
        if (minute > 0) {
            s = Math.floor(minute / 60) + '';
            if (parseInt(s) < 10) {
                s = '0' + s;
            }
        }

        return d + 'd:' + i + 'h:' + s + 'm';
    }
    const {data,index} = props;
    console.log(index,data,1);
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