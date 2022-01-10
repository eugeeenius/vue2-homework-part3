import CHeaderMembers from "@/components/header/c-header-members";
import CHeaderInfo from "@/components/header/c-header-info";

export default {
  render(h) {
    return h("header", {
      class: "grid items-center grid-cols-3 grid-row-end-3 top-0 inset-x-0 pl-[0.875rem] pr-8 w-full h-[4.25rem] bg-white border-b border-gray-200"
    }, [
      h(CHeaderMembers),
      h(CHeaderInfo),
      h("div", { class: "inline-flex justify-self-end space-x-1" }, [
        Array.from({ length: 3 }, () => {
          return h("span", { class: "w-[3px] h-[3px] rounded-[50%] bg-gray-base" });
        })
      ])
    ]);
  }
};
