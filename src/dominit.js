import Logo from "./logo.png";
import Add from "./add.png";
import Inbox from "./inbox.png";

function DomInit() {
  const container = document.querySelector(".container");
  const brand = document.createElement("div");
  const brandName = document.createElement("div");
  const sidebar = document.createElement("div");
  const main = document.createElement("div");
  const projects = document.createElement("div");
  const inbox = document.createElement("div");
  const addEntry = document.createElement("div");
  const inboxText = document.createTextNode("Inbox");
  const logo = new Image();
  const add = new Image();
  const inboxIcon = new Image();

  brandName.textContent = "TodoList";
  logo.src = Logo;
  logo.alt = "Todo List Logo";
  add.src = Add;
  add.alt = "Plus sign";
  inboxIcon.src = Inbox;

  addEntry.classList.add("addEntry");
  sidebar.classList.add("sidebar");
  brandName.classList.add("brandName");
  main.classList.add("main");
  logo.classList.add("logo");
  brand.classList.add("brand");
  projects.classList.add("projects");
  inbox.classList.add("menuitem");
  inbox.classList.add("inbox");
  
  addEntry.appendChild(add);
  main.appendChild(addEntry);
  inbox.appendChild(inboxIcon);
  inbox.appendChild(inboxText);
  projects.appendChild(inbox);
  brand.appendChild(logo);
  brand.appendChild(brandName);
  sidebar.appendChild(brand);
  sidebar.appendChild(projects);
  container.appendChild(sidebar);
  container.appendChild(main);
  
  return container;
}

export { DomInit };