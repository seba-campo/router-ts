import { buttonConfirm } from "./components/button-confirm/button-confirm";
import { header } from "./components/header/header";
import { initRouter } from "./router";
import { footer } from "./components/footer/footer";
import { input } from "./components/input/input";
import { title } from "./components/title/title";

(function () {
  const root = document.querySelector(".root");

  header();
  footer();
  buttonConfirm();
  input();
  title();
  initRouter(root);
})();
