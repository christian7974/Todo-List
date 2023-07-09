const addItemButton = document.getElementById("btn-add-item");
var itemToAdd = document.getElementById("item-to-add");
var listOfItems = document.getElementById("list-of-items");
var uniqueID = 1;

var addItemToList = function() {
    var newListItem = document.createElement("li");
    var checkboxForItem = document.createElement("input");
    checkboxForItem.type = "checkbox";
    checkboxForItem.id = uniqueID.toString();
    var labelForItem = document.createElement("label");
    var textInItem = document.createTextNode(itemToAdd.value);
    labelForItem.appendChild(textInItem);
    labelForItem.for = uniqueID;
    newListItem.appendChild(checkboxForItem);
    newListItem.appendChild(labelForItem);
    listOfItems.appendChild(newListItem);
    uniqueID++;
    itemToAdd.value = "";
}

addItemButton.addEventListener('click', addItemToList);
itemToAdd.addEventListener("keypress", (event) => {
    if (event.key == 'Enter') {
        addItemToList();
    }
});
var checkboxArray = document.querySelectorAll("input");
var addListeners = function() {
    
};
