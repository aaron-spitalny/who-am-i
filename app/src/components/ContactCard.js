import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';



export class ContactCard extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
            <Paper style={{paddingLeft:20, paddingTop:10, paddingBottom:20, marginBottom:25}} zDepth={1} rounded={false}>
            <div style={{paddingTop:50}}>
            <div className="row" style={{paddingBottom:20}}>
            <div className="col-md-2" style={{paddingLeft:15}}>
            <Subheader style={{fontSize:18}}> GitHub: </Subheader>
            </div>
            <div className="col-md-4">
             <a href="https://github.com/aaron-spitalny" target="_blank"><Subheader>aaron-spitalny</Subheader></a>
             </div>
            </div>
            <div className="row" style={{paddingBottom:20}}>
            <div className="col-md-2" style={{paddingLeft:15}}>
            <Subheader style={{fontSize:18}}> DEV: </Subheader>
            </div>
            <div className="col-md-4">
             <a href="https://dev.to/aaronspitalny" target="_blank"><Subheader>aaron-spitalny</Subheader></a>
             </div>
            </div>
            <div className="row" style={{paddingBottom:20}}>
            <div className="col-md-2" style={{paddingLeft:15}}>
            <Subheader style={{fontSize:18}}> Email: </Subheader>
            </div>
            <div className="col-md-4">
             <a href="mailto:aaron.spitalny@stonybrook.edu" target="_top"><Subheader> aaron.spitalny@stonybrook.edu </Subheader></a>
             </div>
            </div>
            </div>
            </Paper>
            </MuiThemeProvider>);
    }
}
