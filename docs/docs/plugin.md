# **Plugins**

> aka **Global Methods**

```text
./src/plugins/styleCss.js
```

## Create a **File(JS)**

```sh
touch ./src/plugins/styleCss.js
```

## Write **Code**

```js title="plugins/styleCss.js"
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
```
