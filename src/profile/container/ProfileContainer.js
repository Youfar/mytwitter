import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {addFollowing} from "../../follow/action";
import {logout} from '../../auth/action';
import { getUserByUserId } from '../action';
import {addFavoriteTweet, deleteFavoriteTweet} from "../../tweet/action";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../material_ui_raw_theme_file';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ProfileFollowContainer from "./ProfileFollowContainer";
import ProfileTweetContainer from "./ProfileTweetContainer";

const tweetStyle = {
    marginTop: '200px',
    marginLeft: '700px',
    width: '600px',
    height: '200px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // margin: 'auto',
};

class Profile extends Component {
    //TODO add fetch following
    static propTypes = {
        dispatch: PropTypes.func,
        token: PropTypes.string,
        dispatchAddFavoriteTweet: PropTypes.func.isRequired,
        dispatchDeleteFavoriteTweet: PropTypes.func.isRequired,
        // targetUserId: PropTypes.number.isRequired,
        // userId: PropTypes.number.isRequired,
        // deleteTweet: PropTypes.func.isRequired,
        // favoriteTweet: PropTypes.func.isRequired
    }

    componentWillMount() {
        console.log('willMount');
        this.props.dispatchFetchUser(this.props.params.userId);
    }

    handleAddFollowing(token, userId) {
        this.props.dispatchAddFollowing(token, userId);
    }

    handleAddFavoriteTweet(token, tweetId) {
        this.props.dispatchAddFavoriteTweet(token, tweetId);
    };

    handleDeleteFavoriteTweet(token, tweetId) {
        this.props.dispatchDeleteFavoriteTweet(token, tweetId);
    };

    // const { targetUserId } = this.props.params.userId


    render() {
        const { dispatch, token, targetUser } = this.props
        const { targetUserId } = this.props.params.userId
        return (
            <div>
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <AppBar
                            title="ホーム"
                            // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                            iconElementRight={<FlatButton label="ログアウト" onClick={() => dispatch(logout())}/>}
                        />

                        <ProfileFollowContainer
                            token={token}
                            targetUserId={this.props.params.userId}
                            targetUserName={targetUser.username}
                            handleAddFollowing={this.handleAddFollowing.bind(this)}
                        />
                        <div style ={tweetStyle}>
                            <ProfileTweetContainer
                                token={token}
                                targetUserId={this.props.params.userId}
                                handleAddFavoriteTweet={this.handleAddFavoriteTweet.bind(this)}
                                handleDeleteFavoriteTweet={this.handleDeleteFavoriteTweet.bind(this)}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // followFlg: state.followReducer.followFlg,
        targetUser: state.profileReducer.targetUser,
        token: state.tokenReducer.token
    }
}

function mapDispatchToProps(dispatch) {
    const dispatchFetchUser = (userId) => dispatch(getUserByUserId(userId));
    const dispatchAddFollowing = (token, userId) => dispatch(addFollowing(token, userId));
    const dispatchAddFavoriteTweet = (token, tweetId) => dispatch(addFavoriteTweet(token, tweetId));
    const dispatchDeleteFavoriteTweet = (token, tweetId) => dispatch(deleteFavoriteTweet(token, tweetId));
    return {
        dispatchFetchUser,
        dispatchAddFollowing,
        dispatchAddFavoriteTweet,
        dispatchDeleteFavoriteTweet,
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);