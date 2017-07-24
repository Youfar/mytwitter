import { handleActions } from 'redux-actions';

export const followReducer = handleActions(
    {
        REQUEST_GET_FOLLOWINGS: (state, action) => Object.assign({}, state, {}),
        COMPLETE_GET_FOLLOWINGS: {
            next: (state, action) => Object.assign({}, state, {
                text: action.payload.text,
                followings: action.payload.followings
            }),
            throw: (state, action) => Object.assign({}, state, {
                text: action.payload.message
            })
        },

        REQUEST_GET_FOLLOWERS: (state, action) => Object.assign({}, state, {}),
        COMPLETE_GET_FOLLOWERS: {
            next: (state, action) => Object.assign({}, state, {
                text: action.payload.text,
                followers: action.payload.followers
            }),
            throw: (state, action) => Object.assign({}, state, {
                text: action.payload.message
            })
        },
    }, {text: "", followings: [], followers: []}
)