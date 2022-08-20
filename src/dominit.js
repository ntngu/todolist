function dominit() {
  const container = document.querySelector(".container");
  const main = document.createElement("div");
  container.appendChild(main);

  return container;
}

export { dominit };