import Actions from '../actions';

let messageRef = null

let MessageSource = {


    getMessages: {
        remote(state) {
            if (messageRef) {
                messageRef.off();
            }
            messageRef = firebase.database().ref('messages/' +
                state.selectedChannel.key);

            return new Promise((resolve, reject) => {
                messageRef.once("value", (dataSnapshot) => {
                    var messages = dataSnapshot.val();
                    resolve(messages);

                    setTimeout(()=> {
                      messageRef.on("child_added", ((msg) => {
                        let msgVal = msg.val();
                        msgVal.key = msg.key;
                        Actions.messageReceived(msgVal);
                      }));
                    }, 10);
                });
            });
        },
        success: Actions.messagesReceived,
        error: Actions.messagesFailed,
        loading: Actions.messagesLoading
    },

    sendMessage: {
        remote(state) {
            return new Promise((resolve, reject) => {
                if (!messageRef) {
                    return resolve();
                }

                messageRef.push({
                    "message": state.messageInput,
                    "date": new Date().toUTCString(),
                    "author": state.user.displayName,
                    "userId": state.user.uid,
                    "profilePic": state.user.photoURL
                });
                resolve();
            });
        },
        success: Actions.messageSendSuccess,
        error: Actions.messageSendError
    }
}

export default MessageSource;
