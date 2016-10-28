import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

class Channel extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
      return (
      <ListItem>{this.props.channel}</ListItem>
    );
  }
}

export default Channel;
