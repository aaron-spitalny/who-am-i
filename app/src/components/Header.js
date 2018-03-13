import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {About} from './tabs/About';
import {Projects} from './tabs/Projects';
import {Blog} from './tabs/Blog';
import {Contact} from './tabs/Contact';
import SwipeableViews from 'react-swipeable-views';


const slide =  {
    height: '100%',
    overflow: 'hidden',
    paddingTop: "70px",
    overflowY: "scroll",
};

const headerStyle = {
    backgroundColor: "#eee",
    height:"100px",
    alignText:"center",
    paddingTop:"20px",
    fontFamily: "'Roboto', sans-serif",
    overflow: 'hidden'

};

export class Header extends React.Component {
    render() {
        return (<MuiThemeProvider><div><div><
            AppBar title = "Aaron Spitalny" style={headerStyle}
            titleStyle={{color:"#00796B"}} align="center" zDepth={1}
            showMenuIconButton={false} / ></div>
            <div>
            <TabsExampleSwipeable />
            </div></div>
            </MuiThemeProvider>
        );
    }
}


class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

   handleChange(value){
    window.scrollTo(0, 0)
    this.setState({
      slideIndex: value
    });
  }

  render() {
    return (
      <div><div className="nav-wrapper">
        <Tabs onChange={this.handleChange}  className="nav" value={this.state.slideIndex}>
          <Tab label="ABOUT" style={{backgroundColor: "#fff", color:"#00796B"}} value={0}/>
          <Tab label="PROJECTS" style={{backgroundColor: "#fff", color:"#00796B"}} value={1} />
          <Tab label="BLOG" style={{backgroundColor: "#fff", color:"#00796B"}} value={2} />
          <Tab label="CONTACT" style={{backgroundColor: "#fff", color:"#00796B"}} value={3} />
        </Tabs></div>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
          <div style={slide}>
          <About />
          </div>
          <div style={slide}>
            <Projects />
          </div>
          <div style={slide}>
            <Blog />
          </div>
          <div style={slide}>
            <Contact />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
