import { ssrRenderAttrs, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Stats.vue
var _sfc_main = {
	__name: "Stats",
	__ssrInlineRender: true,
	setup(__props) {
		const stats = [
			{
				value: "10",
				label: "Years in the studio"
			},
			{
				value: "40+",
				label: "Signature fragrances"
			},
			{
				value: "45hr",
				label: "Average burn time"
			},
			{
				value: "100%",
				label: "Soy &amp; rapeseed wax"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-brand-700 text-cream-50 py-14 border-y border-brand-800" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center"><!--[-->`);
			ssrRenderList(stats, (stat, i) => {
				_push(`<div class="${ssrRenderClass([i > 0 ? "lg:border-l lg:border-white/15" : "", "px-2 lg:px-6"])}"><p class="font-display text-4xl sm:text-5xl font-medium tracking-display">${stat.value ?? ""}</p><p class="eyebrow text-cream-100/60 mt-3">${stat.label ?? ""}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Stats.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
