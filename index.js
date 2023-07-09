const addItemButton = document.getElementById("btn-add-item");
var itemToAdd = document.getElementById("item-to-add");
var listOfItems = document.getElementById("list-of-items");
var addItemToList = function() {
    var newListItem = document.createElement("li");
    var checkboxForItem = document.createElement("input");
    checkboxForItem.type = "checkbox";
    newListItem.appendChild(checkboxForItem);
    var textInItem = document.createTextNode(itemToAdd.value);
    newListItem.appendChild(textInItem);
    listOfItems.appendChild(newListItem);
}
addItemButton.addEventListener('click', addItemToList);
itemToAdd.addEventListener("keypress", (event) => {
    if (event.key == 'Enter') {
        addItemToList();
    }
})