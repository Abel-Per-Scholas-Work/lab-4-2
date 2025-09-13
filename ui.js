let inputValue = document.querySelector("#item");
let addButton = document.querySelector("#addButton");
let removeButton = document.querySelector("#removeButton");
let ul = document.querySelector("#shoppingList");
//shoppingList array
let list = [];
//event listeners
addButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeItem);

// functions
// add items
function addItem() {
	//check to see if the input is empty
	if (!inputValue.value.trim()) {
		alert("No Item Entered");
		return "";
	}
	//check to see if input is already in list
	//case-sensitive
	if (list.includes(inputValue.value)) {
		alert("Item already in the list");
		return "";
	}
	// add to the list
	list.push(inputValue.value);
	displayList();
	// reset the input
	inputValue.value = "";
}

// remove items
function removeItem() {
	if (list.length === 0) {
		alert("No Item to remove");
		return "";
	}
	list.pop();
	displayList();
}

// display list
function displayList() {
	//clear the shopping list
	ul.innerText = "";
	// append to the list to the ul element
	list.map((item) => {
		let li = document.createElement("li");
		li.textContent = item;
		ul.appendChild(li);
	});
}
