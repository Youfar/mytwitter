import { handleActions } from 'redux-actions';

export const tweetReducer = handleActions(
    {
        REQUEST_POST_TWEET: (state, action) => Object.assign({}, state, {}),
        COMPLETE_POST_TWEET: {
            next: (state, action) => Object.assign({}, state, {
                tweets: [action.payload.tweet, ...state.tweets],
                tweetCompleteFlg: true
            }),
            throw: (state, action) => Object.assign({}, state, {
                tweetInputText: "ツイートの投稿に失敗しました"
            })
        },

    }, {text: "", tweetCompleteFlg: false, tweetInputText: "", tweets: [], favoriteTweets: []}
);