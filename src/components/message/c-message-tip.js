import tip from "@/assets/img/top-vector-tip.svg";

export default {
  props: {
    self: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    return h("svg", {
      attrs: {
        viewBox: "0 0 10 12"
      },
      style: {
        transform: !this.self && "translateX(-88%) rotateY(180deg)"
      },
      class: [
        "absolute top-0 w-2",
        this.self ?
          "text-message-blue right-0 translate-x-[88%]" :
          "text-message-gray left-0"
      ]
    }, [
      h("use", {
        attrs: {
          "xlink:href": tip + "#tip"
        }
      })
    ])
  }
};
