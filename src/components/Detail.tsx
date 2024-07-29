import DetailCard from "./DetailCard.tsx"
import {useEffect} from "react";
import {getQuestDetail} from "../store/reducer";
import store from "../store";
import {useSelector} from "react-redux";
import {getQueryVariable} from "../helper/helper";

function Detail() {

    const id = getQueryVariable('id');
    console.log(id);
    if (!id) {
        return false;
    }
    useEffect(() => {
        store.dispatch(getQuestDetail(id));
    }, []);
    const data = useSelector((store:any) => store.questDetail);
    return (
    <div className="detail-main">
        <div className="detail-top">
            <img className="detail-top-img" src={data.bannerUrl} alt=""/>
        </div>
        <div className="detail-bottom">
            <div className="detail-card">
                <DetailCard />
            </div>
            <div className="detail-bottom-title">
                Basic Tasks (0/3)
            </div>
            <div className="detail-task-list">
                <div className="detail-task">
                    <div className="detail-task-left">
                        <div className="detail-task-icon">
                            <img className="detail-task-img" src="task.png" alt=""/>
                        </div>
                        <div className="detail-task-left-title">
                            Join Channel
                        </div>
                    </div>
                    <div className="detail-task-right">
                        Start
                    </div>
                </div>
                <div className="detail-task">
                    <div className="detail-task-left">
                        <div className="detail-task-icon">
                            <img className="detail-task-img" src="task.png" alt=""/>
                        </div>
                        <div className="detail-task-left-title">
                            Join Channel
                        </div>
                    </div>
                    <div className="detail-task-right">
                        Start
                    </div>
                </div>
                <div className="detail-task">
                    <div className="detail-task-left">
                        <div className="detail-task-icon">
                            <img className="detail-task-img" src="task.png" alt=""/>
                        </div>
                        <div className="detail-task-left-title">
                            Join Channel
                        </div>
                    </div>
                    <div className="detail-task-right">
                        Start
                    </div>
                </div>
                <div className="detail-task">
                    <div className="detail-task-left">
                        <div className="detail-task-icon">
                            <img className="detail-task-img" src="task.png" alt=""/>
                        </div>
                        <div className="detail-task-left-title">
                            Join Channel
                        </div>
                    </div>
                    <div className="detail-task-right">
                        Start
                    </div>
                </div>
                <div className="detail-task">
                    <div className="detail-task-left">
                        <div className="detail-task-icon">
                            <img className="detail-task-img" src="task.png" alt=""/>
                        </div>
                        <div className="detail-task-left-title">
                            Join Channel
                        </div>
                    </div>
                    <div className="detail-task-right">
                        Start
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Detail