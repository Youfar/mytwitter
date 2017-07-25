import { createAction, createActions } from 'redux-actions';
import fetch from 'isomorphic-fetch';

const ADD_FOLLOW_API_URL = 'http://localhost:8080/addFollowing';
export const ADD_FOLLOW_ACTIONS = {
    REQUEST_ADD_FOLLOW: 'REQUEST_ADD_FOLLOW',
    COMPLETE_ADD_FOLLOW: 'COMPLETE_ADD_FOLLOW',
    // FAILED_POST_TWEET: 'FAILED_POST_TWEET'
};

const requestAddFollow = createAction(ADD_FOLLOW_ACTIONS.REQUEST_ADD_FOLLOW);
const completeAddFollow = createAction(ADD_FOLLOW_ACTIONS.COMPLETE_ADD_FOLLOW, (targetUserId) => ({targetUserId: targetUserId}));

export function addFollowing(token, targetUserId) {
    return function(dispatch) {
        dispatch(requestAddFollow());
        const headers = new Headers();
        headers.append("x-auth-token", token);
        const body = new FormData();
        body.append('targetUserId',targetUserId);
        return fetch(ADD_FOLLOW_API_URL, {
            mode: 'cors',
            method: 'POST',
            headers: headers,
            body: body
        }).then(function(response) {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeAddFollow(targetUserId));
        }).catch(function(err) {
            dispatch(completeAddFollow(err));
        });
    };
}

const GET_FOLLOWINGS_API_URL = 'http://localhost:8080/getFollowings';
export const GET_FOLLOWING_ACTIONS = {
    REQUEST_GET_FOLLOWINGS: 'REQUEST_GET_FOLLOWINGS',
    COMPLETE_GET_FOLLOWINGS: 'COMPLETE_GET_FOLLOWINGS',
    // FAILED_POST_TWEET: 'FAILED_POST_TWEET'
};

const requestGetFollowings = createAction(GET_FOLLOWING_ACTIONS.REQUEST_GET_FOLLOWINGS);
const completeGetFollowings = createAction(GET_FOLLOWING_ACTIONS.COMPLETE_GET_FOLLOWINGS, (followings) => ({followings: followings}));

export function getFollowings(token) {
    return function(dispatch) {
        dispatch(requestGetFollowings());
        const headers = new Headers();
        headers.append("x-auth-token", token);
        return fetch(GET_FOLLOWINGS_API_URL, {
            mode: 'cors',
            method: 'GET',
            headers: headers,
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetFollowings(json));
        }).catch(function(err) {
            dispatch(completeGetFollowings(err));
        });
    };
}

const GET_FOLLOWERS_API_URL = 'http://localhost:8080/getFollowers';
export const GET_FOLLOWERS_ACTIONS = {
    REQUEST_GET_FOLLOWERS: 'REQUEST_GET_FOLLOWERS',
    COMPLETE_GET_FOLLOWERS: 'COMPLETE_GET_FOLLOWERS',
    // FAILED_POST_TWEET: 'FAILED_POST_TWEET'
};

const requestGetFollowers = createAction(GET_FOLLOWERS_ACTIONS.REQUEST_GET_FOLLOWERS);
const completeGetFollowers = createAction(GET_FOLLOWERS_ACTIONS.COMPLETE_GET_FOLLOWERS, (followers) => ({followers: followers}));

export function getFollowers(token) {
    return function(dispatch) {
        dispatch(requestGetFollowers());
        const headers = new Headers();
        headers.append("x-auth-token", token);
        return fetch(GET_FOLLOWERS_API_URL, {
            mode: 'cors',
            method: 'GET',
            headers: headers,
        }).then(function(response) {
            if (response.status === 401) {
                throw Error();
            }
            return response.json();
        }).then(function(json){
            dispatch(completeGetFollowers(json));
        }).catch(function(err) {
            dispatch(completeGetFollowers(err));
        });
    };
}

