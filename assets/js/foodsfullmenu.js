const sectionContainer = document.querySelector(".section-container");
const scrollableBtn = document.querySelector(".scrollable-btns");

const fullMenuTitle = document.querySelector(".full-menu-title");

//Loading food data when window loads
window.addEventListener("DOMContentLoaded", function () {
  getFoodData();

  //getting food data from food.json
  async function getFoodData() {
    try {
      const response = await fetch("./assets/js/foods.json");
      const data = await response.json();

      if (response.ok) {
        displayBtns(data);
        displayFullMenu(data);
      } else {
        fullMenuTitle.textContent =
          "An error occurred! Please come back later.";
        fullMenuTitle.style.color = "rgb(125, 0, 0)";
        throw new Error("Couldn't get food data from food.json");
      }
    } catch (err) {
      fullMenuTitle.textContent = "An error occurred! Please come back later.";
      fullMenuTitle.style.color = "rgb(125, 0, 0)";
      console.log("Error fetching food data...", err);
    }
  }
});

//Dispplaying btns dynamically full menu page
function displayBtns(data) {
  let btns = data.reduce(
    (values, item) => {
      // console.log(values);

      if (!values.includes(item.category)) {
        values.push(item.category);
      }

      return values;
    },
    ["all"]
  );

  const categoryBtns = btns
    .map((item) => {
      return ` <button type="button" class="filter-btn" data-id=${item}>
          ${item}
        </button>`;
    })
    .join("");
  scrollableBtn.innerHTML = categoryBtns;
  // console.log(categoryBtns);

  const filterBtn = document.querySelectorAll(".filter-btn");

  document.querySelector(".filter-btn").classList.add("active"); //selecting the first btn and adding active filter
  filteringFunctionality(data, filterBtn);
}

//displaying the entie food menu
function displayFullMenu(data) {
  let displayMenu = data.map((dataContent) => {
    return ` <article class="menu-item-full">
         <div class="menu-img-container">
          <img src=${dataContent.img} alt="photo" class="photo" id="menu-img" />

           <!-- Overlay text that slides in on hover -->
          <div class="menu-img-overlay">
            <h4 class="product-name-overlay">${dataContent.title}</h4>
          </div>
           </div>

          <div class="item-name">
            <span>
              <h4 class="product-name">${dataContent.title}</h4>
            </span>
          </div>
          <div class="item-price">
            <h3>$${dataContent.price}</h3>
          </div>

          <div class="order-btns">
            <div class="order-btn">
              <a href="checkout.html?id=${dataContent.id - 1}">Order</a>
            </div>
            <div class="detail-btn">
                <!-- Passing product image dynamically to detail page -->
              <a href="food_detail.html?id=${
                dataContent.id - 1
              }">View Detail</a>
            </div>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionContainer.innerHTML = displayMenu;

  //search bar functionality
  const menuItems = document.querySelectorAll(".menu-item-full");
  const searchBar = document.querySelector(".search-bar");

  searchFood(menuItems, searchBar);

  //clicking overlay functionality
  const allOverlay = document.querySelectorAll(".menu-img-overlay");
  onOverlayClick(allOverlay, data);
}

// clicking on overlay
function onOverlayClick(overlayItem, data) {

  overlayItem.forEach((item, index) => {

    item.addEventListener("click", (e) => {
      e.preventDefault();

      // let overlayId = data.map((item) => {
      //    return imgid = item.id - 1;
      // })
      // console.log(overlayId);

      window.location.href = `food_detail.html?id=${index}`;

    });
  });
}

//search functionality
function searchFood(menuItems, searchBar) {
  searchBar.addEventListener("keyup", () => {
    const searchValue = searchBar.value.toLowerCase();
    console.log(searchValue);

    menuItems.forEach((item) => {
      const itemName = item.querySelector("h4").textContent.toLowerCase();
      console.log(itemName);

      if (itemName.includes(searchValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
        // fullMenuTitle.textContent = "Item not found!"
        // fullMenuTitle.style.color = "lightblue";
      }
    });
  });
}

//Filtering functionality when the user clicks on the filter button
function filteringFunctionality(foodData, filterBtn) {
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      filterBtn.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");

      const dataId = e.currentTarget.dataset.id;

      const filteredData = foodData.filter((data) => {
        if (data.category === dataId) {
          return data;
        }
      });
      if (dataId === "all") {
        fullMenuTitle.textContent = "all menu";
        displayFullMenu(foodData);
      } else {
        fullMenuTitle.textContent = dataId;
        displayFullMenu(filteredData);
      }
    });
  });
}
