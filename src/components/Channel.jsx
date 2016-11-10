import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

class Channel extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let style ={};
    if (this.props.channel.selected) {
      style.backroundColor = "#f0f0f0";
    }
      return (
      <ListItem
        style= {{style}}
      >{this.props.channel.name}</ListItem>
    );
  }
}

export default Channel;
