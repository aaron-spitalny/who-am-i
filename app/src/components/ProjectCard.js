import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';


const style = {
  height: 300,
  width: 900,
  margin: 'auto',
};

export class ProjectCard extends React.Component {
    render() {
        return (
            <div style={{paddingBottom:"50px"}} className="row col-md-offset-4">
            <MuiThemeProvider>
            <Paper style={style} zDepth={1} rounded={false}>
            <div className="row" style={{paddingTop:10}}>
            <Subheader style={{fontSize:20, paddingLeft:"40px", width:""}}>TIC-TAC-TOE</Subheader>
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px"}}>[</Subheader>
            <a href="https://damp-eyrie-68044.herokuapp.com" target="_blank">
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px", padding:"0"}}>app</Subheader></a>
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px", padding:"0"}}>,&nbsp;</Subheader>
            <a href="https://github.com/aaron-spitalny/tic-tac-toe" target="_blank">
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px", padding:"0"}}>source</Subheader></a>
            <Subheader style={{display: "inline-block", width:"", lineHeight: "44px", padding:"0"}}>]</Subheader>
            </div>
            <div className="row">
            <div className="col-md-3" style={{paddingLeft:30}}>
            <a href="https://damp-eyrie-68044.herokuapp.com" target="_blank"><img src="img/tic-tac-toe.png" width="200" height="200" /></a>
            </div>
            <div className="col-md-4" style={{paddingRight:60}}>
            <Subheader style={{paddingTop:"5px", paddingBottom:"5px", lineHeight:"25px"}}>Idea + Features</Subheader>
            <div> <ul>
            <li>Fun tic-tac-toe game</li>
            <li>JWT sessions</li>
            <li>View game history</li>
            <li>JWT authentication</li>
            <li>Email verification</li>
            </ul>  
            </div>
            </div>
            <div className="col-md-5" style={{paddingRight:60}}>
            <Subheader style={{paddingTop:"5px", paddingBottom:"5px", lineHeight:"25px"}}>Technologies + Libraries</Subheader>
            <div> <ul>
            <li>MERN web stack</li>
            <li>Mongoose</li>
            <li>Nodemailer</li>
            <li>Material-UI</li>
            </ul>            
            </div>
            </div>
            </div>
            </Paper>
            </MuiThemeProvider>
            </div>);
    }
}
