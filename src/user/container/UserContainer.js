import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {getAllUsers} from "../action";
import UserList from "../component/UserList";
import {Paper} from "material-ui";

const UserListStyle = {
    marginTop: '200px',
    marginLeft: '1500px',
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
    height: 600,
    width: 600,
    marginTop: 100,
    marginLeft: 1400,
    textAlign: 'center',
    display: 'inline-block',
};

class UserContainer extends Component {
    static propTypes = {
        dispatchFetchUserList: PropTypes.func.isRequired,
    };

    componentWillMount() {
        console.log('willMount');
        this.props.dispatchFetchUserList(this.props.token);
    }

    render() {
        return (
            <div>
                <Paper style ={paperStyle} zDepth={2}>
                    <UserList
                        token={this.props.token}
                        users={this.props.users}
                    />
                </Paper>
                {/*<div style={UserListStyle}>*/}
                    {/*<UserList*/}
                        {/*token={this.props.token}*/}
                        {/*users={this.props.users}*/}
                        {/*// handleToggleTodo={this.handleToggleTodo.bind(this)}*/}
                    {/*/>*/}
                {/*</div>*/}
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.tokenReducer.token,
        users: state.userReducer.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    const dispatchFetchUserList = (token) => dispatch(getAllUsers(token));

    return {
        dispatchFetchUserList,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserContainer);

