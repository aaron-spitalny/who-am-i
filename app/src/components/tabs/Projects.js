import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {ProjectCard} from "../ProjectCard"


export class Projects extends React.Component {
    render() {
        return (<div>
            <ProjectCard />
            <div className="row"> 
            </div></div>);
    }
}
