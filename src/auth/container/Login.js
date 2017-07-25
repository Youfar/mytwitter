import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import LoginForm from '../component/LoginForm';
import {login, signUp} from '../action';

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

const h1Style = {
    marginTop: 100,
    marginLeft: 900,
    // position: 'relative',
};

const h2Style = {
    marginTop: 150,
    marginLeft: 840,
    // position: 'relative',
};

class Login extends Component {
    static propTypes = {
        // isFetching: PropTypes.bool,
        handleLoginSubmit: PropTypes.func.isRequired,
        handleSignUpSubmit: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div style={defaultStyle}>
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <h1　style={h1Style}>MOTTER</h1>
                        <h2 style={h2Style}>もうちょっと頑張りましょう</h2>
                        <div style={containerStyle}>
                            <LoginForm
                                handleLoginSubmit={this.props.handleLoginSubmit}
                                handleSignUpSubmit={this.props.handleSignUpSubmit}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        loginFlg: state.authReducer.loginFlg,
        signUpFlg: state.authReducer.signUpFlg
    }
};

const mapDispatchToProps = (dispatch) => {
    const handleLoginSubmit = (username, password) => dispatch(login(username, password));
    const handleSignUpSubmit = (username, email, password) => dispatch(signUp(username, email, password));
    return {
        handleLoginSubmit,
        handleSignUpSubmit
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);