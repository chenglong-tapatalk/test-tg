import {useSelector} from "react-redux";
import dayjs from "dayjs";

function DetailCard() {
    const data = useSelector(store => store.questDetail);
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
                    {data.name}
                </div>
                <div className="cml-detail">
                    {data.description}
                </div>
                <div className="cml-desc">
                    <div className="cmld-time">
                        <img className="cmldt-img" src="time.png" alt=""/>
                        <div className="cmldt-text cmldc-text">
                            End in <span className="cmldt-time">{diffTime(data.endTime)}</span>
                        </div>

                    </div>
                    <div className="cmld-time cmld-people">
                        <img className="cmldt-img" src="people.png" alt=""/>
                        <div className="cmldt-text cmldc-text">
                            {data.participants}
                        </div>
                    </div>
                </div>
                <div className="card-bottom">
                    <img className="cb-img cbd-img" src="t.png" alt=""/>
                    <div className="cb-text cbd-text">
                        {data.reward}
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