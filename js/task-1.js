const categoriesEl = document.querySelector("#categories");
console.log("Number of categories: ", categoriesEl.querySelectorAll(".item").length);

categoriesEl.querySelectorAll(".item").forEach(category => {
    console.log("Category: ", category.querySelector("h2").textContent);
    console.log("Elements: ", category.querySelectorAll("ul>li").length);
});