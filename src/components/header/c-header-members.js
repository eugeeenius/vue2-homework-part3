import users from "@/users"

export default {
  data() {
    return {
      users
    };
  },
  render(h) {
    return h("ul", {
        class: "flex"
      },
      this.users.map(function (user) {
          return h("li", {
            key: user.id,
            class: "relative block -mr-[0.25rem] w-[1.625rem] h-[1.625rem] rounded-full overflow-hidden border border-white"
          }, [
            h("img", {
              attrs: { src: user.img, key: user.id },
              class: "ring ring-white"
            })
          ]);
        }
      )
    );
  }
};
