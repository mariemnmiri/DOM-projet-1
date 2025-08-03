// This function runs when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Get all items in the cart
  let items = document.getElementsByClassName("cart-item");

  // Loop through each item
  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    // Get buttons and elements inside the item
    let plusBtn = item.getElementsByClassName("plus")[0];
    let minusBtn = item.getElementsByClassName("minus")[0];
    let qty = item.getElementsByClassName("qty")[0];
    let price = item.getElementsByClassName("price")[0];
    let deleteBtn = item.getElementsByClassName("delete")[0];
    let likeBtn = item.getElementsByClassName("like")[0];

    //  Increase quantity
    plusBtn.addEventListener("click", function () {
      let quantity = parseInt(qty.textContent);
      quantity++;
      qty.textContent = quantity;
      updateTotal();
    });

    //  Decrease quantity
    minusBtn.addEventListener("click", function () {
      let quantity = parseInt(qty.textContent);
      if (quantity > 1) {
        quantity--;
        qty.textContent = quantity;
        updateTotal();
      }
    });

    //  Delete item
    deleteBtn.addEventListener("click", function () {
      item.remove();
      updateTotal();
    });

    //  Like button
    likeBtn.addEventListener("click", function () {
      likeBtn.classList.toggle("liked"); // Change color with CSS
    });
  }

  //  Function to update the total price
  function updateTotal() {
    let total = 0;
    let items = document.getElementsByClassName("cart-item");

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let price = parseFloat(item.getElementsByClassName("price")[0].textContent);
      let quantity = parseInt(item.getElementsByClassName("qty")[0].textContent);
      total += price * quantity;
    }

