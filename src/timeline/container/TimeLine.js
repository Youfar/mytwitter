import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../material_ui_raw_theme_file';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TweetContainer from "../../tweet/container/TweetContainer";

// const titleStyle = {
//     // marginTop: '100px',
//     // marginLeft: '600px',
//     // position: 'relative',
//     display: flex,
// };

export default class TimeLine extends Component {

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <AppBar
                            title="ホーム"
                            iconElementRight={<FlatButton label="ログアウト" />}
                        />
                        <TweetContainer/>
                    </div>
                </MuiThemeProvider>
            </div>);
    }
}
