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
      return m(App.view["list"], { projectName: "(vite + mithril)" });
    },
  },
  "/edit/:id": {
    render(vnode) {
      return m(App.view["form"], vnode.attrs);
    },
  },
});
