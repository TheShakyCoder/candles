import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Events.vue
var _sfc_main = {
	__name: "Events",
	__ssrInlineRender: true,
	setup(__props) {
		const bestsellers = [
			{
				no: "No. 01",
				title: "Fig &amp; Black Pepper",
				notes: "Green fig · Cracked pepper · Vetiver",
				price: "£32",
				tag: "Bestseller",
				tagColor: "bg-brand-700 text-cream-50",
				swatch: "linear-gradient(135deg, #cdd3a8 0%, #6f7841 60%, #383d24 100%)"
			},
			{
				no: "No. 02",
				title: "Damson &amp; Rose",
				notes: "Stewed damson · Damask rose · Oak",
				price: "£34",
				tag: "New",
				tagColor: "bg-accent-500 text-cream-50",
				swatch: "linear-gradient(135deg, #e0bbc1 0%, #a85f6c 50%, #4a1f2c 100%)"
			},
			{
				no: "No. 03",
				title: "Sea Holly",
				notes: "Salt air · Coastal grass · Driftwood",
				price: "£32",
				tag: "Coastal",
				tagColor: "bg-scent-eucal text-cream-50",
				swatch: "linear-gradient(135deg, #c8d4cc 0%, #5b7a6a 60%, #2f4338 100%)"
			},
			{
				no: "No. 04",
				title: "Cedar &amp; Smoke",
				notes: "Smouldering cedar · Tobacco leaf · Amber",
				price: "£34",
				tag: "Workshop pick",
				tagColor: "bg-scent-cedar text-cream-50",
				swatch: "linear-gradient(135deg, #c8a87a 0%, #7b5a3d 60%, #3a2818 100%)"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "bestsellers",
				class: "py-24 lg:py-32 bg-cream-50"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-5"><div class="max-w-lg"><p class="eyebrow text-brand-600 mb-5">Bestsellers</p><h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display"> The ones <span class="italic font-normal text-brand-700">returning</span> regulars buy again. </h2></div><a href="#collections" class="inline-flex items-center gap-2 self-start text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700 pb-1"> View all candles <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"><!--[-->`);
			ssrRenderList(bestsellers, (candle) => {
				_push(`<article class="group cursor-pointer"><div class="relative aspect-square overflow-hidden mb-5" style="${ssrRenderStyle({ background: candle.swatch })}"><div class="absolute inset-0 opacity-[0.08]" style="${ssrRenderStyle({
					"background-image": "radial-gradient(circle, white 1px, transparent 1px)",
					"background-size": "18px 18px"
				})}"></div><span class="${ssrRenderClass([candle.tagColor, "absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold"])}">${ssrInterpolate(candle.tag)}</span><div class="absolute inset-0 flex items-end justify-center pb-6 transition-transform duration-700 group-hover:scale-105"><div class="relative"><svg class="absolute -top-7 left-1/2 -translate-x-1/2 w-5 h-auto animate-flicker" viewBox="0 0 32 40" fill="none"><path d="M16 2 C 16 2, 6 14, 6 24 C 6 32, 10 38, 16 38 C 22 38, 26 32, 26 24 C 26 14, 16 2, 16 2 Z" fill="#fef3d4"></path></svg><div class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[1.5px] h-2 bg-warm-900/70"></div><div class="w-20 h-24 rounded-t-sm rounded-b-lg bg-gradient-to-b from-cream-50/60 via-cream-50/30 to-cream-50/50 backdrop-blur-sm border border-cream-50/30"><div class="h-2 w-full bg-cream-50/80 rounded-t-sm"></div></div></div></div></div><p class="eyebrow text-warm-400 mb-2">${ssrInterpolate(candle.no)}</p><h3 class="font-display text-xl font-medium text-warm-900 tracking-display mb-2 leading-snug group-hover:text-brand-700 transition-colors">${candle.title ?? ""}</h3><p class="text-xs text-warm-500 mb-4 italic leading-relaxed">${candle.notes ?? ""}</p><div class="flex items-center justify-between"><p class="font-display text-base text-warm-900">${ssrInterpolate(candle.price)}</p><span class="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-700 group-hover:underline">Add to cart</span></div></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Events.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
