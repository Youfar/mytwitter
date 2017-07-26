/**
 * Created by cho.oh on 西暦17/07/26.
 */
import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {connect} from 'react-redux';
import {Link} from "react-router";
import { getFollowersByUserId } from "../../profile/action";
import {logout} from '../../auth/action';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../material_ui_raw_theme_file';
import {AppBar, FlatButton, Paper} from "material-ui";

const paperStyle = {
    position: 'fixed',
    // height: '15em',
    width: '50%',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
};

class Follower extends Component {
    componentWillMount() {
        console.log('willMount');
        this.props.dispatchFetchFollowerListByUserId(this.props.params.userId);
    }

    render() {
        const {targetFollowers, dispatch} = this.props;
        console.log(this.props);
        return (
            <div>
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <AppBar
                            title="ホーム"
                            iconElementRight={<FlatButton label="ログアウト" onClick={() => dispatch(logout())}/>}
                        />
                        <Paper style ={paperStyle} zDepth={2}>
                            <List>
                                <Subheader>フォローリスト</Subheader>
                                {targetFollowers.map((targetFollower, i) => (
                                    <Link to={"/profile/" + i}>
                                        <ListItem key={i}
                                                  primaryText={targetFollower.username}
                                                  containerElement={<Link to={"/profile/" + targetFollower.userId}/>}
                                        />
                                    </Link>
                                    )
                                )}
                            </List>
                        </Paper>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // token: state.tokenReducer.token,
        // targetFollowings: state.profileReducer.targetFollowings,
        targetFollowers: state.profileReducer.targetFollowers,
        // followers: state.followReducer.followers,
    }
};

const mapDispatchToProps = (dispatch) => {
    const dispatchFetchFollowerListByUserId = (userId) => dispatch(getFollowersByUserId(userId));
    // const dispatchFetchFollowerListByUserId = (token) => dispatch(getFollowers(token));

    return {
        dispatchFetchFollowerListByUserId,
        dispatch: dispatch
        // dispatchFetchFollowerList
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Follower);