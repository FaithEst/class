firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log("user signed in");
        let email = user.email;
        console.log(email);
    }else{
        window.location.href = "index.html";
    }
});