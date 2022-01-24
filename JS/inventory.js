document.getElementById("submit").onclick = function(e){
    e.preventDefault();
    let itemNumber = document.getElementById("itemNumber").value;
    let itemDescription = document.getElementById("itemDescription").value;
    let itemName = document.getElementById("itemName").value;

    firebase.firestore().collection("inventory").doc().set({
        dbItemNumber: itemNumber,
        dbItemDes: itemDescription,
        dbItemName: itemName
    })
    .then(() => {
        console.log("successfully stored");
    });
}