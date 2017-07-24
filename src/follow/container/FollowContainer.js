import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {getFollowers, getFollowings} from "../action";
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

class FollowContainer extends Component {
    static propTypes = {
        dispatchFetchFollowingList: PropTypes.func.isRequired,
        dispatchFetchFollowerList: PropTypes.func.isRequired,
    };

    componentWillMount() {
        console.log('willMount');
        this.props.dispatchFetchFollowingList(this.props.token);
        this.props.dispatchFetchFollowerList(this.props.token);

    }

    render() {
        return (
            <div>
                <List style={followPanelStyle}>
                    <ListItem primaryText={"Follow: " + this.props.followings.length}  />
                    <ListItem primaryText={"Follower: " + this.props.followers.length}  />
                </List>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.tokenReducer.token,
        followings: state.followReducer.followings,
        followers: state.followReducer.followers,
    }
};

const mapDispatchToProps = (dispatch) => {
    const dispatchFetchFollowingList = (token) => dispatch(getFollowings(token));
    const dispatchFetchFollowerList = (token) => dispatch(getFollowers(token));

    return {
        dispatchFetchFollowingList,
        dispatchFetchFollowerList
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FollowContainer);