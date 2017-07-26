import { createAction } from 'redux-actions';
import fetch from 'isomorphic-fetch';
import { browserHistory } from "react-router";

//TODO add URL
const ADD_TARGET_URL = 'http://localhost:8080/createUser';
export const ADD_TARGET_ACTIONS = {
    REQUEST_ADD_TARGET: 'REQUEST_ADD_TARGET',
    COMPLETE_ADD_TARGET: 'COMPLETE_ADD_TARGET',
};
const requestAddTarget = createAction(ADD_TARGET_ACTIONS.REQUEST_ADD_TARGET);
const completeAddTarget = createAction(ADD_TARGET_ACTIONS.COMPLETE_ADD_TARGET,(json) => ({userId: json.userId, serverMsg: json.serverMsg}));

export function AddTarget(token, finalTarget, finalReward, firstStepTarget, secondStepTarget, thirdStepTarget) {
    return function(dispatch) {
        dispatch(requestAddTarget());
        const headers = new Headers();
        headers.append('x-auth-token', token);
        const body = new FormData();
        body.append("finalTarget", finalTarget);
        body.append("finalReward", finalReward);
        body.append("firstStepTarget", firstStepTarget);
        body.append("secondStepTarget", secondStepTarget);
        body.append("thirdStepTarget", thirdStepTarget);
        console.log(body);
        return fetch(ADD_TARGET_URL, {
            mode: 'cors',
            method: 'POST',
            headers: headers,
            body: body
        }).then(function(response) {
            if (!response.ok) {
                console.log("response not ok");
                throw Error(response.statusText)
            }
            return response.json();
        }).then(function (json) {
            console.log("response is ok");
            dispatch(completeAddTarget(json));
            // browserHistory.push('/LoginSuccess');
            browserHistory.push('/app');
        }).catch(function (err) {
            console.log("signUp error");
            dispatch(completeAddTarget(new Error("ユーザアカウント名とパスワードを確認してください")));
        });
    }
}