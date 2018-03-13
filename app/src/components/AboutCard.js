import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const style = {
  height: 500,
  width: 800,
  textAlign: 'center',
  margin: 'auto',
};

const imageStyle = {
  borderRadius: '50%',
}

const aboutTextStyle = {
    color: "#00796B"
}

export class AboutCard extends React.Component {
    render() {
        return (<div style={{paddingBottom:"50px"}}>
            <MuiThemeProvider>
            <Paper style={style} zDepth={1} rounded={false}>
            <div style={{paddingTop:100}}>
            <div className="row">
            <div className="col-md-6">
            <img  style={imageStyle} src="img/aaron.jpg" width="300" height="300" /> 
            </div>
            <div className="col-md-6" style={{paddingTop:20, paddingRight:60, textAlign: "left"}}>
            <div style={aboutTextStyle}> Hi! I&apos;m Aaron. I love solving problems, learning and building new things, I tend to always keep an open mind. </div>
            </div>
            </div>
            </div>
            </Paper>
            </MuiThemeProvider>
            </div>);
    }
}
