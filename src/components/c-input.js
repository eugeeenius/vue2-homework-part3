import smiley from "@/assets/img/smiley.svg";
import mention from "@/assets/img/mention.svg";
import plane from "@/assets/img/paper-airplane.svg";

export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSendMessage() {
      this.$emit("send", this.value);
      this.value = "";
    },
    onKeydown(e) {
      if (e.keyCode !== 13) return;

      this.onSendMessage()
    },
    onInput(e) {
      this.value = e.target.value;
    }
  },
  render(h) {
    return h(
      "div",
      { class: "flex items-center h-12 pl-6 pr-4 bg-white border-t border-gray-200" },
      [
        h(
          "img", { attrs: { src: smiley }, class: "mr-3" }
        ),
        h(
          "input", {
            ref: "input",
            domProps: { value: this.value },
            attrs: { placeholder: "Start typing..." },
            class: "w-full h-full py-[0.875rem] text-gray-dark outline-none",
            on: {
              input: this.onInput,
              keydown: this.onKeydown,
            }
          }
        ),
        h(
          "img", { attrs: { src: mention }, class: "ml-3 mr-4" }
        ),
        h(
          "img", {
            attrs: { src: plane },
            class: "cursor-pointer",
            on: {
              click: this.onSendMessage
            }
          }
        )
      ]
    );
  }
};
