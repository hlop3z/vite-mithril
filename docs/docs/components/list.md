# List **Component**

```text
./src/components/{ @MyComponents }
```

## Create a **File(JSX)**

```sh
touch ./src/components/list.jsx
```

## Write **Code**

```js title="components/list.jsx"
export default {
  oninit: () => $ui.store["user"].ctrl.list(),
  view: () => (
    <ul class="user-list">
      {$ui.store["user"].data.list.map((user) => (
        <li
          class="user-list-item"
          onclick={() => $ui.go(`/edit/${user.id}`)}
          key={user.id}
        >
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  ),
};
```
