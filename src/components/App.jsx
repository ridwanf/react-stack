import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';
import * as firebase from 'firebase';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

// let config = {
//   apiKey: "AIzaSyBzqAYu5xPu8xmYdboiQW9kPk1p0QHBE4k",
//   authDomain: "react-stack-65c96.firebaseapp.com",
//   databaseURL: "https://react-stack-65c96.firebaseio.com",
//   storageBucket: "react-stack-65c96.appspot.com",
//   messagingSenderId: "298137980517"
// };
// firebase.initializeApp(config);


class App extends React.Component {
  constructor(){
    super();
    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render(){

    return (
        <div>
          <AppBar title="Awesome Chat App" />
            <div style={{
                display: 'flex',
                flexFlow: 'row wrap',
                mawWidth: 1200,
                width: '100%',
                margin: '30px auto 30px'
              }}>
            <ChannelList/>
            <MessageList/>
          </div>
          <MessageBox />
        </div>
    );
  }
}

export default App;
