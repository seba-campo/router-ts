export function initStepOne(param) {
  const div = document.createElement("div");
  div.innerHTML = `
      <header-el></header-el>
      <title-el label="Necesitamos algunos datos más"></title-el>
  
      <input-el label="Email"></input-el>
      <input-el label="Comida favorita"></input-el>



      <button-confirm></button-confirm>
      <button-confirm label="back" id="back"></button-confirm>
      <footer-el></footer-el>
    `;

  const buttonForward = div.querySelector("button-confirm");
  buttonForward?.addEventListener("click", () => {
    param.goTo("/thankyou");
  });

  const buttonBack = div.querySelector("#back");
  buttonBack?.addEventListener("click", () => {
    param.goTo("/welcome");
  });
  return div;
}
