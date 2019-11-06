lightbox.option({
    'showImageNumberLabel': false,
    'wrapAround': true,
    'positionFromTop': 125,
    'alwaysShowNavOnTouchDevices': true
})


document.getElementById("search").addEventListener("keyup", filter);

function filter() {
  var x = document.getElementById("search");
  x.value = x.value.toLowerCase();
  console.log(x.value)
}

const gallery = document.querySelectorAll('a[data-title]');

for (let i = 0; i <= gallery.length; i++) {
    console.log(gallery[i])
}

