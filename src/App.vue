<script>
import CChat from "@/components/c-chat";

export default {
  render(h) {
    return h("div", {
      class: "flex justify-center items-center w-full h-screen bg-slate-500"
    }, [h(CChat)]);
  }
};
</script>

<style>
@import "./assets/css/style";
</style>
