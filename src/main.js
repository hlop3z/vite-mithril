import m from "mithril";

/* CSS */
import "@/style.css";

/* Components */
import App from "./app";

/* App */
window.m = m;
window.$ui = App;

/* Mount */
m.route(document.body, "/home", {
  "/home": {
    render() {
      return m(App.view["home"], { projectName: "(vite + mithril)" });
    },
  },
  "/about": {
    render() {
      return m(App.view["about"]);
    },
  },
});
