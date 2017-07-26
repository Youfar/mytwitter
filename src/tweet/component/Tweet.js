import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {

    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};

const testStyle = {
    // position: 'fixed',
    height: '150px',
    width: '450px',
    // top: '25%',
    left: '55px',
    // transform: 'translate(-50%,-50%)',
    // textAlign: 'center',
    // display: 'inline-block',
};

const buttonStyle = {
    // position: 'fixed',
    // height: '150px',
    // width: '450px',
    top: '50px',
    // left: '10%',
    // transform: 'translate(-50%,-50%)',
    // textAlign: 'center',
    // display: 'inline-block',
};

// const textStyle = {
//     position: 'fixed',
//     height: '10em',
//     width: '40em',
//     top: '25%',
//     left: '10%',
//     transform: 'translate(-50%,-50%)',
//     // textAlign: 'center',
//     // display: 'inline-block',
// };

export default class Tweet extends Component {
    static propTypes = {
        handleAddTweet: PropTypes.func.isRequired,
        token: PropTypes.string.isRequired,
        // handleToggleTodo: PropTypes.func.isRequired,
        // handleDeleteTodo: PropTypes.func.isRequired,
    };

    handleSubmit = (e) => {
        const target = e.target;
        e.preventDefault();
        const action = this.props.handleAddTweet

        action(
            target.tweetContent.value.trim(),
            this.props.token
        );
        // this.props.handleAddTweet(this.refs.tweetContent.value, this.props.token);
        // this.refs.tweetContent.value = '';
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField type="text" id="tweetContent" style={testStyle}
                               floatingLabelText="いまどうしてる"
                               floatingLabelStyle={styles.floatingLabelStyle}
                               floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                               underlineShow={true}
                               multiLine={true}
                               rows={2}
                               rowsMax={4}
                               maxLength="140"
                    />
                    <RaisedButton style={buttonStyle} type="submit" label="ツイート" primary={true} />
                </form>
            </div>
        );
    }
}