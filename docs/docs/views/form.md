# Form **Components**

```text
./src/views/{ @View }
```

## Create a **File(JSX)**

```sh
touch ./src/views/form.jsx
```

## Write **Code**

```js title="views/form.jsx"
export default {
  view({ attrs }) {
    const formComponent = $ui.component["form"]({
      id: attrs.id,
      setup: { color: "blue", "text-color": "white" },
    });
    return <main>{formComponent}</main>;
  },
};
```
