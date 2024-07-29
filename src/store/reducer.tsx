import {createSlice} from '@reduxjs/toolkit';
import InitState from './initState';
import store from "./index";

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
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const params = {
                "orderByColumn": "",
                "orderByAsc": true,
                "pageIndex": 1,
                "pageSize": 10,
                "keyword": "",
                "userId": 0
            };

            var requestOptions = {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {'Content-Type': 'application/json','Authorization':'boot.app.d23a91932e8670fdf19510b01c91796b.017a523ef3dc4236a0faf79757488821' }
            };

            fetch("http://34.225.3.60:8888/api/app/quest/getAppQuestPage", requestOptions)
                .then(response => response.text())
                .then(res => {
                    const r = JSON.parse(res);
                    const data = r.data ? r.data : '';
                    if (data && data.list) {
                        store.dispatch(saveQuest(data.list));

                    }
                })
                .catch((error) => {
                    console.log('getAppQuestPage error', error);
                });
        },
        getQuestDetail(state,action) {
            state.quest = state.quest;
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json','Authorization':'boot.app.d23a91932e8670fdf19510b01c91796b.017a523ef3dc4236a0faf79757488821' }
            };

            fetch("http://34.225.3.60:8888/api/app/quest/getAppQuest/"+action.payload, requestOptions)
                .then(response => response.text())
                .then(res => {
                    const r = JSON.parse(res);
                    const data = r.data ? r.data : '';
                    console.log(data);
                    if (data) {
                        store.dispatch(saveQuestDetail(data));
                    }
                })
                .catch((error) => {
                    console.log('getAppQuestPage error', error);
                });
        }
    },
});

export const {
    saveQuest,
    saveQuestDetail,
    getQuestList,
    getQuestDetail,
} = mainSlice.actions;
export default mainSlice.reducer;
