//Get URL parameters
const params = new URLSearchParams(window.location.search);
const itemId = params.get("id");



document.addEventListener("DOMContentLoaded", () => {
  getFoodDetails();
});

//==========================================
// Function: Get foodDetails from food.json
//=========================================
async function getFoodDetails() {
  try {
    const response = await fetch("./assets/js/foods.json");
    const data = await response.json();

    if (response.ok) {
      const foodItem = data[itemId];

      if (foodItem) {
        //populate the the page with the details
        document.querySelector(".detail-title").textContent = foodItem.title;
        document.querySelector(".detail-image").src = foodItem.img;
        document.querySelector(".price").textContent = `$${foodItem.price}`;
        document.querySelector(".detail-text").textContent = foodItem.desc;
      } else {
        throw new Error("Item not found");
      }
    } else {
      throw new Error("Error: The response was not ok.");
    }
  } catch (err) {
    console.log("Error fetching food details...", err);
  }
}
