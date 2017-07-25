import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Link} from "react-router";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '1000px',
        height: 1000,
        overflowY: 'auto',
    },
    gridTile: {
        backgroundColor: '#ffd699',
    },

};

export default class UserList extends Component {
    render() {
        const { users } = this.props
        return (
            <section className="main">
                <div style={styles.root}>
                    {/*<List>*/}
                    {/*<Subheader>ユーザーリスト</Subheader>*/}
                    {/*{users.map(user => (*/}
                        {/*<Link to={"/profile/" + user.userId}>*/}
                            {/*<ListItem key={user.userId}*/}
                                  {/*primaryText={user.username}*/}
                            {/*/>*/}
                        {/*</Link>*/}
                        {/*)*/}
                    {/*)}*/}
                    {/*</List>*/}
                    <GridList cellHeight={100} style={styles.gridList}>
                        <Subheader>ユーザーリスト</Subheader>
                        {users.map(user => (
                            <Link to={"/profile/" + user.userId}>
                                <GridTile key={user.userId}
                                          title={user.username}

                                />
                            </Link>
                            )
                        )}
                    </GridList>
                </div>
            </section>
        )
    }
}