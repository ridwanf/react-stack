import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

var {Card,List} = mui;

class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };

  }

  componentDidMount() {
    const rootRef = firebase.database().ref('messages');
    rootRef.once('value', snap => {
      var messagesVal = snap.val();
      var messages = _(messagesVal)
        .keys()
        .map((messageKey)=> {
          var cloned =_.clone(messagesVal[messageKey]);
          cloned.key = messageKey;
          return cloned;
        })
        .value();

      this.setState({
            messages: messages
          });
    })
  }





  render(){
    var messageNodes = this.state.messages.map((message)=> {
      return (
          <Message message={message.message} key={message.date} />
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
