import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {getAllUsers} from "../action";

const UserListStyle = {
    marginTop: '200px',
    marginLeft: '900px',
    width: '600px',
    height: '200px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // margin: 'auto',
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
                <div style={UserListStyle}>
                    <UserList
                        token={this.props.token}
                        // handleToggleTodo={this.handleToggleTodo.bind(this)}
                    />
                </div>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
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

