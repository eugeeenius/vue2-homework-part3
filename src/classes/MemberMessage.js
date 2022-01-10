import Message from "./Message";

export default class MemberMessage extends Message {
  constructor(text, users) {
    super(text);

    this.users = users;

    this.getRandomUser();
  }

  static generateRandomInt(max, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomUser() {
    const index = this.constructor.generateRandomInt(this.users.length);
    this.user = this.users[index];
  }
}
