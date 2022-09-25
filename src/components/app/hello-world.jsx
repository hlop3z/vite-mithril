export default {
  view: () => (
    <fragment>
      <p class="read-the-docs">
        This Value <strong>Lives Inside</strong> of the{" "}
        <strong>Component</strong>
      </p>
      <strong style="color:#b71c1c">Bad Code</strong>
      <br />
      {$ui.component["core/button"]({
        setup: {
          color: "black",
          "text-color": "white",
        },
      })}
      <br />
      <code>
        <small> Used for Demo Purpose Only</small>
      </code>
    </fragment>
  ),
};
