const requireModule = import.meta.globEager("./**/*.jsx");

const module = {};

Object.keys(requireModule).forEach((filename) => {
  const moduleName = filename
    .replace(/(\.\/|\.jsx)/g, "")
    .replace(/^\w/, (c) => c.toLowerCase());

  module[moduleName] =
    requireModule[filename].default || requireModule[filename];
});

export default module;
