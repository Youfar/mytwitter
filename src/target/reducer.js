import { handleActions } from 'redux-actions';

export const authReducer = handleActions({
    REQUEST_ADD_TARGET: (state, action) => Object.assign({}, state, {}),
    COMPLETE_ADD_TARGET: {
        next: (state, action) => Object.assign({}, state, {
            addTargetFlg: true
        }),
        throw: (state, action) => Object.assign({}, state, {
            addTargetMsg: action.payload.message
        }),
    },
    }, {addTargetFlg: false, addTargetMsg: ""}
);