# **Main** File

```text
./src/main.js
```

## Create a **File(JS)**

```sh
touch ./src/main.js
```

## Write **Code**

```js title="main.js"
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
```
