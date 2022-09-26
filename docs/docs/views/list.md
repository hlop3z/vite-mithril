# List **View**

```text
./src/views/{ @View }
```

## Create a **File(JSX)**

```sh
touch ./src/views/list.jsx
```

## Write **Code**

```js title="views/list.jsx"
export default {
  view({ attrs }) {
    const listComponent = $ui.component["list"]();
    return <main>{listComponent}</main>;
  },
};
```
