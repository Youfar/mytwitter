import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { addTweet, loadTweets } from "../../tweet/action"
import Tweet from '../component/Tweet';
import TweetCard from "../component/TweetCard";
import {deleteTweet} from "../action";

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
        dispatchFetchTweet: PropTypes.func.isRequired,
        dispatchDeleteTweet: PropTypes.func.isRequired,
    };

    componentWillMount() {
        console.log('willMount');
        this.props.dispatchFetchTweet(this.props.token);
    }

    handleAddTweet(text, token) {
        this.props.dispatchAddTweet(text, token);
    };

    handleDeleteTweet(tweetId, token) {
        this.props.dispatchDeleteTweet(tweetId, token);
    };

    render() {
        return (
            <div style={containerStyle}>
                <Tweet
                    token={this.props.token}
                    handleAddTweet={this.handleAddTweet.bind(this)}
                    // handleToggleTodo={this.handleToggleTodo.bind(this)}
                />
                <TweetCard
                    token={this.props.token}
                    tweets={this.props.tweets}
                    handleDeleteTweet={this.handleDeleteTweet.bind(this)}
                />
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.tokenReducer.token,
        tweets: state.tweetReducer.tweets,
    }
};

const mapDispatchToProps = (dispatch) => {
    const dispatchFetchTweet = (token) => dispatch(loadTweets(token));
    const dispatchAddTweet = (tweetContent, token) => dispatch(addTweet(tweetContent, token));
    const dispatchDeleteTweet = (token, tweetId) => dispatch(deleteTweet(token, tweetId));
    return {
        dispatchFetchTweet,
        dispatchAddTweet,
        dispatchDeleteTweet,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TweetContainer);