export function footer() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var style = document.createElement("style");
      var div = document.createElement("div");

      style.textContent = `
          .footer-div{
              background-color: #FFA0EA;
              height: 233px;
              display: flex;
              justify-content: center;
              align-items: center;
          }
  
          .footer__title{
              font-size: 22px;
              color: black;
          }
          `;

      div.classList.add("footer-div");
      div.innerHTML = `
              <h1 class="footer__title">Footer</h1>
          `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }

  customElements.define("footer-el", Footer);
}
