import Actions from '../actions';

let messageRef = null

let MessageSource = {
  getMessages: {
    remote(state){
      if (messageRef) {
        messageRef.off();
      }
      debugger;
      messageRef = firebase.database().ref('messages/firebase');

      return new Promise((resolve, reject) => {
        messageRef.once("value",(dataSnapshot) => {
          var messages = dataSnapshot.val();
          resolve(messages);
        });
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed
  }
}

export default MessageSource;
