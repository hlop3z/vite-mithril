const data = {
  greeting: "Hello World",
  count: 0,
};

export default () => ({
  view: () => (
    <main>
      <h1 style="margin-top: 90px;">About</h1>
      <p class="read-the-docs">
        <strong>{data.greeting}</strong> From <strong>Local Variables </strong>
      </p>

      <div class="card">
        <button style="margin-right: 8px;" onclick={() => $ui.go("/")}>
          Go To Home
        </button>
        <br />
        <p class="read-the-docs">
          This Value <strong>Lives Inside</strong> of the <strong>View</strong>
        </p>
        {$ui.component["core/button"]({
          data: data,
          setup: {
            color: "black",
            "text-color": "white",
          },
        })}
        <br />
        <p class="read-the-docs">
          This Value <strong>Lives Inside</strong> of the{" "}
          <strong>Application</strong> itself.
          <br />
          That means is a <strong>Global Value</strong>
        </p>
        <button
          style="color: white; background-color: black;"
          onclick={() => $ui.store["globals"].ctrl.add()}
        >
          count is: {$ui.store["globals"].data.count}
        </button>
        <br />
        {$ui.component["app/hello-world"]()}
      </div>
    </main>
  ),
});
