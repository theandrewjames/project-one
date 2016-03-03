var items = [
{
    name: "Future Crimes",
    price: "Price: $17",
    author: "by Marc Goodman"
},
{
    name: "Dead Wake",
    price: "$17",
    author: "by Erik Larson"
},
{
  name: "Finders Keepers",
  price: "$15",
  author: "by Stephen King"
},
{
  name: "Bobs Burgers",
  price: "$13",
  author: "by Loren Bouchard"
},
{
  name: "Fallout 4",
  price: "$40",
  author: "for PS4"
},
{
  name: "Resident Evil Origins",
  price: "$40",
  author: "for PS4"
},
{
  name: "GTA V",
  price: "$40",
  author: "for PS4"

},
{
  name: "The Last Of Us",
  price: "$47",
  author: "for PS4"
}];

function suggestions() {
  var go = document.getElementById("search-box").value;
  for (var i =0;i < items.length;i++) {
    if(go.toLowerCase() == items[i].name.toLowerCase()) {
      console.log(items[i].name)
      var newDiv = document.createElement("div");
      newDiv.className = "media panel panel-default";
      var divBody = document.createElement("div");
      divBody.className = "media-body media-left";
      var divHeading = document.createElement("h4");
      var heading = document.createTextNode(items[i].name + " " + items[i].author);
      divHeading.appendChild(heading);
      var divPrice = document.createTextNode(items[i].price);
      divBody.appendChild(divHeading);
      divBody.appendChild(divPrice);
      newDiv.appendChild(divBody);
      var searchBox = document.getElementById("search-suggestion");
      searchBox.appendChild(newDiv);

    }
  }
};
var search = document.getElementById("search-box");
search.addEventListener("keyup", suggestions);





function addFutureToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal")
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  var text = document.createTextNode("Future Crimes");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(17);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);

};

var addFutureButton = document.getElementById("addFutureButton");
addFutureButton.addEventListener("click", addFutureToCart);

function addDeadWakeToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  var text = document.createTextNode("Dead Wake");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(17);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addDeadButton = document.getElementById("addDeadButton");
addDeadButton.addEventListener("click", addDeadWakeToCart);

function addFindersToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  var text = document.createTextNode("Finders Keepers");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(15);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addFindersButton = document.getElementById("addFindersButton");
addFindersButton.addEventListener("click", addFindersToCart);

function addBobsToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  var text = document.createTextNode("Bobs Burgers");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price"
  var price = document.createTextNode(13);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addBobsButton = document.getElementById("addBobsButton");
addBobsButton.addEventListener("click", addBobsToCart);

function addFalloutToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  var text = document.createTextNode("Fallout 4");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price"
  var price = document.createTextNode(40);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addFalloutButton = document.getElementById("addFalloutButton");
addFalloutButton.addEventListener("click", addFalloutToCart);

function addResidentEvilToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  var text = document.createTextNode("Resident Evil Origins");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(40);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addResidentEvilButton = document.getElementById("addResidentEvilButton");
addResidentEvilButton.addEventListener("click", addResidentEvilToCart);

function addGtaToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  var text = document.createTextNode("GTA V");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(40);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addGtaButton = document.getElementById("add-gta-button");
addGtaButton.addEventListener("click", addGtaToCart);

function addLastOfUsToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  var text = document.createTextNode("Last Of Us");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(47);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addLastOfUsButton = document.getElementById("last-of-us-button");
addLastOfUsButton.addEventListener("click", addLastOfUsToCart);

var totalButton = document.getElementsByTagName("button");
totalButton = addEventListener("click", updateTotal)

function updateTotal() {
  var total = 0;
  var prices = document.getElementsByClassName("cart-price");
  for (var i = 0;i < prices.length;i++) {
    total += parseInt(prices[i].textContent, 10);
  };
  var remove = document.getElementById("sum-total");
  var parent = document.getElementById("sum-total").parentNode;
  parent.removeChild(remove);
  var newData = document.createElement("td");
  newData.id = "sum-total";
  parent.appendChild(newData);
  var sum = document.getElementById("sum-total");
  var text = document.createTextNode(total);
  sum.appendChild(text);
}
