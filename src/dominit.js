import Logo from "./logo.png";
import Add from "./add.png";

function DomInit() {
  const container = document.querySelector(".container");
  const brand = document.createElement("div");
  const brandName = document.createElement("div");
  const sidebar = document.createElement("div");
  const main = document.createElement("div");
  const projects = document.createElement("div");
  const addProject = document.createElement("div");
  const logo = new Image();
  const add = new Image();

  brandName.textContent = "TodoList";
  logo.src = Logo;
  logo.alt = "Todo List Logo";
  add.src = Add;
  add.alt = "Plus sign";

  sidebar.classList.add("sidebar");
  brandName.classList.add("brandName");
  main.classList.add("main");
  logo.classList.add("logo");
  brand.classList.add("brand");
  projects.classList.add("projects");
  addProject.classList.add("addProject");

  projects.appendChild(addProject);
  brand.appendChild(logo);
  brand.appendChild(brandName);
  sidebar.appendChild(brand);
  sidebar.appendChild(projects);
  container.appendChild(sidebar);
  container.appendChild(main);
  
  return container;
}

export { DomInit };