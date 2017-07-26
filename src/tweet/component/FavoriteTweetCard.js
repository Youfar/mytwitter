/**
 * Created by cho.oh on 西暦17/07/26.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText, FlatButton} from "material-ui";
import {connect} from 'react-redux';

class FavoriteTweetCard extends Component {
    static propTypes = {
        token: PropTypes.string.isRequired,
        handleAddFavoriteTweet: PropTypes.func.isRequired,
        handleDeleteFavoriteTweet: PropTypes.func.isRequired,
    };

    // componentWillMount() {
    //     console.log('willMountFavorite');
    //     this.props.handleFetchFavoriteTweet(this.props.token);
    // }

    render() {
        const { favoriteTweets } = this.props
        return (
            <section className="main">
                <ul>
                    {favoriteTweets.map(favoriteTweet => (
                            <Card key={favoriteTweet.favoriteTweetId}>
                                <CardHeader
                                    title={favoriteTweet.tweet.creator.username}
                                    subtitle={favoriteTweet.tweet.tweetDatetime.year + "-"
                                    + favoriteTweet.tweet.tweetDatetime.monthValue + "-"
                                    + favoriteTweet.tweet.tweetDatetime.dayOfMonth + " "
                                    + favoriteTweet.tweet.tweetDatetime.hour + ":"
                                    + favoriteTweet.tweet.tweetDatetime.minute}
                                />
                                <CardText>
                                    {favoriteTweet.tweet.tweetContent}
                                    {/*disable={myUserName===tweet.creator.username ? true : false}*/}
                                </CardText>
                                <CardActions>
                                    <FlatButton label="お気に入り"  onClick={() => this.props.handleAddFavoriteTweet(this.props.token, favoriteTweet.favoriteTweetId)}/>
                                    <FlatButton label="お気に入り削除"  onClick={() => this.props.handleDeleteFavoriteTweet(this.props.token, favoriteTweet.favoriteTweetId)}/>/>
                                </CardActions>
                            </Card>
                        )
                    )}
                </ul>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteTweets: state.tweetReducer.favoriteTweets,
    }
};

export default connect(
    mapStateToProps,
)(FavoriteTweetCard);