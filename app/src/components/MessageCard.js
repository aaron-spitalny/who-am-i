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
        $('.message-form')[0].reset();
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
        return (
            <MuiThemeProvider>
            <Paper style={{paddingLeft:20, paddingTop:10, paddingBottom:20, marginBottom:25}} zDepth={1} rounded={false}>
            <div className="row">
            <div className="col-md-12">
            <Subheader style={{fontSize:"20"}}> Send A Message  </Subheader>
            </div>
            </div>
            <form className="message-form">
            <div className="row" style={{paddingLeft:20}}>
            <div className="col-md-6">
            <TextField  id="name" errorText={(this.state.error == 'name')?this.state.errorMessage:""} name="name" hintText="Name" floatingLabelText="Name"/>
            </div>
            <div className="col-md-6">
            <TextField id="email" errorText={(this.state.error == 'email')?this.state.errorMessage:""} name="email" hintText="Email" floatingLabelText="Email"/>
            </div>
            </div>
            <div className="row" style={{paddingLeft:20}}>
            <div className="col-md-7">
            <TextField id="message" errorText={(this.state.error == 'message')?this.state.errorMessage:""} name="message" style={{width: "80%"}} floatingLabelText="Message" multiLine={true} rows={4} rowsMax={4} />
            </div>
            <div className="col-md-2 offset-md-2" style={{paddingTop:"12%", paddingLeft: 0}}>
            <FlatButton onClick={this.send} label="SEND" primary={true} type="button"/>
            </div>
            </div>
            </form>
            </Paper>
            </MuiThemeProvider>);
    }
}
