var items = [
{
    name: "Future Crimes",
    price: "$17",
    author: "Marc Goodman",
    media: "Hardcover",
    dataId: 0,
    image: "images/41mpdV2VqdL._SX325_BO1,204,203,200_.jpg",
    reviews: []
},
{
    name: "Dead Wake",
    price: "$17",
    author: "Erik Larson",
    media: "Hardcover",
    dataId: 1,
    image: "images/51+kAdUZOyL.jpg",
    reviews: []
},
{
  name: "Finders Keepers",
  price: "$15",
  author: "Stephen King",
  media: "Hardcover",
  dataId: 2,
  image: "images/81EJz58T3CL.jpg",
  reviews: []
},
{
  name: "Bobs Burgers",
  price: "$13",
  author: "Loren Bouchard",
  media: "Paperback",
  dataId: 3,
  image: "images/517mGhxQ+WL.jpg",
  reviews:  []
},
{
  name: "Fallout 4",
  price: "$40",
  author: "Bethesda",
  media: "PS4",
  dataId: 4,
  image: "images/81aoDmHE7hL._SL1500_.jpg",
  reviews: []
},
{
  name: "Resident Evil Origins",
  price: "$40",
  author: "Capcom",
  media: "PS4",
  dataId: 5,
  image: "images/81LFcvyvMPL._SL1500_.jpg",
  reviews: []
},
{
  name: "GTA V",
  price: "$40",
  author: "Rockstar Games",
  media: "PS4",
  dataId: 6,
  image: "images/915vV-zIhmL._SL1500_.jpg",
  reviews: []

},
{
  name: "The Last Of Us",
  price: "$47",
  author: "Sony",
  media: "PS4",
  dataId: 7,
  image: "images/51fR72yjSFL.jpg",
  reviews: []
}];

var previousOrders = [

]

function suggestions() {
  var go = document.getElementById("search-box").value;
  for (var i =0;i < items.length;i++) {
    if(go.toLowerCase() == items[i].name.toLowerCase()) {
      console.log(items[i].name)
      var newDiv = document.createElement("div");
      newDiv.className = "media panel panel-default first-suggestion";
      var divBody = document.createElement("div");
      divBody.className = "media-body media-left";
      var divHeading = document.createElement("h4");
      var heading = document.createTextNode(items[i].name + " - " + items[i].media);
      divHeading.appendChild(heading);
      var divPrice = document.createTextNode("By " + items[i].author + " - " + items[i].price);
      divBody.appendChild(divHeading);
      divBody.appendChild(divPrice);
      newDiv.appendChild(divBody);
      var searchBox = document.getElementById("search-suggestion");
      searchBox.appendChild(newDiv);
    }
    else if(go.toLowerCase() == items[i].media.toLowerCase()) {
      var newDiv = document.createElement("div");
      newDiv.className = "media panel panel-default first-suggestion";
      var divBody = document.createElement("div");
      divBody.className = "media-body media-left";
      var divHeading = document.createElement("h4");
      var heading = document.createTextNode(items[i].name + " by " + items[i].author);
      divHeading.appendChild(heading);
      var divPrice = document.createTextNode(items[i].media + " - " + items[i].price);
      divBody.appendChild(divHeading);
      divBody.appendChild(divPrice);
      newDiv.appendChild(divBody);
      var searchBox = document.getElementById("search-suggestion");
      searchBox.appendChild(newDiv);
    }
    else if(go.toLowerCase() == items[i].author.toLowerCase()) {
      var newDiv = document.createElement("div");
      newDiv.className = "media panel panel-default first-suggestion";
      var divBody = document.createElement("div");
      divBody.className = "media-body media-left";
      var divHeading = document.createElement("h4");
      var heading = document.createTextNode(items[i].name + " by " + items[i].author);
      divHeading.appendChild(heading);
      var divPrice = document.createTextNode(items[i].media + " - " + items[i].price);
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
  row.className = "cart-item-row"
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal")
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  item.className = "cart-item";
  var text = document.createTextNode("Future Crimes");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(17);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);

};

var addFutureButton = document.getElementsByClassName("add-future-button");
for(var i = 0;i < addFutureButton.length;i++) {
  addFutureButton[i].addEventListener("click", addFutureToCart);
}


function addDeadWakeToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  row.className = "cart-item-row"
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  item.className = "cart-item";
  var text = document.createTextNode("Dead Wake");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(17);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addDeadButton = document.getElementById("add-dead-button");
addDeadButton.addEventListener("click", addDeadWakeToCart);

function addFindersToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  row.className = "cart-item-row"
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  item.className = "cart-item";
  var text = document.createTextNode("Finders Keepers");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(15);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addFindersButton = document.getElementById("add-finders-button");
addFindersButton.addEventListener("click", addFindersToCart);

function addBobsToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  row.className = "cart-item-row"
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  item.className = "cart-item";
  var text = document.createTextNode("Bobs Burgers");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price"
  var price = document.createTextNode(13);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addBobsButton = document.getElementById("add-bobs-button");
addBobsButton.addEventListener("click", addBobsToCart);

function addFalloutToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  row.className = "cart-item-row"
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  item.className = "cart-item";
  var text = document.createTextNode("Fallout 4");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price"
  var price = document.createTextNode(40);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addFalloutButton = document.getElementById("add-fallout-button");
addFalloutButton.addEventListener("click", addFalloutToCart);

function addResidentEvilToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  row.className = "cart-item-row"
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  item.className = "cart-item";
  var text = document.createTextNode("Resident Evil Origins");
  item.appendChild(text);
  row.appendChild(item);
  var itemPrice = document.createElement("td");
  itemPrice.className = "cart-price";
  var price = document.createTextNode(40);
  itemPrice.appendChild(price);
  row.appendChild(itemPrice);
}

