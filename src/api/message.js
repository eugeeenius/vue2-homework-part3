import MemberMessage from "@/classes/MemberMessage";

async function getMessage() {
  try {
    const MIN_ID = 1;
    const MAX_ID = 100;

    const postId = MemberMessage.generateRandomInt(MAX_ID, MIN_ID);
    if (postId === 0) {
      debugger
    }
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`

    const response = await fetch(url)
    const message = await response.json()

    return message?.body || "";
  } catch(e) {
    console.log(e);
  }
}

export default getMessage;
