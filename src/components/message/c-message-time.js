import checks from "@/assets/img/checks.svg";

export default {
  props: {
    time: {
      type: Date,
      default: () => new Date()
    },
    self: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formattedTime() {
      return this.time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
    }
  },
  render(h) {
    return h("div", {
        class: "flex items-center h-[0.875rem] text-xs"
      },
      [
        h("span", {
          class: this.self ? "text-white" : "text-gray-base"
        }, this.formattedTime),
        this.self &&
        h("img", { attrs: { src: checks }, class: "h-2 ml-[0.25rem]" })
      ]);
  }
};
