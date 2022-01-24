document.getElementById("sendEmail").onclick = function(){
   let email = document.getElementById("email").value;

    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("successful");
  })
}