import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const BlogCard = (props) => (
  <Card style={{cursor: "pointer"}} onClick={()=> window.open(props.blog["blog_link"], '_blank')}>
    <CardMedia>
      <img src={props.blog["image-link"]} alt="" />
    </CardMedia>
    <CardTitle title={props.blog["title"]} subtitle={props.blog["subtitle"]} />
  </Card>
);

export default BlogCard;
