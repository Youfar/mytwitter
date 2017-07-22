import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

const defaultPStyle = {
    color: '#000',
    textAlign: 'center',
};

const defaultInputStyle = {
    width: '100%',
    border: 0,
    padding: '10px',
    margin: '0 -10px 20px',
    borderRadius: '3px',
};

const style = {
    margin: 12,
};

const InputStyle = {
    marginLeft: 20,
};

export default class LoginForm extends Component {
    static propTypes = {
        // isFetching: PropTypes.bool,
        handleLoginSubmit: PropTypes.func.isRequired,
        // handleRegisterSubmit: PropTypes.func.isRequired,
    };

    handleSubmit(e) {
        const target = e.target;
        e.preventDefault();
        const action = this.props.handleLoginSubmit

        action(
            target.username.value.trim(),
            target.password.value.trim(),
        );
    }


    render() {
        return (
            <Tabs>
                <Tab label="登録">
                    <h1>regi</h1>
                </Tab>
                <Tab label="ログイン">
                    <div>
                        <p style={defaultPStyle}>ログイン</p>
                        <form onSubmit={e => this.handleSubmit(e)}>
                            {/*<input type="text" id="username" placeholder="ユーザー名" style={defaultInputStyle}/>*/}
                            {/*<br />*/}
                            {/*<input type="password" id="password" placeholder="パスワード" style={defaultInputStyle}/>*/}
                            {/*<br />*/}
                            <TextField type="text" id="username" hintText="ユーザー名" style={InputStyle} underlineShow={false} />
                            <Divider />
                            <TextField type="password" id="password" hintText="パスワード" style={InputStyle} underlineShow={false} />
                            <Divider />
                            <RaisedButton type="submit" label="ログイン" style={style} />
                            {/*<button type="submit">ログイン</button>*/}
                        </form>
                    </div>
                </Tab>
            </Tabs>
            );
    }
}