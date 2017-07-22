import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import LoginForm from '../component/LoginForm';
import {login} from '../action';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../material_ui_raw_theme_file';

const defaultStyle = {
    height: '100vh',
    backgroundSize: 'cover',
};

const containerStyle = {
    width: '300px',
    height: '200px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
};

class Login extends Component {
    static propTypes = {
        // isFetching: PropTypes.bool,
        handleLoginSubmit: PropTypes.func.isRequired,
        // handleRegisterSubmit: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div style={defaultStyle}>
                <MuiThemeProvider muiTheme={theme}>
                    <div style={containerStyle}>
                        <LoginForm
                        // isFetching={this.props.isFetching}
                            handleLoginSubmit={this.props.handleLoginSubmit}
                        // handleRegisterSubmit={this.props.handleRegisterSubmit}
                        />
                    </div>
                </MuiThemeProvider>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        loginFlg: state.authReducer.loginFlg
    }
};

const mapDispatchToProps = (dispatch) => {
    const handleLoginSubmit = (username, password) => dispatch(login(username, password));
    return {
        handleLoginSubmit,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);