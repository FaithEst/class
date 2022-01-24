
document.getElementById("loginBtn").onclick = function(e){
    e.preventDefault();
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
    .then((userCredential) =>  {
        alert("successful");
        window.location.href = "profile.html";
    }).catch((error) => {
        console.log(error);
    });

}
document.getElementById("loginGoogle").onclick = function(){

    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  })
}