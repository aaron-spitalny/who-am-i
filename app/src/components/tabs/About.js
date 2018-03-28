import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {AboutCard} from "../AboutCard"
var data = require('../../../data/about_data');

export class About extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">
        <div className="col-md-9"><AboutCard about={data}/></div>
        </div></div>);
    }
}