var addResidentEvilButton = document.getElementById("add-resident-button");
addResidentEvilButton.addEventListener("click", addResidentEvilToCart);

function addGtaToCart() {
  var cart = document.getElementById("shopping-cart");
  var row = document.createElement("tr");
  row.className = "cart-item-row"
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  item.className = "cart-item";
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
  row.className = "cart-item-row"
  var parent = document.getElementById("shoppingTotal").parentNode;
  var total = document.getElementById("shoppingTotal");
  parent.insertBefore(row, total);
  var blankData = document.createElement("td");
  row.appendChild(blankData);
  var item = document.createElement("td");
  item.className = "cart-item";
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

var addCart = document.getElementsByClassName("add-cart")
  for(var i = 0;i < addCart.length;i++) {
    addCart[i].addEventListener("click", updateTotal)
  };

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
  var text = document.createTextNode("$" + total);
  sum.appendChild(text);
}


function openPaymentForm() {
  var paymentForm = document.getElementById("payment-form");
  paymentForm.classList.toggle("hidden");
  var cartTotal = document.getElementById("sum-total");
  shoppingTotal.classList.toggle("bg-success");

  var item = document.getElementsByClassName("item");
  for (var i = 0;i < item.length;i++) {
    item[i].classList.toggle("hidden");
  };
  var heading = document.getElementsByTagName("h3");
  for(var i = 0; i < heading.length;i++) {
    heading[i].classList.toggle("hidden");

  };
};

var checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", openPaymentForm);

function addReview() {
  var id = this.dataset.id;
  for(var i = 0;i < items.length;i++) {
    if(id == items[i].dataId) {
      var heading = document.getElementById("review-heading");
      heading.textContent = items[i].name + " by " + items[i].author;
      var pic = document.getElementById("review-picture");
      pic.setAttribute("src", items[i].image);
      pic.setAttribute("data-id", items[i].dataId)
    }
  }
  var item = document.getElementsByClassName("item");
  for (var i = 0;i < item.length;i++) {
    item[i].classList.toggle("hidden");
  };
  var heading = document.getElementsByTagName("h3");
  for(var i = 0; i < heading.length;i++) {
    heading[i].classList.toggle("hidden");

  };
  var suggestions = document.getElementById("review-box");
  suggestions.classList.toggle("hidden");
}

var reviewButtons = document.getElementsByClassName("add-review");
for (var i = 0;i < reviewButtons.length;i++) {
  reviewButtons[i].addEventListener("click", addReview);
};

function appendReview() {
  var reviewList = document.getElementById("submitted-reviews");
  var appendedReviews = document.getElementsByClassName("item-reviews");
  for(var i = appendedReviews.length-1;i >= 0;i--) {
    reviewList.removeChild(appendedReviews[i]);
  }
  var item = document.getElementById("review-picture");
  var currentItem = item.dataset.id;
  var userReview = document.getElementById("user-review").value;
  items[currentItem].reviews.push(userReview);
    for (var i = 0; i < items[currentItem].reviews.length;i++) {
    var submitted = document.getElementById("submitted-reviews");
    var itemReviews = document.createElement("li");
    itemReviews.className = "list-group-item item-reviews";
    var text = document.createTextNode(items[currentItem].reviews[i]);
    itemReviews.appendChild(text);
    submitted.appendChild(itemReviews);
    var reviewPanel = document.getElementById("reviews-panel");
    reviewPanel.classList.remove("hidden");
  };
}

