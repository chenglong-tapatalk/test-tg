import DetailCard from "./DetailCard.tsx"

function Detail() {

    return (
    <div className="detail-main">
        <div className="detail-top">
            <img className="detail-top-img" src="detail-main.png" alt=""/>
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