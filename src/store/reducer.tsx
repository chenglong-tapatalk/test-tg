import {createSlice} from '@reduxjs/toolkit';
import InitState from './initState';
import store from "./index";
import {post} from "../helper/client";

const mainSlice = createSlice({
    name: 'main',
    initialState: InitState,
    reducers: {
        saveQuest(state, action) {
            state.quest = action.payload;
        },
        saveQuestDetail(state, action) {
            state.questDetail = action.payload;
        },
        getQuestList() {
            const params = {
                "orderByColumn": "",
                "orderByAsc": true,
                "pageIndex": 1,
                "pageSize": 10,
                "keyword": "",
                "userId": 0
            };
            post("/api/app/quest/getAppQuestPage",params).then((res:any)=>{
                console.log(123,res);
                if (res && res.list) {
                    store.dispatch(saveQuest(res.list));
                }
            }).catch((error) => {
                    console.log('getAppQuestPage error', error);
                });
        },
        getQuestDetail(state,action) {
            state.questDetail = [];
            post("/api/app/quest/getAppQuest/"+action.payload,{}).then((res:any)=>{
                console.log(123,res);
                if (res) {
                    store.dispatch(saveQuestDetail(res));
                }
            }).catch((error) => {
                console.log('getAppQuestPage error', error);
            });
        },
        getTaskByQuest(state,action) {
            state.questDetail = [];
            const result = post("/api/app/task/getAppTasks",'questId='+action.payload).then((res)=>{
                console.log(123,res);
            });
        }
    },
});

export const {
    saveQuest,
    saveQuestDetail,
    getQuestList,
    getQuestDetail,
    getTaskByQuest,
} = mainSlice.actions;
export default mainSlice.reducer;
