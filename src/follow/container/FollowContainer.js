import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {getFollowers, getFollowings} from "../action";
import {FlatButton, List, ListItem} from "material-ui";
// import UserList from "../component/UserList";
import Paper from 'material-ui/Paper';



const paperStyle = {
    height: 150,
    width: 200,
    marginTop: 50,
    marginLeft: 100,
    textAlign: 'center',
    display: 'inline-block',
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
                <Paper style ={paperStyle} zDepth={2}>
                    <h2>Home</h2>
                    <FlatButton label={"フォロー " + this.props.followings.length}/>
                    <FlatButton label={"フォロワー " + this.props.followers.length}/>
                    {/*<button onClick={() => dispatch(addFollowing(token, this.props.params.userId))}>Follow</button>*/}
                </Paper>
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