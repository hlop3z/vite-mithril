# **Store** Variables

```text
./src/store/{ @Store }
```

## Create a **File(JS)**

```sh
touch ./src/store/user.store.js
```

## Write **Code**

```js title="store/user.store.js"
const data = {
  current: {},
  list: [],
};

const ctrl = {
  async get(id) {
    const result = await m.request({
      method: "GET",
      url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
      withCredentials: true,
    });
    data.current = result;
  },
  async list() {
    const result = await m.request({
      method: "GET",
      url: "https://rem-rest-api.herokuapp.com/api/users",
      withCredentials: true,
    });
    data.list = result.data;
  },
  async save() {
    console.log("Save Data!!!");
  },
};

export default {
  data,
  ctrl,
};
```
