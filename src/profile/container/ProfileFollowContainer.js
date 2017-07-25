/**
 * Created by cho.oh on 西暦17/07/25.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { getFollowingsByUserId, getFollowersByUserId} from "../../profile/action";
import {List, ListItem} from "material-ui";
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
                <List style={followPanelStyle}>
                    <ListItem primaryText={"フォロー: " + this.props.targetFollowings.length}  />
                    <ListItem primaryText={"フォロワー: " + this.props.targetFollowers.length}  />
                </List>
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