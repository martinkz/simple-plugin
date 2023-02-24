import { ref as l, openBlock as m, createElementBlock as r, Fragment as p, createElementVNode as o, toDisplayString as c } from "vue";
const u = {
  __name: "SimpleDemoComponent",
  setup(e) {
    const n = l(0);
    return (a, t) => (m(), r(p, null, [
      o("h1", null, c(n.value), 1),
      o("button", {
        onClick: t[0] || (t[0] = (i) => n.value++)
      }, "Add 1")
    ], 64));
  }
};
function d(e) {
  e.component("simple-demo-component", u);
}
export {
  d as default
};