var submitReview = document.getElementById("submit-review");
  submitReview.addEventListener("click", appendReview);

  function showHome() {
    var item = document.getElementsByClassName("item");
    for (var i = 0;i < item.length;i++) {
      item[i].classList.remove("hidden");
    };
    var heading = document.getElementsByTagName("h3");
    for(var i = 0; i < heading.length;i++) {
      heading[i].classList.remove("hidden");

    };
    var suggestions = document.getElementById("review-box");
    suggestions.classList.add("hidden");

    var reviewPanel = document.getElementById("reviews-panel");
    reviewPanel.classList.add("hidden");

    var reviewList = document.getElementById("submitted-reviews");
    var appendedReviews = document.getElementsByClassName("item-reviews");
    for(var i = appendedReviews.length-1;i >= 0;i--) {
      reviewList.removeChild(appendedReviews[i]);
    }
    var pastOrderPanel = document.getElementById("past-order-panel");
    pastOrderPanel.classList.add("hidden");

    var cart = document.getElementById("cart");
    cart.classList.remove("hidden");
}

var logoPic = document.getElementById("logo-pic");
logoPic.addEventListener("click", showHome);

function submit() {
  var userFirstName = document.getElementById("user-first-name");
  var userLastName = document.getElementById("user-last-name");
  var userAddress = document.getElementById("user-address");
  var userCity = document.getElementById("user-city");
  var userZip = document.getElementById("user-zip");
  var userState = document.getElementById("user-state");
  var userCountry = document.getElementById("user-country");
  var userEmail = document.getElementById("user-email");
  var cardholderName = document.getElementById("cardholder-name");
  var cardNumber = document.getElementById("card-number");
  var cardExpiration = document.getElementById("card-expiration");
  var cardCode = document.getElementById("card-code");
  var total = document.getElementById("sum-total");
  var cartItems = document.getElementsByClassName("cart-item");
  var prices = document.getElementsByClassName("cart-price");
  var order = new Object();
  order.items = [];
  order.prices = [];
  order.total = total.textContent;
  order.firstName = userFirstName.value;
  order.lastName = userLastName.value;
  order.address = userAddress.value;
  order.city = userCity.value;
  order.zip = userZip.value;
  order.state = userState.value;
  order.country = userCountry.value;
  order.email = userEmail.value;
  order.cardholder = cardholderName.value;
  order.cardNumber = cardNumber.value;
  order.cardExpiration = cardExpiration.value;
  order.cardCode = cardCode.value;
  previousOrders.push(order);
  for(var i = 0;i < cartItems.length;i++) {
    order.items.push(cartItems[i].textContent);
    order.prices.push(prices[i].textContent);
  }
  userFirstName.textContent = "";
  var paymentForm = document.getElementById("payment-form");
  paymentForm.classList.toggle("hidden");

  var dropdownItems = document.getElementsByClassName("orders-dropdown-item");
  for(var i = dropdownItems.length-1;i >=0; i--) {
    var ordersDropdown = document.getElementById("orders-dropdown");
    ordersDropdown.removeChild(dropdownItems[i]);
  }

  for(var i = 0;i < previousOrders.length;i++) {
    var ordersDropdown = document.getElementById("orders-dropdown");
    var listItem = document.createElement("li");
    listItem.className = "orders-dropdown-item";
    listItem.dataset.id = i;
    var link = document.createElement("a");
    var text = document.createTextNode("Order #" + (i+1));
    link.appendChild(text);
    listItem.appendChild(link);
    ordersDropdown.appendChild(listItem);
  }
  var item = document.getElementsByClassName("item");
  for (var i = 0;i < item.length;i++) {
    item[i].classList.remove("hidden");
  };
  var cart = document.getElementById("cart");
  cart.classList.toggle("hidden");

  var heading = document.getElementsByTagName("h3");
  for(var i = 0; i < heading.length;i++) {
    heading[i].classList.toggle("hidden");
  };

  function displayOrder() {
    pastOrderHeading = "";
    pastOrderName = "";
    pastOrderAddress = "";
    pastOrderEmail = "";
    pastOrderCard = "";
    var previousItemRow = document.getElementsByClassName("previous-item-row");
    for(var i = previousItemRow.length-1;i >= 0;i--) {
      var pastTotalRow = document.getElementById("past-total-row");
      var parent = pastTotalRow.parentNode;
      parent.removeChild(previousItemRow[i]);
    }
    var id = this.dataset.id;
    var pastOrderHeading = document.getElementById("past-order-heading");
    pastOrderHeading.textContent = "Order #" + (parseInt(id, 10)+1);
    var pastOrderName = document.getElementById("past-order-name");
    pastOrderName.textContent = previousOrders[id].firstName + " " + previousOrders[id].lastName;
    var pastOrderAddress = document.getElementById("past-order-address");
    pastOrderAddress.textContent = previousOrders[id].address + "," + previousOrders[id].city;
    var pastOrderEmail = document.getElementById("past-order-email");
    pastOrderEmail.textContent = previousOrders[id].email;
    var pastOrderCard = document.getElementById("past-order-card");
    pastOrderCard.textContent = previousOrders[id].cardNumber;
    for(var i = 0;i < previousOrders[id].items.length;i++) {
      var row = document.createElement("tr");
      row.className = "previous-item-row"
      var itemData = document.createElement("td");
      var priceData = document.createElement("td");
      var item = document.createTextNode(previousOrders[id].items[i]);
      var price = document.createTextNode(previousOrders[id].prices[i]);
      itemData.appendChild(item);
      priceData.appendChild(price);
      row.appendChild(itemData);
      row.appendChild(priceData);
      var pastTotalRow = document.getElementById("past-total-row");
      var parent = pastTotalRow.parentNode;
      parent.insertBefore(row, pastTotalRow);
      var pastOrderTotal = document.getElementById("past-order-total");
      pastOrderTotal.textContent = previousOrders[id].total;

    }
    var item = document.getElementsByClassName("item");
    for (var i = 0;i < item.length;i++) {
      item[i].classList.add("hidden");
    };
    var heading = document.getElementsByTagName("h3");
    for(var i = 0; i < heading.length;i++) {
      heading[i].classList.add("hidden");
    };
    var cart = document.getElementById("cart");
    cart.classList.add("hidden");

    var pastOrderPanel = document.getElementById("past-order-panel");
    pastOrderPanel.classList.remove("hidden");
  };

  var ordersDropdownItems = document.getElementsByClassName("orders-dropdown-item");
  for(var i = 0;i < ordersDropdownItems.length;i++) {
    ordersDropdownItems[i].addEventListener("click", displayOrder);
  }
  var cart = document.getElementById("cart");
  cart.classList.toggle("hidden");

  emptyCart();

}

