export function initWelcome(param) {
  const div = document.createElement("div");
  div.innerHTML = `
    <header-el></header-el>
    <title-el label="Te damos la bienvenida a esta página"></title-el>
    <div class="container">
      <p class="parrafo-index">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?<p>
    </div>
    <input-el label="Nombre"></input-el>
    <button-confirm></button-confirm>
    <footer-el></footer-el>
    `;

  const button = div.querySelector("button-confirm");
  button?.addEventListener("click", () => {
    param.goTo("/step-1");
  });

  return div;
}
