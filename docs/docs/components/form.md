# Form **Component**

```text
./src/components/{ @MyComponents }
```

## Create a **File(JSX)**

```sh
touch ./src/components/form.jsx
```

## Write **Code**

```js title="components/form.jsx"
import styleCss from "@/plugins/styleCss";

export default {
  oninit: (vnode) => $ui.store["user"].ctrl.get(vnode.attrs.id),
  view(vnode) {
    /* Style - CSS */
    const style = styleCss();
    const { setup } = vnode.attrs;
    if (setup) {
      if (setup.color) {
        style.add("background-color", setup.color);
      }
      if (setup["text-color"]) {
        style.add("color", setup["text-color"]);
      }
    }
    style.add("margin-left", "80px");
    style.add("margin-top", "8px");
    return (
      <form
        onsubmit={(e) => {
          e.preventDefault();
          $ui.store["user"].ctrl.save();
        }}
      >
        <label>First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          value={$ui.store["user"].data.current.firstName}
          oninput={(e) => {
            console.log(e.target.value);
          }}
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          value={$ui.store["user"].data.current.lastName}
          oninput={(e) => {
            console.log(e.target.value);
          }}
        />
        <br />
        <button type="button" onclick={() => $ui.go("/")}>
          Go Back
        </button>
        <button type="submit" style={style.css}>
          Save
        </button>
      </form>
    );
  },
};
```
