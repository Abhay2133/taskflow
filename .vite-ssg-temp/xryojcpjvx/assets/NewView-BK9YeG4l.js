import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "bg-[#222] flex-1 flex flex-col p-3" }, _attrs))}><div class="container"><div class="flex">`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Back`);
      } else {
        return [
          createTextVNode("Back")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div>New Tasklist</div><div>Options</div></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/NewView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NewView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  NewView as default
};
