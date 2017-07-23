import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText, CardTitle, FlatButton} from "material-ui";

export default class TweetCard extends Component {
    static propTypes = {
        handleDeleteTweet: PropTypes.func.isRequired,
        token: PropTypes.string.isRequired,
        // handleToggleTodo: PropTypes.func.isRequired,
        // handleDeleteTodo: PropTypes.func.isRequired,
    };

    render() {
        const { tweets } = this.props
        return (
            <section className="main">
                <ul>
                    {tweets.map(tweet => (
                        <Card key={tweet.tweetId}>
                            <CardHeader
                                title={tweet.creator.username}
                            />
                            <CardText>
                                {tweet.tweetContent}
                            </CardText>
                            <CardActions>
                                <FlatButton label="お気に入り"  />
                                <FlatButton label="削除" onClick={() => this.props.handleDeleteTweet(this.props.token, tweet.tweetId)} />
                            </CardActions>
                        </Card>
                    )
                    )}
                </ul>
            </section>
        )
    }
}