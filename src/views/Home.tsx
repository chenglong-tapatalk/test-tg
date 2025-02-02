import Card from "../components/Card";
// import WebApp from '@twa-dev/sdk';
import store from "../store/index";
import { getQuestList } from "../store/reducer";
import { useSelector } from "react-redux";
import {useEffect} from "react";

function Home() {
    useEffect(() => {
        store.dispatch(getQuestList());
    }, []);
    const quest = useSelector((store:any) => store.quest);
    console.log(11111,quest);
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
        {/*<div className="card">*/}
        {/*    <div>*/}
        {/*        {WebApp.initData}*/}
        {/*    </div>*/}
        {/*    <br/>*/}

        {/*</div>*/}
        <div className="card-main">
            {quest && quest.map((c:any,i:any) =>
                <Card data={c} key={i} index={i} />
            )}
        </div>
    </div>
    )
}

export default Home