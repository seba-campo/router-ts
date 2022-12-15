export function header() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var style = document.createElement("style");
      style.textContent = `
              .header{
                  display: flex;
                  justify-content: center;
                  background-color: #FF8282;
                  height: 60px;
                  align-items: center;
              }
              .header__title{
                color: black;
                font-size: 23px;
              }
          `;

      var div = document.createElement("div");

      var h1 = document.createElement("h1");
      h1.textContent = "Header";
      h1.classList.add("header__title");

      div.classList.add("header");
      div.appendChild(h1);

      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }

  customElements.define("header-el", Header);
}
