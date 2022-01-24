document.getElementById("signUp").onclick = function(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential)=> {
       console.log(userCredential);
       firebase.firestore().collection("users").doc().set({
           userName: name,
           userEmail: email,
           userPhone: phone,
           userId: userCredential.user.uid
       })
    })
}