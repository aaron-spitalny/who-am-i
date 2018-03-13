import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {ContactCard} from "../ContactCard"
import {MessageCard} from "../MessageCard"


export class Contact extends React.Component {
    render() {
        return (<div>
            <ContactCard />
            <MessageCard />
            </div>);
    }
}
