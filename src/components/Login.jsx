import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {
  Card,
  CardText,
  RaisedButton
} = mui;


class Login extends React.Component {
  onClick() {
    Actions.login();
  }

  render(){
    return (
      <Card style={{
          'maxWidth':'800px',
          'margin': '30px auto',
          'padding': '50px'
      }}>
        <CardText style={{
            'textAlign': 'center'
        }}>
        To Start chatting away,please log in with your Google Account.
      </CardText>

      <RaisedButton style={{
          display: 'block',
        }}
        onClick={this.onClick.bind(this)}
        label="Log in with Google Account"
      />
    </Card>
    );
  }
}

export default Login;
