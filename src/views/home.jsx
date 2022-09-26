import staticJavascriptLogo from "@static/javascript.svg";

const data = {
  count: 0,
};

export default {
  view: ({ attrs }) => (
    <main>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://mithril.js.org/api.html" target="_blank">
        <img
          src="https://mithril.js.org/logo.svg"
          class="logo mithril"
          alt="JavaScript logo"
        />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
      >
        <img
          src={staticJavascriptLogo}
          class="logo vanilla"
          alt="JavaScript logo"
        />
      </a>
      <h1>
        Hello{" "}
        <span style="text-transform: capitalize">{attrs.projectName}</span>!
      </h1>
      <div class="card">
        <button style="margin-right: 8px;" onclick={() => $ui.go("about/")}>
          Go To About
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
      <p class="read-the-docs">Click on the Vite logo to learn more</p>
    </main>
  ),
};
