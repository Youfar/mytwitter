import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { addTweet } from "../../tweet/action"
import Tweet from '../component/Tweet';

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

class TweetContainer extends Component {
    static propTypes = {
        dispatchAddTweet: PropTypes.func.isRequired,
    };

    // componentWillMount() {
    //     console.log('willMount');
    //     this.props.dispatchFetchTodo();
    // }

    handleAddTweet(text, token) {
        this.props.dispatchAddTweet(text, token);
    };

    render() {
        return (
            <div style={containerStyle}>
                <Tweet
                    token={this.props.token}
                    handleAddTweet={this.handleAddTweet.bind(this)}
                    // handleToggleTodo={this.handleToggleTodo.bind(this)}
                    // handleDeleteTodo={this.handleDeleteTodo.bind(this)}
                />
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.tokenReducer.token,
    }
};

const mapDispatchToProps = (dispatch) => {
    const dispatchAddTweet = (tweetContent, token) => dispatch(addTweet(tweetContent, token));
    return {
        dispatchAddTweet,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TweetContainer);