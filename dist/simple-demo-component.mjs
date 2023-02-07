import { ref as l, openBlock as m, createElementBlock as p, Fragment as r, createElementVNode as o, toDisplayString as c } from "vue";
const u = {
  __name: "SimpleDemoComponent",
  setup(e) {
    const n = l(0);
    return (i, t) => (m(), p(r, null, [
      o("h1", null, c(n.value), 1),
      o("button", {
        onClick: t[0] || (t[0] = (s) => n.value++)
      }, "Add 1")
    ], 64));
  }
};
function _(e) {
  e.component("SimpleDemoComponent", u);
}
export {
  _ as SimpleTestPlugin
};
