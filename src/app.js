// import store from "./store";
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

  components[moduleName] = ({ data = null, setup = null } = {}) => {
    const $data = data ? data : active.data;
    const $setup = setup ? setup : active.setup;
    return active.view({ data: $data, setup: $setup });
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
