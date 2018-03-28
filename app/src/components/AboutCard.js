import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const imageStyle = {
  borderRadius: '50%',
}

const aboutTextStyle = {
    color: "#00796B"
}

export class AboutCard extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
            <Paper style={{paddingTop:50, paddingBottom:50, marginBottom:25}} zDepth={1} rounded={false}>
            <div className="container" style={{padding: 25}}>
            <div className="row text-center">
            <div className="col-md-5">
            <img  style={imageStyle} src={this.props.about.about_image} width="300" height="300" /> 
            </div>
            <div className="col-md-7 justify-content-start" style={{paddingTop:20}}>
            <div style={aboutTextStyle}>{this.props.about.about_text}</div>
            </div>
            </div>
            </div>
            </Paper>
            </MuiThemeProvider>);
    }
}
