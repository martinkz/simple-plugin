import { ref as l, openBlock as m, createElementBlock as p, Fragment as r, createElementVNode as o, toDisplayString as u } from "vue";
const c = {
  __name: "SimpleDemoComponent",
  setup(e) {
    const n = l(0);
    return (i, t) => (m(), p(r, null, [
      o("h1", null, u(n.value), 1),
      o("button", {
        onClick: t[0] || (t[0] = (a) => n.value++)
      }, "Add 1")
    ], 64));
  }
};
function _(e) {
  e.component("SimpleDemoComponent", c);
}
export {
  _ as SimpleTestPlugin
};
