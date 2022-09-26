const data = {
  message: "Hello World",
  count: 0,
};

export default {
  view({ attrs }) {
    const formComponent = $ui.component["form"]({
      setup: { color: "blue", "text-color": "white" },
      id: attrs.id,
    });
    return (
      <main>
        <h1>ID: {attrs.id}</h1>
        <br />
        {formComponent}
      </main>
    );
  },
};
