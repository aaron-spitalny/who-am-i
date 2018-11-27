import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import Subheader from "material-ui/Subheader";

const style = {
	height: 300,
	width: 900,
	margin: "auto"
};

export class TechnicalWriting extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<Paper
					style={{
						paddingTop: 10,
						paddingBottom: 20,
						marginBottom: 25
					}}
					zDepth={1}
					rounded={false}>
					<div className="container">
						<div className="row" style={{ paddingTop: 10 }}>
							<Subheader
								style={{
									fontSize: 20,
									paddingLeft: 25,
									width: ""
								}}>
								{"Technical Writing"}
							</Subheader>
						</div>
						<div className="row" style={{ paddingBottom: 20 }}>
							<div
								className="col-md-5"
								style={{ paddingLeft: 15 }}>
								<Subheader style={{ fontSize: 18 }}>
									Resume:
								</Subheader>
							</div>
							<div className="col-md-7">
								<a
									href="https://docs.google.com/document/d/1qyuFJMiEI5D0BeyulwGmTDJL-LQbHopThFBAJdHr5RQ/edit?usp=sharing"
									target="_blank">
									<Subheader>Document</Subheader>
								</a>
							</div>
							<div
								className="col-md-5"
								style={{ paddingLeft: 15 }}>
								<Subheader style={{ fontSize: 18 }}>
									News Release:
								</Subheader>
							</div>
							<div className="col-md-7">
								<a
									href="https://docs.google.com/document/d/1fYzXqm34iGiypM8lq4dextkqOUXz9RXpTR81xBkavV8/edit?usp=sharing"
									target="_blank">
									<Subheader>Document</Subheader>
								</a>
							</div>
							<div
								className="col-md-5"
								style={{ paddingLeft: 15 }}>
								<Subheader style={{ fontSize: 18 }}>
									{"Collaborative Project:"}
								</Subheader>
							</div>
							<div className="col-md-7">
								<a
									href="https://docs.google.com/presentation/d/1oY9bLFfK_br9XnvAmYOLn5Z2CBzD22TyfK0D7nSuaNA/edit?usp=sharing"
									target="_blank">
									<Subheader>Document</Subheader>
								</a>
							</div>
						</div>
					</div>
				</Paper>
			</MuiThemeProvider>
		);
	}
}
