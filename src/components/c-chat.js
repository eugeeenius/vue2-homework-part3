import SelfMessage from "@/classes/SelfMessage";
import MemberMessage from "@/classes/MemberMessage";

import users from "@/users";
import getMessageText from "@/api/message";

import CHeader from "@/components/header/c-header";
import CBody from "@/components/c-body";
import CInput from "@/components/c-input";

export default {
  data() {
    return {
      messages: []
    };
  },
  MESSAGE_INTERVAL: 10000,
  mounted() {
    setInterval(this.postMemberMessage, this.$options.MESSAGE_INTERVAL);
  },
  methods: {
    postSelfMessage(text) {
      const message = new SelfMessage(text);
      this.messages.push(message);
    },
    async postMemberMessage() {
      const text = await getMessageText();
      const message = new MemberMessage(text, users);
      this.messages.push(message);
    }
  },
  render(h) {
    return h("div", {
      class: "flex flex-col h-full min-w-[30rem] w-[41rem]"
    }, [
      h(CHeader),
      h(CBody, { props: { messages: this.messages }, class: "h-full" }),
      h(CInput, {
        on: {
          send: this.postSelfMessage
        }
      })
    ]);
  }
};
