import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import LoginForm from '../component/LoginForm';
import {login, signUp} from '../action';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../material_ui_raw_theme_file';

// const defaultStyle = {
//     height: '100vh',
//     backgroundSize: 'cover',
// };

// const containerStyle = {
//     height: '300px',
//     width: '500px',
//     border: 'solid 1px #000',
//     // height: '200px',
//     position: 'absolute',
//     top: '500px',
//     left: '300px',
//     right: 0,
//     bottom: 0,
//     margin: 'auto',
// };

const LoginStyle = {
    height: '30%',
    width: '40%',
    // border: 'solid 1px #000',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
};

const h1Style = {
    position: 'fixed',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
};

const h2Style = {
    position: 'fixed',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
};

class Login extends Component {
    static propTypes = {
        // isFetching: PropTypes.bool,
        handleLoginSubmit: PropTypes.func.isRequired,
        handleSignUpSubmit: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <h1 style={h1Style}>MOTTER</h1>
                        <h2 style={h2Style}>もうちょっと頑張りましょう</h2>
                        <div style={LoginStyle}>
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