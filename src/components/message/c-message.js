import CMessageTip from "./c-message-tip";
import CMessageTime from "./c-message-time";

export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    text: {
      type: String,
      default: ""
    },
    self: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    marginClass() {
      let marginClass = "mt-4";

      if (this.group) {
        marginClass = "mt-3";
      }
      if (this.group && this.self) {
        marginClass = "mt-[0.375rem]";
      }

      return marginClass;
    },
    borderClasses() {
      return {
        "rounded-tl-[0.325rem]": this.self,
        "rounded-tr-[0.325rem]": this.group && this.self || !this.self,
        "rounded-bl-[0.325rem] rounded-br-[0.325rem]": true
      };
    }
  },
  render(h) {
    return h("div", {
      class: {
        [`flex first:mt-0 ${this.marginClass}`]: true,
        "justify-end": this.self
      }
    }, [
      !this.self && h("img", {
        attrs: { src: this.user.img },
        class: "relative w-8 h-8 mr-3"
      }),

      h("div", {
        class: [
          "relative pt-1 pb-4 pl-2 pr-[5.25rem] max-w-[60%]",
          this.self ? "bg-message-blue" : "bg-message-gray",
          this.borderClasses
        ]
      }, [
        !this.self && h("div", { class: "flex items-center mb-1" }, [
          h("span", { class: "text-gray-dark font-semibold text-sm leading-[1.125rem]" }, [this.user.name]),
          h("span", { class: "text-gray-base text-xs ml-2.5" }, [this.user.position])
        ]),

        h("p", {
          class: [
            "text-sm",
            this.self ? "text-white" : "text-gray-dark"
          ]
        }, this.text),

        h(CMessageTime, {
          props: { self: this.self },
          class: "absolute bottom-[0.25rem] right-[0.325rem]"
        }),

        !(this.group && this.self) &&
        h(CMessageTip, {
          props: { self: this.self }
        })
      ])
    ]);
  }
};
