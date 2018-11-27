import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';


const style = {
  height: 300,
  width: 900,
  margin: 'auto'
};

export class ProjectCard extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
            <Paper style={{paddingTop:10, paddingBottom:20, marginBottom:25}} zDepth={1} rounded={false}>
            <div className="container">
            <div className="row" style={{paddingTop:10}}>
            <Subheader style={{fontSize:20, paddingLeft:25, width:""}}>{this.props.project.header}</Subheader>
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px"}}>[</Subheader>
            <a href={this.props.project.app_link} target="_blank">
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px", padding:"0"}}>app</Subheader></a>
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px", padding:"0"}}>,&nbsp;</Subheader>
            <a href={this.props.project.source_link} target="_blank">
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px", padding:"0"}}>source</Subheader></a>
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px", padding:"0"}}>]</Subheader>
            </div>
            <div className="row">
            <div className="col-md-3 text-center" style={{paddingLeft:15}}>
            <a href={this.props.project.app_link} target="_blank"><img src={this.props.project.project_image} width="200" height="200" /></a>
            </div>
            <div className="col-md-5 justify-content-center">
            <Subheader style={{paddingTop:"5px", paddingBottom:"5px", lineHeight:"25px"}}>Idea + Features</Subheader>
            <div> <ul>{this.props.project.idea_features.map((item, index) =><li key={index}>{item}</li>)}</ul>  </div>
            </div>
            <div className="col-md-4 justify-content-center">
            <Subheader style={{paddingTop:"5px", paddingBottom:"5px", lineHeight:"25px"}}>Technologies + Libraries</Subheader>
            <div> <ul>{this.props.project.technologies_libraries.map((item, index) =><li key={index}>{item}</li>)}</ul>  </div>
            </div>
            </div>
            </div>
            </Paper>
            </MuiThemeProvider>
        );
    }
}