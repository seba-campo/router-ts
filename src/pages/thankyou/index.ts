export function initThankYou(param) {
  const div = document.createElement("div");
  div.innerHTML = `
      <header-el></header-el>
      <title-el label="Gracias"></title-el>
      <div class="container">
        <p class="parrafo">Toda la información que nos brindaste es muy importante</p>
      </div>
      <button-confirm></button-confirm>
      <footer-el></footer-el>
      `;

  const button = div.querySelector("button-confirm");
  button?.addEventListener("click", () => {
    param.goTo("/welcome");
  });
  return div;
}
