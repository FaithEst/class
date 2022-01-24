document.getElementById("submit").onclick = function(e){
    e.preventDefault();
    let expenseName = document.getElementById("expenseName").value;
    let expenseNumber = document.getElementById("expenseNumber").value;
    let expenseDescription = document.getElementById("expenseDescription").value;

    firebase.firestore().collection("expenses").doc().set({
        expName: expenseName,
        expNumber: expenseNumber,
        expDes: expenseDescription
    })
    .then(() => {
      console.log("successfully stored");
    });
}