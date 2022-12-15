export function buttonConfirm() {
  class BotonConfirmar extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const rootDiv = document.createElement("div");
      rootDiv.classList.add("root-div");

      const button = document.createElement("button");
      button.classList.add("button-send");
      button.textContent = "Confirmar";

      const style = document.createElement("style");
      style.textContent = `
            .root-div{
                display: flex;
                flex-direction: column;
                padding: 15px 30px;
                margin: 10px 0;
            }

            .button-send{
                max-width: 100vw; 
                height: 40px;
                color: #000000;
                text-align: center;
                font-size: 20px;
                background-color: #9CBBE9;
                border-radius: 4px;
                border: 0.5px;
            }
        `;

      const styleBack = document.createElement("style");
      styleBack.textContent = `
      .root-div{
          display: flex;
          flex-direction: column;
          padding: 15px 30px;
          margin: 10px 0;
      }

      .button-send{
          max-width: 100vw; 
          height: 40px;
          color: #000000;
          text-align: center;
          font-size: 20px;
          background-color: #FFF;
          border-radius: 4px;
          border: 2px solid black;
      }
  `;

      const flag = this.getAttribute("label");

      if (flag == "back") {
        button.textContent = "Volver";
        rootDiv.appendChild(button);
        shadow.appendChild(styleBack);
        shadow.appendChild(rootDiv);
      } else {
        rootDiv.appendChild(button);
        shadow.appendChild(style);
        shadow.appendChild(rootDiv);
      }
    }
  }

  customElements.define("button-confirm", BotonConfirmar);
}
