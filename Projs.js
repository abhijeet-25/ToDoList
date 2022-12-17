let screen_to = document.getElementById("screen");
let add = document.getElementById("todo");
let items = document.getElementById("list");
screen_to.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // document.getElementById("add").click();
    var listing = document.createElement('p')
    listing.innerText = screen_to.value
    items.appendChild(listing)
    screen_to.value = '';
    listing.addEventListener('click', function () {
      listing.style.textDecoration = "line-through";
    })
    listing.addEventListener('dblclick', function () {
      items.removeChild(listing)
    })
  }
});
add.addEventListener('click', function () {
  var listing = document.createElement('p')
  listing.innerText = screen_to.value
  items.appendChild(listing)
  screen_to.value = '';
  listing.addEventListener('click', function () {
    listing.style.textDecoration = "line-through";
  })
  listing.addEventListener('dblclick', function () {
    items.removeChild(listing)
  })
})

// function Button_code() {

// }