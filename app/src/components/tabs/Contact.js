import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {ContactCard} from "../ContactCard"
import {MessageCard} from "../MessageCard"


export class Contact extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-9"><ContactCard /></div>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-9"><MessageCard /></div>
            </div>
            </div>);
    }
}
