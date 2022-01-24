firebase.auth().onAuthStateChanged( user => {
    let online = document.getElementById("online");
    if(user){
        online.innerHTML = "Online";
    }
})
document.getElementById("logout").onclick = function(){

    firebase.auth().signOut().then(() =>  {
        alert("successful");
        window.location.href = "index.html";
    })
    
}