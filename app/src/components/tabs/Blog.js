import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import BlogCard from "../BlogCard"
var data = require('../../../data/blog_data.json');

export class Blog extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
        <div className="col-md-4"><BlogCard blog={data.blogs[0]}/></div>
        </div></div>);
    }
}
