import Message from "./Message";

export default class SelfMessage extends Message {
  constructor(text) {
    super(text, true);

    this.user = { id: 0 };
  }
}
