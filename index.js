// Task 1: Array Manipulation Basics
let shoppingList = [];

//addItem
function addItem(item) {
	//check it to see if item in the shopping list already
	if (!shoppingList.includes(item)) {
		shoppingList.push(item);
	} else {
		console.log("Item already added");
	}
}

//removeItem
function removeItem() {
	shoppingList.pop();
}

//addItem
function displayList() {
	console.log("Shopping List Items : ", shoppingList);
}

//search Item
function filterItems(searchTerm) {
	return shoppingList.filter((item) => item.includes(searchTerm));
}

console.log("Array Manipulation Basics");
addItem("Milk");
addItem("Milk");
addItem("Milk");
addItem("Tomato");
addItem("Tomato");
addItem("Cereals");
addItem("Bananas");
addItem("Maple");
addItem("Silk Milk");
addItem("Ice Cream");
addItem("Potatoes");
console.log("Remove last Item:");
removeItem();
console.log("Display Shopping List:");
displayList();
console.log('SearchTerm is "a" :\n', filterItems("a"));
console.log('SearchTerm is "Mi" :\n', filterItems("Mi"));
