import m from "mithril";

/* Dynamic Load */
const requireViews = import.meta.globEager("./views/**/*.jsx");
const requireComponents = import.meta.globEager("./components/**/*.jsx");
const requireStore = import.meta.globEager("./store/**/*.store.js");

// Collection of Views
const views = {};

Object.keys(requireViews).forEach((filename) => {
  const moduleName = filename
    .replace("views/", "")
    .replace(/(\.\/|\.jsx)/g, "")
    .replace(/^\w/, (c) => c.toLowerCase());

  views[moduleName] = requireViews[filename].default || requireViews[filename];
});

// Collection of Components

const components = {};

Object.keys(requireComponents).forEach((filename) => {
  const moduleName = filename
    .replace("components/", "")
    .replace(/(\.\/|\.jsx)/g, "")
    .replace(/^\w/, (c) => c.toLowerCase());

  let active =
    requireComponents[filename].default || requireComponents[filename];

  components[moduleName] = (kwargs) => {
    const $data = kwargs.data ? kwargs.data : active.data;
    const $setup = kwargs.setup ? kwargs.setup : active.setup;
    const $kwargs = kwargs ? kwargs : {};
    return m(active, { ...$kwargs, ...{ data: $data, setup: $setup } });
  };
});

// Collection of Store(Reactives)

const store = {};

Object.keys(requireStore).forEach((filename) => {
  const moduleName = filename
    .replace("store/", "")
    .replace(/(\.\/|\.store\.js)/g, "")
    .replace(/^\w/, (c) => c.toLowerCase());

  store[moduleName] = requireStore[filename].default || requireStore[filename];
});

// Export
export default {
  store: store,
  view: views,
  component: components,
  keys: {
    store: Object.keys(store),
    view: Object.keys(views),
    component: Object.keys(components),
  },
  go(path) {
    m.route.set(path);
  },
};
