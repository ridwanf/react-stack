import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import firebase from 'firebase'
import _ from 'lodash';

var {Card,List} = mui;

class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
  //   this.firebaseRef = new Firebase('https://react-stack-65c96.firebaseio.com/messages');
  //   this.firebaseRef.once("value", (dataSnapshot) => {
  //     var message = dataSnapshot.val();
  //     console.log(message);
  //     this.setState({
  //       messages: messages
  //     });
  //   })
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const messageRef = rootRef.child('message');
    messageRef.on('value', snap => {
      this.setState({
            messages: snap.val()
          });
    })
  }





  render(){
    var messageNodes = this.state.messages.map((message)=> {
      return (
          <Message message={message.message} />
      );
    })
    return (
      <Card style={{
          flexGrow: 2,
          marginLeft: 30

        }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
