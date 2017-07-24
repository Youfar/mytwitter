import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Link} from "react-router";

export default class UserList extends Component {
    render() {
        const { users } = this.props
        return (
            <section className="main">
                <ul>
                    <List>
                    <Subheader>ユーザーリスト</Subheader>
                    {users.map(user => (
                        <Link to={"/profile/" + user.userId}>
                            <ListItem key={user.userId}
                                  primaryText={user.username}
                            />
                        </Link>
                        )
                    )}
                    </List>
                </ul>
            </section>
        )
    }
}