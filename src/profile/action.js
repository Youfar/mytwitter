import { createAction, createActions } from 'redux-actions';
import fetch from 'isomorphic-fetch';

export const GET_FOLLOWING_BYID_ACTIONS = {
    REQUEST_GET_FOLLOWINGS_BYID: 'REQUEST_GET_FOLLOWINGS_BYID',
    COMPLETE_GET_FOLLOWINGS_BYID: 'COMPLETE_GET_FOLLOWINGS_BYID',
    // FAILED_POST_TWEET: 'FAILED_POST_TWEET'
};

const requestGetFollowingsByID = createAction(GET_FOLLOWING_BYID_ACTIONS.REQUEST_GET_FOLLOWINGS_BYID);
const completeGetFollowingsByID = createAction(GET_FOLLOWING_BYID_ACTIONS.COMPLETE_GET_FOLLOWINGS_BYID, (followings) => ({followings: followings}));

export function getFollowingsByUserId(targetUserId) {
    return function(dispatch) {
        dispatch(requestGetFollowingsByID());
        const GET_FOLLOWINGS_BYID_API_URL = 'http://localhost:8080/getFollowingsByUserId/' + targetUserId;

        return fetch(GET_FOLLOWINGS_BYID_API_URL, {
            mode: 'cors',
            method: 'GET',
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetFollowingsByID(json));
        }).catch(function(err) {
            dispatch(completeGetFollowingsByID(err));
        });
    };
}

export const GET_FOLLOWER_BYID_ACTIONS = {
    REQUEST_GET_FOLLOWERS_BYID: 'REQUEST_GET_FOLLOWERS_BYID',
    COMPLETE_GET_FOLLOWERS_BYID: 'COMPLETE_GET_FOLLOWERS_BYID',
    // FAILED_POST_TWEET: 'FAILED_POST_TWEET'
};

const requestGetFollowersByID = createAction(GET_FOLLOWER_BYID_ACTIONS.REQUEST_GET_FOLLOWERS_BYID);
const completeGetFollowersByID = createAction(GET_FOLLOWER_BYID_ACTIONS.COMPLETE_GET_FOLLOWERS_BYID, (followers) => ({followers: followers}));

export function getFollowersByUserId(targetUserId) {
    return function(dispatch) {
        dispatch(requestGetFollowersByID());
        const GET_FOLLOWERS_BYID_API_URL = 'http://localhost:8080/getFollowersByUserId/' + targetUserId;

        return fetch(GET_FOLLOWERS_BYID_API_URL, {
            mode: 'cors',
            method: 'GET',
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetFollowersByID(json));
        }).catch(function(err) {
            dispatch(completeGetFollowersByID(err));
        });
    };
}

export const GET_TWEETS_BYID_ACTIONS = {
    REQUEST_GET_TWEETS_BYID: 'REQUEST_GET_TWEETS_BYID',
    COMPLETE_GET_TWEETS_BYID: 'COMPLETE_GET_TWEETS_BYID',
    // FAILED_GET_TWEETS: 'FAILED_GET_TWEETS'
};

const requestGetTweetsByID = createAction(GET_TWEETS_BYID_ACTIONS.REQUEST_GET_TWEETS_BYID);
const completeGetTweetsByID = createAction(GET_TWEETS_BYID_ACTIONS.COMPLETE_GET_TWEETS_BYID, (tweets) => ({tweets: tweets}));

export function loadTweetsByUserId(targetUserId) {
    return function(dispatch) {
        dispatch(requestGetTweetsByID());
        const GET_TWEETS_BYID_API_URL = 'http://localhost:8080/getTweetsByUserId/' + targetUserId;
        return fetch(GET_TWEETS_BYID_API_URL, {
            mode: 'cors',
            method: 'GET',
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetTweetsByID(json));
        }).catch(function(err) {
            dispatch(completeGetTweetsByID(err));
        });
    };
}

export const GET_USER_BYID_ACTIONS = {
    REQUEST_GET_USER_BYID: 'REQUEST_GET_USER_BYID',
    COMPLETE_GET_USER_BYID: 'COMPLETE_GET_USER_BYID',
    // FAILED_GET_TWEETS: 'FAILED_GET_TWEETS'
};

const requestGetUserByID = createAction(GET_USER_BYID_ACTIONS.REQUEST_GET_USER_BYID);
const completeGetUserByID = createAction(GET_USER_BYID_ACTIONS.COMPLETE_GET_USER_BYID, (user) => ({user: user}));

export function getUserByUserId(targetUserId) {
    return function(dispatch) {
        dispatch(requestGetUserByID());
        const GET_USER_BYID_API_URL = 'http://localhost:8080/getUser/' + targetUserId;
        return fetch(GET_USER_BYID_API_URL, {
            mode: 'cors',
            method: 'GET',
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetUserByID(json));
        }).catch(function(err) {
            dispatch(completeGetUserByID(err));
        });
    };
}