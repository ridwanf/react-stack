import alt from '../alt';

class Actions {
  login(args){
    return (dispatch) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        dispatch(user);
      }).catch(function (error) {
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
