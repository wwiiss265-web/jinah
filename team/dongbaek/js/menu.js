const categoryNames = {
  all: "전체 메뉴", coffee: "커피", drink: "음료", tea: "티", dessert: "디저트", season: "시즌 메뉴"
};
const categoryButtons = document.querySelectorAll("[data-category]");
const menuItems = [...document.querySelectorAll(".menu-item")];
const categoryTitle = document.querySelector("#category-title");
const menuCount = document.querySelector("#menu-count");
const noMenu = document.querySelector(".no-menu");

function applyCategory(category) {
  let visible = 0;
  menuItems.forEach((item) => {
    const show = category === "all" || item.dataset.category === category;
    item.hidden = !show;
    if (show) visible++;
  });
  categoryTitle.textContent = categoryNames[category] || "전체 메뉴";
  menuCount.textContent = visible;
  noMenu.hidden = visible !== 0;
  categoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });
}
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => applyCategory(button.dataset.category));
});

document.querySelector("#menu-sort")?.addEventListener("change", (event) => {
  const mode = event.target.value;
  const grid = document.querySelector("#menu-list");
  const sorted = [...menuItems].sort((a, b) => {
    if (mode === "low") return Number(a.dataset.price) - Number(b.dataset.price);
    if (mode === "high") return Number(b.dataset.price) - Number(a.dataset.price);
    if (mode === "popular") return Number(a.dataset.popular) - Number(b.dataset.popular);
    return menuItems.indexOf(a) - menuItems.indexOf(b);
  });
  sorted.forEach((item) => grid.appendChild(item));
});

document.querySelectorAll(".pagination button:not(:first-child):not(:last-child)").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".pagination button").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  });
});
