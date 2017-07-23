import { createAction } from 'redux-actions';
import fetch from 'isomorphic-fetch';

const TWEET_API_URL = 'http://localhost:8080/tweet';
export const POST_TWEET_ACTIONS = {
    REQUEST_POST_TWEET: 'REQUEST_POST_TWEET',
    COMPLETE_POST_TWEET: 'COMPLETE_POST_TWEET',
    FAILED_POST_TWEET: 'FAILED_POST_TWEET'
};

const requestPostTweet = createAction(POST_TWEET_ACTIONS.REQUEST_POST_TWEET, () => ({text: "リクエスト中"}));
const completePostTweet = createAction(POST_TWEET_ACTIONS.COMPLETE_POST_TWEET, (json) => ({tweet: json}));

export function addTweet(tweet, token) {
    return function(dispatch) {
        dispatch(requestPostTweet());
        const headers = new Headers();
        headers.append('x-auth-token', token);
        const body = new FormData();
        body.append('tweetContent', tweet);
        return fetch(TWEET_API_URL, {
            mode: 'cors',
            method: 'POST',
            headers: headers,
            body: body
        }).then(function(response) {
            if (response.status === 401) {
                throw new Error();
            }
            return response.json();
        }).then(function(json) {
            dispatch(completePostTweet(json));
        }).catch(err => {
            dispatch(completePostTweet(err));
        });
    }
}