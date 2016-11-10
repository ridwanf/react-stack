import alt from '../alt';

class Actions {
  constructor(){
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed'
    );
  }

  login(args){
    return (dispatch) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        dispatch(user);
      }).catch(function (error) {
        var errorCode = error.code;
        var erorMessage = error.message;
        console.log(error);
        return;
      });
      // firebase.authWithOAuthPopup("google", (error, user)=> {
      //   if (error) {
      //     return;
      //   }
      //
      //   dispatch(user);
      // });
    }
  }
}

export default alt.createActions(Actions);
