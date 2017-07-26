/**
 * Created by cho.oh on 西暦17/07/26.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Link} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../material_ui_raw_theme_file';

export default class Following extends Component {
    render() {
        const {followings} = this.props;
        console.log(this.props);
        return (
            <div>
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <List>
                            <Subheader>フォローリスト</Subheader>
                            {followings.map((following, i) => (
                                    <Link to={"/profile/" + i}>
                                        <ListItem key={i}
                                                  primaryText={following.username}
                                        />
                                    </Link>
                                )
                            )}
                        </List>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

