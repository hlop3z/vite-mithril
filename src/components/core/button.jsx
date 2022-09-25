import styleCss from "@/plugins/styleCss";

const ctrl = {
  add(data) {
    data.count += 1;
  },
};

export default {
  data: {
    count: 0,
  },
  view({ data, setup }) {
    /* Style - CSS */
    const style = styleCss();
    if (setup) {
      if (setup.color) {
        style.add("background-color", setup.color);
      }
      if (setup["text-color"]) {
        style.add("color", setup["text-color"]);
      }
    }
    /* Click - Method */
    const method = () => ctrl.add(data);
    return (
      <button onclick={method} style={style.css}>
        count is: {data.count}
      </button>
    );
  },
};
