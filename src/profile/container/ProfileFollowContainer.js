/**
 * Created by cho.oh on 西暦17/07/25.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { getFollowingsByUserId, getFollowersByUserId} from "../../profile/action";
import {FlatButton, List, ListItem, Paper} from "material-ui";
// import UserList from "../component/UserList";

const followPanelStyle = {
    marginTop: '200px',
    marginLeft: '100px',
    width: '200px',
    height: '200px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // margin: 'auto',
};

const paperStyle = {
    height: 200,
    width: 200,
    marginTop: 100,
    marginLeft: 100,
    textAlign: 'center',
    display: 'inline-block',
};

class ProfileFollowContainer extends Component {
    static propTypes = {
        dispatchFetchFollowingListByUserId: PropTypes.func.isRequired,
        dispatchFetchFollowerListByUserId: PropTypes.func.isRequired,
    };

    componentWillMount() {
        const { targetUserId } = this.props;
        console.log('willMount');
        this.props.dispatchFetchFollowingListByUserId(targetUserId);
        this.props.dispatchFetchFollowerListByUserId(targetUserId);

    }

    render() {

        return (
            <div>
                <Paper style ={paperStyle} zDepth={2}>
                    <h2>Home</h2>
                    <FlatButton label={"フォロー " + this.props.targetFollowings.length}/>
                    <FlatButton label={"フォロワー " + this.props.targetFollowers.length}/>
                    <FlatButton label={"フォローする"}/>
                </Paper>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        // token: state.tokenReducer.token,
        targetFollowings: state.profileReducer.targetFollowings,
        targetFollowers: state.profileReducer.targetFollowers,
        // followers: state.followReducer.followers,
    }
};

const mapDispatchToProps = (dispatch) => {
    const dispatchFetchFollowingListByUserId = (userId) => dispatch(getFollowingsByUserId(userId));
    const dispatchFetchFollowerListByUserId = (userId) => dispatch(getFollowersByUserId(userId));
    // const dispatchFetchFollowerListByUserId = (token) => dispatch(getFollowers(token));

    return {
        dispatchFetchFollowingListByUserId,
        dispatchFetchFollowerListByUserId
        // dispatchFetchFollowerList
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileFollowContainer);