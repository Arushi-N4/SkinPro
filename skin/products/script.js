const searchBtn = document.getElementById('search-btn');
const productsContainer = document.getElementById('products');
searchBtn.addEventListener('click', findProducts);

function findProducts() {
  const skinType = document.getElementById("skinType").value;
  const concern = document.getElementById("concern").value;

  fetch('../skinpro.json')
    .then(response => response.json())
    .then(data => {
      const recommendedProducts = data.filter(product =>
        product["Skin type"].includes(skinType) && product["Concern"].includes(concern)
      );
      displayProducts(recommendedProducts);
    })
    .catch(error => console.error('Error fetching products:', error));
}

function displayProducts(products) {
  productsContainer.innerHTML = "";
  if (products.length === 0) {
    productsContainer.innerHTML = "<p>No products found for the selected criteria.</p>";
  } else {
    const ul = document.createElement("ul");
    products.forEach(product => {
      const li = document.createElement("li");
      li.classList.add("product-container");

      const link = document.createElement("a");
      link.href = product.product_url;
      link.classList.add("product-link");
      li.appendChild(link);

      const img = document.createElement("img");
      img.src = product.product_pic;
      img.alt = product.Product;
      img.classList.add("product-img");
      link.appendChild(img);

      const productName = document.createElement("div");
      productName.textContent = product.Product;
      productName.classList.add("product-name");
      li.appendChild(productName);

      ul.appendChild(li);
    });
    productsContainer.appendChild(ul);
  }
}

