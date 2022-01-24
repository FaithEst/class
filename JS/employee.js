document.getElementById("submit").onclick = function(e){
    e.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let idNumbers = document.getElementById("idNumbers").value;
    let password = document.getElementById("loginPassword").value;
    let fullName = document.getElementById("fullName").value;

    firebase.firestore().collection("employee").doc().set({
        fullNames: fullName,
        dbIdNumber: idNumbers,
        dbEmail: email
    })
    .then(() => {
        console.log("Document successfully written!");
    });


}