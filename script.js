const products = [
  {
    id: 1,
    name: "Headphones",
    category: "electronics",
    price: 1999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 2,
    name: "T-Shirt",
    category: "fashion",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "shoes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }
];

let cart = [];

function displayProducts(items) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = items.map(product => `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join("");
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.category === category));
  }
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);

  document.getElementById("cart-count").innerText = cart.length;

  document.getElementById("cart-items").innerHTML = cart.map(item => `
    <div class="cart-item">
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>
    </div>
  `).join("");
displayProducts(products);
