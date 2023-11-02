function editRow(button) {
    var row = button.parentNode.parentNode; // Get the row
    var cells = row.getElementsByTagName('td'); 
    var storeCode = cells[0].innerText;
    var storeName = cells[1].innerText;
    var state = cells[2].innerText;
    var city = cells[3].innerText;
    var phoneNumber = cells[4].innerText;
    alert("Editing: Store Code: " + storeCode + ", Store Name: " + storeName);
}
function deleteRow(button) {
    var row = button.parentNode.parentNode; // Get the row
    row.parentNode.removeChild(row);
}