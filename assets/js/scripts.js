// Toggle open mobile menu
document.getElementById("burger-menu").addEventListener("click", function () {
  document.body.classList.add("open-menu");
});

// Close mobile menu
document.getElementById("close-menu").addEventListener("click", function () {
  document.body.classList.remove("open-menu");
});

// Resize home category grid
function resizeCategories() {
  let categoryHeight = 0;
  const firstCol = document.querySelector("#categories .row .col");
  if (firstCol) {
    const firstCat = firstCol.querySelector('.category');
    if (firstCat) categoryHeight = `${firstCat.offsetWidth}px`;
  }
  const categories = document.querySelectorAll(".category");
  categories.forEach(function (category) {
    category.style.height = categoryHeight;
  });
}

// Trigger `resizeCategories` when resize event occurs
window.addEventListener('resize', resizeCategories);

// Trigger `resizeCategories` when page is loaded
window.addEventListener('load', resizeCategories);
// Resize home category grid

// Generate list of products
const productsDataList = [
  {
    "name": "Caftan Cyan",
    "price": "500",
    "image": "./assets/images/products/10.jpg"
  },
  {
    "name": "Pantalon marine",
    "price": "100",
    "image": "./assets/images/products/1.jpg"
  },
  {
    "name": "Jean noir",
    "price": "90",
    "image": "./assets/images/products/3.jpg"
  },
  {
    "name": "Snickers rouge",
    "price": "35",
    "image": "./assets/images/products/7.jpg"
  },
  {
    "name": "Pantalon maron",
    "price": "65",
    "image": "./assets/images/products/4.jpg"
  },
  {
    "name": "Air Nike Snicker",
    "price": "40",
    "image": "./assets/images/products/5.jpg"
  },
  {
    "name": "Jean bleu",
    "price": "70",
    "image": "./assets/images/products/2.jpg"
  },
  {
    "name": "Caftan marine",
    "price": "195",
    "image": "./assets/images/products/9.jpg"
  },
  {
    "name": "Air Nike Snicker",
    "price": "50",
    "image": "./assets/images/products/8.jpg"
  },
  {
    "name": "Caftan caramel",
    "price": "640",
    "image": "./assets/images/products/12.jpg"
  },
  {
    "name": "Caftan rouge",
    "price": "450",
    "image": "./assets/images/products/11.jpg"
  },
  {
    "name": "Snicker blanc",
    "price": "20",
    "image": "./assets/images/products/6.jpg"
  }
];

function createProducts() {
  const productsList = document.getElementById('products-list');
  if (productsList) {
    productsDataList.forEach(function (product) {
      const listItem = document.createElement('div');
      listItem.className = 'col product';

      listItem.innerHTML = '<div class="card"><img src="' + product.image + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + product.name + '</h5><div class="price">' + product.price + '<span class="currency">TND</span></div></div></div>';

      productsList.appendChild(listItem);
    });
  }
}

window.addEventListener('load', createProducts);

// Scroll to top
window.onscroll = function () {
  showScrollToTopButton();
};

window.onload = function() {
  showScrollToTopButton();
}

function showScrollToTopButton() {
  var scrollToTopBtn = document.getElementById("scroll-top");

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    scrollToTopBtn.style.display = "block";
  else scrollToTopBtn.style.display = "none";
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("scroll-top").addEventListener("click", scrollToTop);
