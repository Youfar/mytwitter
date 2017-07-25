import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {addFollowing} from "../../follow/action";
import {logout} from '../../auth/action';
import { getUserByUserId } from '../action';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../material_ui_raw_theme_file';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
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
        // targetUserId: PropTypes.number.isRequired,
        // userId: PropTypes.number.isRequired,
        // deleteTweet: PropTypes.func.isRequired,
        // favoriteTweet: PropTypes.func.isRequired
    }

    componentWillMount() {
        console.log('willMount');
        this.props.dispatchFetchUser(this.props.params.userId);
    }

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
                            iconElementRight={<FlatButton label="ログアウト" onClick={() => dispatch(logout())}/>}
                        />
                        {/*<h1>welcome {this.props.params.userId}</h1>*/}
                        <h1>welcome {targetUser.username}</h1>
                        <button onClick={() => dispatch(addFollowing(token, this.props.params.userId))}>Follow</button>
                        {/*<TweetContainer/>*/}
                        {/*<UserContainer/>*/}
                        <ProfileFollowContainer targetUserId={this.props.params.userId}/>
                        <div style ={tweetStyle}>
                            <ProfileTweetContainer targetUserId={this.props.params.userId}/>
                        </div>
                    </div>
                </MuiThemeProvider>
                {/*<h1>welcome {userId}</h1>*/}
                {/*<h1>welcome {this.props.params.userId}</h1>*/}
                {/*<button onClick={() => dispatch(addFollowing(token, this.props.params.userId))}>Follow</button>*/}
                {/*<button>Follow</button>*/}
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
    return {
        dispatchFetchUser,
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);