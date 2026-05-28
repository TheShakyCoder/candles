import { usePage } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/About.vue
var _sfc_main = {
	__name: "About",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "about",
				class: "py-24 lg:py-32 bg-cream-50"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"><div class="lg:col-span-6 order-2 lg:order-1"><div class="relative"><div class="relative aspect-[4/5] w-full overflow-hidden" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #cdd3a8 0%, #8d9656 55%, #565d33 100%)" })}"><div class="absolute inset-0 opacity-10" style="${ssrRenderStyle({
				"background-image": "radial-gradient(circle, #1a1611 1px, transparent 1px)",
				"background-size": "24px 24px"
			})}"></div><svg class="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150 50 Q150 150 150 350" stroke="#1f2215" stroke-width="1.5" fill="none"></path><ellipse cx="120" cy="120" rx="22" ry="9" transform="rotate(-30 120 120)" fill="#1f2215" opacity="0.6"></ellipse><ellipse cx="180" cy="160" rx="22" ry="9" transform="rotate(30 180 160)" fill="#1f2215" opacity="0.6"></ellipse><ellipse cx="115" cy="200" rx="22" ry="9" transform="rotate(-30 115 200)" fill="#1f2215" opacity="0.6"></ellipse><ellipse cx="185" cy="240" rx="22" ry="9" transform="rotate(30 185 240)" fill="#1f2215" opacity="0.6"></ellipse><ellipse cx="120" cy="280" rx="22" ry="9" transform="rotate(-30 120 280)" fill="#1f2215" opacity="0.6"></ellipse><ellipse cx="180" cy="320" rx="22" ry="9" transform="rotate(30 180 320)" fill="#1f2215" opacity="0.6"></ellipse></svg></div><div class="hidden sm:block absolute -bottom-10 -right-6 lg:-right-12 w-60 bg-cream-50 border border-warm-200 p-6 shadow-md"><p class="font-display italic text-warm-700 text-base leading-snug">&quot;Everything here is made by the four of us, on the same bench, in batches of forty.&quot;</p><p class="eyebrow text-warm-500 mt-3">— Eleanor, founder</p></div></div></div><div class="lg:col-span-6 order-1 lg:order-2"><p class="eyebrow text-brand-600 mb-5">Our Story</p><h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display mb-8"> Small batches,<br><span class="italic font-normal text-brand-700">long evenings.</span></h2><p class="text-warm-600 leading-relaxed mb-5 text-[15px]"> Acme Candles began with a single hot plate in a back room above the shop. Ten years on, we still pour every candle by hand — into reusable amber glass, with cotton wicks and fragrance oils blended in-house from botanicals we love. </p><p class="text-warm-600 leading-relaxed mb-10 text-[15px]"> No mass production, no rush. Each batch sits, settles and is checked before it leaves the bench. The result is a slower kind of candle — one made for the rooms you live in, not the shelves you scroll past. </p><div class="flex flex-wrap gap-3 items-center"><a href="#collections" class="inline-flex items-center gap-3 px-8 py-4 bg-brand-700 text-cream-50 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-brand-800 transition-colors"> Browse Collections </a><a href="#contact" class="inline-flex items-center gap-2 px-2 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700"> Visit the workshop </a></div></div></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/About.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
