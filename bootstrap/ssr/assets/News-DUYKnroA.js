import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { createBlock, createTextVNode, createVNode, mergeProps, openBlock, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Home/Partials/News.vue
var _sfc_main = {
	__name: "News",
	__ssrInlineRender: true,
	setup(__props) {
		const journal = [
			{
				date: "12 May 2026",
				title: "A new spring fragrance: Elderflower &amp; Linen",
				excerpt: "Six months of nose-work, three rounds of blends, and one very patient testing club later — meet the lightest candle we have ever made.",
				tag: "New scent"
			},
			{
				date: "02 May 2026",
				title: "How we blend a fragrance, from idea to bench",
				excerpt: "A look at how a single line in a notebook turns into a thirty-litre batch of finished wax. Spoiler: most of it is waiting.",
				tag: "Workshop notes"
			},
			{
				date: "18 Apr 2026",
				title: "Refills are back — and a little less plastic",
				excerpt: "Send your empty Acme jar back in a returnable pouch and we will pour you a fresh fill at thirty percent off the new candle price.",
				tag: "The shop"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "journal",
				class: "py-24 lg:py-32 bg-cream-100"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-5"><div class="max-w-lg"><p class="eyebrow text-brand-600 mb-5">The Journal</p><h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display"> Notes from <span class="italic font-normal text-brand-700">the bench.</span></h2></div>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/news-updates",
				class: "inline-flex items-center gap-2 self-start text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700 pb-1"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Read the journal <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
					else return [createTextVNode(" Read the journal "), (openBlock(), createBlock("svg", {
						class: "w-3 h-3",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M9 5l7 7-7 7"
					})]))];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="grid md:grid-cols-3 gap-x-8 gap-y-12"><!--[-->`);
			ssrRenderList(journal, (item) => {
				_push(`<article class="group cursor-pointer"><div class="aspect-[4/3] mb-6 overflow-hidden" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #f1e7cb 0%, #cdd3a8 60%, #8d9656 100%)" })}"><div class="w-full h-full opacity-[0.08]" style="${ssrRenderStyle({
					"background-image": "radial-gradient(circle, #1a1611 1px, transparent 1px)",
					"background-size": "22px 22px"
				})}"></div></div><div class="flex items-center justify-between mb-3"><span class="eyebrow text-accent-500">${ssrInterpolate(item.tag)}</span><time class="text-xs text-warm-400">${ssrInterpolate(item.date)}</time></div><h3 class="font-display text-2xl font-medium text-warm-900 tracking-display mb-3 leading-snug group-hover:text-brand-700 transition-colors">${item.title ?? ""}</h3><p class="text-sm text-warm-600 leading-relaxed mb-5">${ssrInterpolate(item.excerpt)}</p><span class="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-brand-700"> Read on <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/News.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
