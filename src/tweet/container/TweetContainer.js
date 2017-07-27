import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { addTweet, loadTweets } from "../../tweet/action"
import Tweet from '../component/Tweet';
import TweetCard from "../component/TweetCard";
import {addFavoriteTweet, deleteFavoriteTweet, deleteTweet, loadFavoriteTweets} from "../action";
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import FavoriteTweetCard from "../component/FavoriteTweetCard";

//TODO xiugai
const containerStyle = {
    position: 'absolute',
    // width: '600px',
    // height: '200px',
    // height: '11em',
    // border: 'solid 1px #000',
    width: '40em',
    top: '150px',
    left: '25%',
    // margin: 'auto',

    // marginTop: '200px',
    // marginLeft: '700px',
    // width: '600px',
    // height: '200px',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
};

const TweetInputStyle = {
    // marginTop: '100px',
    // marginLeft: '800px',
    // width: '600px',
    // height: '200px',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    position: 'absolute',
    // width: '600px',
    // height: '200px',
    height: '11em',
    // border: 'solid 1px #000',
    width: '40em',
    top: '22%',
    left: '40%',
    // transform: 'translate(-50%,-50%)',
    // textAlign: 'center',
};

class TweetContainer extends Component {
    static propTypes = {
        dispatchAddTweet: PropTypes.func.isRequired,
        dispatchFetchTweet: PropTypes.func.isRequired,
        dispatchDeleteTweet: PropTypes.func.isRequired,
        dispatchAddFavoriteTweet: PropTypes.func.isRequired,
        dispatchFetchFavoriteTweet: PropTypes.func.isRequired,
        dispatchDeleteFavoriteTweet: PropTypes.func.isRequired,
    };

    componentWillMount() {
        console.log('willMount');
        this.props.dispatchFetchTweet(this.props.token);
        this.props.dispatchFetchFavoriteTweet(this.props.token);
    }

    handleAddTweet(text, token) {
        this.props.dispatchAddTweet(text, token);
    };

    handleDeleteTweet(tweetId, token) {
        this.props.dispatchDeleteTweet(tweetId, token);
    };

    handleAddFavoriteTweet(token, tweetId) {
        this.props.dispatchAddFavoriteTweet(token, tweetId);
    };

    handleDeleteFavoriteTweet(token, tweetId) {
        this.props.dispatchDeleteFavoriteTweet(token, tweetId);
    };

    render() {
        return (
            <div>
                <div style={TweetInputStyle}>
                    <Tweet
                        token={this.props.token}
                        handleAddTweet={this.handleAddTweet.bind(this)}
                        // handleToggleTodo={this.handleToggleTodo.bind(this)}
                    />
                </div>
                <div style={containerStyle}>
                    <Tabs>
                        <Tab
                            icon={<FontIcon className="material-icons">Recent</FontIcon>}
                            label="最近">
                            <TweetCard
                                token={this.props.token}
                                tweets={this.props.tweets}
                                myUserName={this.props.myUserName}
                                handleDeleteTweet={this.handleDeleteTweet.bind(this)}
                                handleAddFavoriteTweet={this.handleAddFavoriteTweet.bind(this)}
                                handleDeleteFavoriteTweet={this.handleDeleteFavoriteTweet.bind(this)}
                            />
                        </Tab>
                        <Tab
                            icon={<FontIcon className="material-icons">favorite</FontIcon>}
                            label="お気に入り"
                            onClick={() => this.props.dispatchFetchFavoriteTweet(this.props.token)}>
                            <FavoriteTweetCard
                                token={this.props.token}
                                favoriteTweets={this.props.favoriteTweets}
                                myUserName={this.props.myUserName}
                                // handleFetchFavoriteTweet={this.handleFetchFavoriteTweet.bind(this)}
                                handleAddFavoriteTweet={this.handleAddFavoriteTweet.bind(this)}
                                handleDeleteFavoriteTweet={this.handleDeleteFavoriteTweet.bind(this)}
                            />
                        </Tab>
                    </Tabs>
                </div>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.tokenReducer.token,
        myUserName: state.tokenReducer.username,
        tweets: state.tweetReducer.tweets,
        favoriteTweets: state.tweetReducer.favoriteTweets,
    }
};

const mapDispatchToProps = (dispatch) => {
    const dispatchFetchTweet = (token) => dispatch(loadTweets(token));
    const dispatchFetchFavoriteTweet = (token) => dispatch(loadFavoriteTweets(token));
    const dispatchAddTweet = (tweetContent, token) => dispatch(addTweet(tweetContent, token));
    const dispatchDeleteTweet = (token, tweetId) => dispatch(deleteTweet(token, tweetId));
    const dispatchAddFavoriteTweet = (token, tweetId) => dispatch(addFavoriteTweet(token, tweetId));
    const dispatchDeleteFavoriteTweet = (token, tweetId) => dispatch(deleteFavoriteTweet(token, tweetId));
    return {
        dispatchFetchTweet,
        dispatchFetchFavoriteTweet,
        dispatchAddTweet,
        dispatchDeleteTweet,
        dispatchAddFavoriteTweet,
        dispatchDeleteFavoriteTweet,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TweetContainer);