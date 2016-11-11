import Actions from '../actions';

const channelRef = firebase.database().ref('channels');

let ChannelSource = {
  getChannels: {
    remote(state){
      return new Promise((resolve, reject) => {
        channelRef.once("value",(dataSnapshot) => {
          var channels = dataSnapshot.val();
          resolve(channels);
        });
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
}

export default ChannelSource;
