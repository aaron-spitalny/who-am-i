import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {ProjectCard} from "../ProjectCard"
var data = require('../../../data/project_data');

export class Projects extends React.Component {
    render() {
        return (<div className="container">
            <div className="row justify-content-center">
        <div className="col-md-10"><ProjectCard project={data.projects[0]}/></div>
        </div></div>);
    }
}
