import { handleActions } from 'redux-actions';

export const profileReducer = handleActions(
    {
        REQUEST_GET_FOLLOWINGS_BYID: (state, action) => Object.assign({}, state, {}),
        COMPLETE_GET_FOLLOWINGS_BYID: {
            next: (state, action) => Object.assign({}, state, {
                text: action.payload.text,
                targetFollowings: action.payload.followings
            }),
            throw: (state, action) => Object.assign({}, state, {
                text: action.payload.message
            })
        },

        REQUEST_GET_FOLLOWERS_BYID: (state, action) => Object.assign({}, state, {}),
        COMPLETE_GET_FOLLOWERS_BYID: {
            next: (state, action) => Object.assign({}, state, {
                text: action.payload.text,
                targetFollowers: action.payload.followers
            }),
            throw: (state, action) => Object.assign({}, state, {
                text: action.payload.message
            })
        },

        REQUEST_GET_TWEETS_BYID: (state, action) => Object.assign({}, state, {}),
        COMPLETE_GET_TWEETS_BYID: {
            next: (state, action) => Object.assign({}, state, {
                text: action.payload.text,
                targetTweets: action.payload.tweets
            }),
            throw: (state, action) => Object.assign({}, state, {
                text: action.payload.message
            })
        },

        REQUEST_GET_USER_BYID: (state, action) => Object.assign({}, state, {}),
        COMPLETE_GET_USER_BYID: {
            next: (state, action) => Object.assign({}, state, {
                text: action.payload.text,
                targetUser: action.payload.user
            }),
            throw: (state, action) => Object.assign({}, state, {
                text: action.payload.message
            })
        },



    }, {targetUserId: 0, targetUser: [], text: "", targetFollowings: [], targetFollowers: [], targetTweets: []}
)