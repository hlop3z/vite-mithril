class StyleCss {
  constructor() {
    this.$items = {};
  }
  static init() {
    return new StyleCss();
  }
  add(key, value) {
    if (key && value) {
      const val = value.replace(";", "");
      this.$items[key] = `${key}: ${val};`;
    }
  }
  get css() {
    return Object.values(this.$items).join(" ");
  }
}

function styleCss() {
  return StyleCss.init();
}

export default styleCss;
