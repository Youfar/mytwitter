import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../material_ui_raw_theme_file';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TweetContainer from "../../tweet/container/TweetContainer";
import TargetContainer from "../../target/container/TargetContainer"
import {getMyUserId, logout} from '../../auth/action';
import UserContainer from "../../user/container/UserContainer";
import FollowContainer from "../../follow/container/FollowContainer";
import {Tabs, Tab} from 'material-ui/Tabs';

// const titleStyle = {
//     // marginTop: '100px',
//     // marginLeft: '600px',
//     // position: 'relative',
//     display: flex,
// };
class TimeLine extends Component {

    componentWillMount() {
        const { token } = this.props;
        console.log('aaaa');
        this.props.dispatchFetchUserId(token);
    }

    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <AppBar
                            title="ホーム"
                            iconElementRight={<FlatButton label="ログアウト" onClick={() => dispatch(logout())}/>}
                        />
                        <Tabs>
                            <Tab label="タイムライン">
                                <TweetContainer/>
                                <UserContainer/>
                                <FollowContainer/>
                            </Tab>
                            <Tab label="出勤">
                                {/*<TargetContainer/>*/}
                                <p>coming soon</p>
                            </Tab>
                        </Tabs>
                    </div>
                </MuiThemeProvider>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        loginFlg: state.authReducer.loginFlg,
        myUserId: state.authReducer.userId,
        token: state.tokenReducer.token,
    }
}

function mapDispatchToProps(dispatch) {
    const dispatchFetchUserId = (token) => dispatch(getMyUserId(token))
    return {
        dispatchFetchUserId,
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeLine);
