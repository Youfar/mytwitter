import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {getFollowers, getFollowings} from "../action";
import {FlatButton, List, ListItem} from "material-ui";
// import UserList from "../component/UserList";
import Paper from 'material-ui/Paper';
import {Link} from "react-router";
import Following from "../component/Following";



const paperStyle = {
    position: 'absolute',
    height: '150px',
    width: '200px',
    top: '35%',
    left: '5%',
    // transform: 'translate(-50%,-50%)',
    textAlign: 'center',
    // display: 'inline-block',
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
        const { myUserName, myUserId } = this.props;
        return (
            <div>
                <Paper style ={paperStyle} zDepth={2}>
                    <h2>{myUserName}</h2>
                    {/*<Following followings={this.props.followings}/>*/}
                    <FlatButton label={"フォロー " + this.props.followings.length} containerElement={<Link to={"/following/" + myUserId}/>}/>
                    <FlatButton label={"フォロワー " + this.props.followers.length} containerElement={<Link to={"/follower/" + myUserId}/>}/>
                    {/*<button onClick={() => dispatch(addFollowing(token, this.props.params.userId))}>Follow</button>*/}
                </Paper>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.tokenReducer.token,
        myUserName: state.tokenReducer.username,
        myUserId: state.authReducer.userId,
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