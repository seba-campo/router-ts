export function input() {
  class Input extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("label");
      const rootDiv = document.createElement("div");
      rootDiv.classList.add("root-div");

      const style = document.createElement("style");
      style.textContent = `
            .root-div{
                display: flex;
                flex-direction: column;
                padding: 15px 30px;
            }

            .label{
                font-size: 18px;
                margin-bottom: 8px;
            }

            .input{
                border: 2px solid #000000;
                height: 30px;
                padding: 10px 13px;
                border-radius: 4px;
                max-width: 100vw;
            }
        `;

      rootDiv.innerHTML = `
            <label class="label">${label}</label>
            <input class="input" type="text" placeholder="Ingrese su ${label}">
        `;

      shadow.appendChild(style);
      shadow.appendChild(rootDiv);
    }
  }
  customElements.define("input-el", Input);
}
