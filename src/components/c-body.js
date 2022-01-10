import CMessage from "@/components/message/c-message";

export default {
  data() {
    return {
      firstTime: true
    };
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    messages: "scrollChat"
  },
  methods: {
    scrollChat() {
      this.$nextTick(() => {
        const container = this.$refs.container;
        container.scrollTop = container.scrollHeight;
      });
    }
  },
  render(h) {
    const date = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });

    return h("section", {
      ref: "container",
      class: "relative pt-[3.25rem] px-6 bg-white overflow-y-auto"
    }, [
      h("span", { class: "absolute top-4 left-1/2 -translate-x-1/2 text-gray-base text-xs" }, date),
      h("div", {}, [
        this.messages.map((m, i) => h(CMessage, {
          key: m.user.id + m.text + i,
          props: {
            text: m.text,
            user: m.user,
            self: m.self,
            group: m.user.id === this.messages[i - 1]?.user.id
          }
        }))
      ])
    ]);
  }
};
