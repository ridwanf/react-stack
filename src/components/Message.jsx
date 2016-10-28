import React from 'react';
import mui from 'material-ui';

var {ListItem,Avatar} = mui;

class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
      return (
      <ListItem
        leftAvatar={<Avatar
          src="https://scontent.cdninstagram.com/t51.2885-15/e15/11381433_436422003197197_1586132870_n.jpg" />}
        >{this.props.message}</ListItem>
    );
  }
}

export default Message;
