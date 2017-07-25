/**
 * Created by cho.oh on 西暦17/07/25.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { loadTweetsByUserId } from "../../profile/action";
import {Card, CardActions, CardHeader, CardText, FlatButton} from "material-ui";
// import UserList from "../component/UserList";

const followPanelStyle = {
    marginTop: '200px',
    marginLeft: '100px',
    width: '200px',
    height: '200px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // margin: 'auto',
};

class ProfileTweetContainer extends Component {
    static propTypes = {
        dispatchFetchTweetByUserId: PropTypes.func.isRequired,
    };

    componentWillMount() {
        const { targetUserId } = this.props;
        console.log('willMount');
        this.props.dispatchFetchTweetByUserId(targetUserId);
    }

    render() {

        return (
            <div>
                <ul>
                    {this.props.targetTweets.map(targetTweet => (
                        <Card key={targetTweet.tweetId}>
                            <CardHeader
                                title={targetTweet.creator.username}
                                subtitle={targetTweet.tweetDatetime.year + "-"
                                + targetTweet.tweetDatetime.monthValue + "-"
                                + targetTweet.tweetDatetime.dayOfMonth + " "
                                + targetTweet.tweetDatetime.hour + ":"
                                + targetTweet.tweetDatetime.minute}
                            />
                            <CardText>
                                {targetTweet.tweetContent}
                            </CardText>

                        </Card>
                        )
                    )
                    }
                </ul>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        // token: state.tokenReducer.token,
        targetTweets: state.profileReducer.targetTweets,
        // followers: state.followReducer.followers,
    }
};

const mapDispatchToProps = (dispatch) => {
    const dispatchFetchTweetByUserId = (userId) => dispatch(loadTweetsByUserId(userId));
    // const dispatchFetchFollowerListByUserId = (token) => dispatch(getFollowers(token));

    return {
        dispatchFetchTweetByUserId,
        // dispatchFetchFollowerList
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileTweetContainer);