import { defineComponent, mergeProps, unref, useSSRContext, createApp } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { RouterView, createRouter, createMemoryHistory } from "vue-router";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-full" }, _attrs))}><header class="px-5 bg-[#181818]"><h1 class="h-[50px] text-2xl flex items-center m-0 text-white font-semibold"> TaskFlow </h1></header>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  { path: "/", component: () => import("./assets/HomeView-PqJZc0u3.js") },
  { path: "/new", component: () => import("./assets/NewView-BK9YeG4l.js") }
];
const router = createRouter({
  history: createMemoryHistory(),
  routes
});
createApp(_sfc_main).use(router).mount("#app");
