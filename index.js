const addItemButton = document.getElementById("btn-add-item");
var itemToAdd = document.getElementById("item-to-add");
var listOfItems = document.getElementById("list-of-items");
var uniqueID = 1;
const clearListButton = document.getElementById("btn-clear-list");
var addItemToList = function() {
    if (itemToAdd.value != "") { // Prevents user from adding blank items to the list
        var newListItem = document.createElement("li");
        var checkboxForItem = document.createElement("input");
        checkboxForItem.type = "checkbox";
        checkboxForItem.id = uniqueID.toString();
        checkboxForItem.className = "list-checkbox"
        var labelForItem = document.createElement("label");
        var textInItem = document.createTextNode(itemToAdd.value);
        labelForItem.appendChild(textInItem);
        newListItem.id = uniqueID;
        labelForItem.for = uniqueID;

        newListItem.appendChild(checkboxForItem);
        newListItem.appendChild(labelForItem);
        listOfItems.appendChild(newListItem);
        uniqueID++;
        // When a user crosses something off of their list, there will be a 4 second cooldown before it is deleted from the list
        checkboxForItem.addEventListener('click', () => { 
            labelForItem.classList.toggle("crossed-out");
            setTimeout(() => {
                newListItem.remove();
            }, "4000");
        });
        itemToAdd.value = "";
    }
}

var clearList = function() {
    var allItems = document.querySelectorAll("li");
    for (var i = 0; i < allItems.length; i++) {
        allItems[i].remove();
    }
}

addItemButton.addEventListener('click', addItemToList);
clearListButton.addEventListener('click', clearList);
itemToAdd.addEventListener("keypress", (event) => {
    if (event.key == 'Enter') {
        addItemToList();
    }
});
var checkboxArray = document.querySelectorAll("input");
