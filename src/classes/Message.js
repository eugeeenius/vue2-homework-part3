export default class Message {
  constructor(text, self = false) {
    this.text = text;
    this.user = null;
    this.self = self;
  }
}
