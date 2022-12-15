export function title() {
  class Title extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("label");

      const rootDiv = document.createElement("div");
      rootDiv.classList.add("root_title-div");

      const title = document.createElement("h1");
      title.classList.add("title");
      title.textContent = label;

      const style = document.createElement("style");
      style.textContent = `
            .root_title-div{
                max-width: 95vw;
                margin: 30px;
            }

            .title{
                margin: 15px 20px;
                font-size: 52px;
                font-weight: 700;
            }
        `;

      rootDiv.appendChild(title);
      rootDiv.appendChild(style);
      shadow.appendChild(rootDiv);
    }
  }

  customElements.define("title-el", Title);
}
