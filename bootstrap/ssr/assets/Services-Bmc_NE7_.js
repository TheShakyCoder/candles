import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Services.vue
var _sfc_main = {
	__name: "Services",
	__ssrInlineRender: true,
	setup(__props) {
		const collections = [
			{
				no: "01",
				title: "Candles",
				desc: "Signature soy &amp; rapeseed candles in amber glass — 40+ scents, 45-hour burn.",
				color: "linear-gradient(135deg, #c98a16 0%, #7d510b 100%)",
				flame: "#fef3d4"
			},
			{
				no: "02",
				title: "Reed Diffusers",
				desc: "Slow-release fragrance in cut-glass bottles — three months of quiet scent.",
				color: "linear-gradient(135deg, #cdd3a8 0%, #565d33 100%)",
				flame: "#f4f5ec"
			},
			{
				no: "03",
				title: "Wax Melts",
				desc: "Small, hand-cut squares for burners — sample our full library of fragrances.",
				color: "linear-gradient(135deg, #e0bbc1 0%, #7d3a4a 100%)",
				flame: "#faf3f4"
			},
			{
				no: "04",
				title: "Gift Sets",
				desc: "Curated trios, ribboned and ready — for hosts, for new homes, for slow Sundays.",
				color: "linear-gradient(135deg, #d2c4a5 0%, #7b5a3d 100%)",
				flame: "#fdfbf6"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "collections",
				class: "py-24 lg:py-32 bg-cream-100"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-16 lg:mb-20 max-w-2xl mx-auto"><p class="eyebrow text-brand-600 mb-5">The Collections</p><h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-display leading-[1.05] text-warm-900 mb-6"> A library of <span class="italic font-normal text-brand-700">fragrance</span></h2><p class="text-warm-600 text-[15px] leading-relaxed"> Four ways into the workshop — candles, diffusers, melts and curated gifts. Every product is hand-poured in small batches and tested at the bench. </p></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"><!--[-->`);
			ssrRenderList(collections, (collection) => {
				_push(`<a href="#bestsellers" class="group block"><div class="relative aspect-[4/5] overflow-hidden mb-5" style="${ssrRenderStyle({ background: collection.color })}"><div class="absolute inset-0 opacity-[0.08]" style="${ssrRenderStyle({
					"background-image": "radial-gradient(circle, white 1px, transparent 1px)",
					"background-size": "20px 20px"
				})}"></div><div class="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105"><svg class="w-16 h-auto opacity-30" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2 C 16 2, 6 14, 6 24 C 6 32, 10 38, 16 38 C 22 38, 26 32, 26 24 C 26 14, 16 2, 16 2 Z"${ssrRenderAttr("fill", collection.flame)}></path></svg></div><p class="absolute top-5 left-5 font-display text-3xl font-medium text-cream-50/90 tracking-display">No. ${ssrInterpolate(collection.no)}</p></div><h3 class="font-display text-2xl font-medium text-warm-900 tracking-display mb-2 group-hover:text-brand-700 transition-colors">${ssrInterpolate(collection.title)}</h3><p class="text-sm text-warm-600 leading-relaxed mb-4">${collection.desc ?? ""}</p><span class="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-brand-700"> Shop ${ssrInterpolate(collection.title)} <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></a>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Services.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