var submitButton = document.getElementById("submit-order");
submitButton.addEventListener("click", submit);

function emptyCart() {
  var cartRow = document.getElementsByClassName("cart-item-row");
  var parent = cartRow[0].parentNode;
  for(var i = cartRow.length-1;i >= 0;i--) {
    parent.removeChild(cartRow[i]);
  }
  var remove = document.getElementById("sum-total");
  var parent = document.getElementById("sum-total").parentNode;
  remove.textContent = "";

  shoppingTotal.classList.remove("bg-success");
}

function showSuggestion() {
  var id = parseInt(this.dataset.id, 10);
  var suggestionRow = document.getElementById("suggestions");
  suggestionRow.classList.remove("hidden");
  if(id <= 3) {
    var suggestionHeading = document.getElementById("suggestion-heading");
    suggestionHeading.textContent = "";
    suggestionHeading.textContent = items[0].name;
    var suggestionImage = document.getElementById("suggestion-image");
    suggestionImage.setAttribute("src", items[0].image);
    var suggestionPrice = document.getElementById("suggestion-price");
    suggestionPrice.textContent = items[0].price;
    var suggestionAdd = document.getElementById("suggestion-add-cart");
    suggestionAdd.classList.add("add-future-button");
    var suggestionReview = document.getElementById("suggestion-add-review");
    suggestionReview.setAttribute("data-id", items[0].dataId)
  } else if (id >=4){
    var suggestionHeading = document.getElementById("suggestion-heading");
    suggestionHeading.textContent = "";
    suggestionHeading.textContent = items[4].name;
    var suggestionImage = document.getElementById("suggestion-image");
    suggestionImage.setAttribute("src", items[4].image);
    var suggestionPrice = document.getElementById("suggestion-price");
    suggestionPrice.textContent = items[4].price;
    var suggestionAdd = document.getElementById("suggestion-add-cart");
    suggestionAdd.classList.add("add-fallout-button");
    var suggestionReview = document.getElementById("suggestion-add-review");
    suggestionReview.setAttribute("data-id", items[4].dataId)
  }
}

var addCartButtons = document.getElementsByClassName("add-cart");
for(var i = 0;i < addCartButtons.length;i++) {
  addCartButtons[i].addEventListener("click", showSuggestion)
}
