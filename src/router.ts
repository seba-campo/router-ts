import { initWelcome } from "./pages/welcome";
import { initThankYou } from "./pages/thankyou";
import { initStepOne } from "./pages/step-1";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/step-1/,
    component: initStepOne,
  },
  {
    path: /\/thankyou/,
    component: initThankYou,
  },
];

export function initRouter(container: any) {
  if (location.pathname == "/") {
    goTo("/welcome");
  }

  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  handleRoute(location.pathname);
}
