import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {addFollowing} from "../../follow/action";
import {logout} from '../../auth/action';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../material_ui_raw_theme_file';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

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
    render() {
        const { dispatch, token } = this.props
        // const { targetUserId } = this.props.params.userId
        return (
            <div>
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <AppBar
                            title="ホーム"
                            iconElementRight={<FlatButton label="ログアウト" onClick={() => dispatch(logout())}/>}
                        />
                        <h1>welcome {this.props.params.userId}</h1>
                        {/*<h1>welcome {targetUserId}</h1>*/}
                        <button onClick={() => dispatch(addFollowing(token, this.props.params.userId))}>Follow</button>
                        {/*<TweetContainer/>*/}
                        {/*<UserContainer/>*/}
                        {/*<FollowContainer/>*/}
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
        token: state.tokenReducer.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);