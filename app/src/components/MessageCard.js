import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {FlatButton} from 'material-ui';
import TextField from 'material-ui/TextField';

const messageCardStyle = {
  height: 340,
  width: 800,
  margin: 'auto',
};

export class MessageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            errorMessage: ""
        };
        this.send = this.send.bind(this);
        }
        
    send(e){
        var name;
        var email;
        var message;
        e.preventDefault();
        $(".message-form input").filter(function(key, object) {
            if(object.name == 'name'){
                name = object.value;
            }else if(object.name == 'email'){
                email = object.value;
            }else if(object.name == 'message'){
                message = object.value;
            }
        });
        
        $(".message-form textarea").filter(function(key, object) {
            if(object.name == 'message'){
                message = object.value;
            }
        });
        console.log(name + "*" + email + "*" + message);
        $.post({
            url: "/message",
            type: "POST",
            data: JSON.stringify({ 'name': name, 'email': email,'message': message }),
                dataType: "text",
                contentType: "application/json; charset=utf-8",
                success: function(data) {
                    var response = JSON.parse(data);
                    this.setState({
                        error: response.error,
                        errorMessage: response.errorMessage
                    });
                }.bind(this)
            });
    }
    render() {
        return (<div style={{paddingBottom:"50px"}} className="row col-md-offset-4">
            <MuiThemeProvider>
            <Paper style={messageCardStyle} zDepth={1} rounded={false}>
            <div className="row">
            <div className="col-md-12" style={{paddingLeft:"40px", paddingTop:"20px"}}>
            <Subheader style={{fontSize:"20"}}> Send A Message  </Subheader>
            </div>
            </div>
            <div className="message-form">
            <div className="row" style={{height:"103px"}}>
            <div className="col-md-6" style={{paddingLeft:"60px"}}>
            <TextField errorText={(this.state.error == 'name')?this.state.errorMessage:""} name="name" hintText="Name" floatingLabelText="Name"/>
            </div>
            <div className="col-md-6" style={{paddingLeft:"60px", minHeight:"103"}}>
            <TextField errorText={(this.state.error == 'email')?this.state.errorMessage:""} name="email" hintText="Email" floatingLabelText="Email"/>
            </div>
            </div>
            <div className="row">
            <div className="col-md-8" style={{paddingLeft:"60px"}}>
            <TextField errorText={(this.state.error == 'message')?this.state.errorMessage:""} name="message" style={{width:"400px"}} floatingLabelText="Message" multiLine={true} rows={4} rowsMax={4} />
            </div>
            <div className="col-md-4" style={{paddingLeft:"100px", paddingTop:"100px"}} >
            <FlatButton onClick={this.send} label="SEND" primary={true} type="button"/>
            </div>
            </div>
            </div>
            </Paper>
            </MuiThemeProvider>
            </div>);
    }
}
