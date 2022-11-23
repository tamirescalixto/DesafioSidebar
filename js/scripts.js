// Sidebar:

let btn = document.querySelector("btnMenu");
let sidebar = document.querySelector(".sidebar");
let search = document.querySelector(".searchBox");

btnMenu.onclick = function () {
  sidebar.classList.toggle("active");
};

search.onclick = function () {
  sidebar.classList.toggle("active");
};
