const data = {
  message: "Hello World",
  count: 0,
};

export default {
  view({ attrs }) {
    const listComponent = $ui.component["list"]({
      setup: { color: "blue", "text-color": "white" },
    });
    return (
      <main>
        <h1>{attrs.projectName}</h1>
        <br />
        <br />
        {listComponent}
        <br />
        <br />
        <button onclick={() => (data.count += 1)}>
          count is: {data.count}
        </button>
        <br />
        {data.message}
      </main>
    );
  },
};
