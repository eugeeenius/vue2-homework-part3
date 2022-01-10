export default {
  render(h) {
    return h("div", { class: "text-center" }, [
      h("h2", { class: "text-sm leading-[1.125rem] font-semibold text-gray-dark" }, "🦄 Team Unicorns"),
      h("p", { class: "mt-1 text-xs leading-3 text-gray-base" }, "last seen 45 minutes ago")
    ]);
  }
};
