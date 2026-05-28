import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { createBlock, createTextVNode, createVNode, mergeProps, openBlock, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Layouts/GuestLayout.vue
var _sfc_main = {
	__name: "GuestLayout",
	__ssrInlineRender: true,
	props: {
		title: {
			type: String,
			default: ""
		},
		subtitle: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex font-sans antialiased bg-cream-50" }, _attrs))}><div class="hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col bg-brand-gradient text-white relative overflow-hidden"><div class="absolute -top-20 -left-20 w-72 h-72 bg-brand-400/30 rounded-full blur-3xl pointer-events-none"></div><div class="absolute -bottom-24 -right-16 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl pointer-events-none"></div><div class="relative px-10 pt-10">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"${_scopeId}></path></svg> Back to the shop `);
					else return [(openBlock(), createBlock("svg", {
						class: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M10 19l-7-7m0 0l7-7m-7 7h18"
					})])), createTextVNode(" Back to the shop ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="relative flex-1 flex flex-col justify-center px-10 xl:px-14">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "flex items-center gap-4 mb-12"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center"${_scopeId}><svg class="w-8 h-auto animate-flicker" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M16 2 C 16 2, 6 14, 6 24 C 6 32, 10 38, 16 38 C 22 38, 26 32, 26 24 C 26 14, 16 2, 16 2 Z" fill="#c98a16"${_scopeId}></path><path d="M16 12 C 16 12, 12 18, 12 24 C 12 30, 14 34, 16 34 C 18 34, 20 30, 20 24 C 20 18, 16 12, 16 12 Z" fill="#f9f4e8" opacity="0.85"${_scopeId}></path></svg></div><div${_scopeId}><p class="font-display font-semibold text-2xl leading-tight tracking-display"${_scopeId}>Acme Candles</p><p class="text-xs uppercase tracking-[0.3em] text-white/60 mt-1"${_scopeId}>Hand-poured, small batch</p></div>`);
					else return [createVNode("div", { class: "w-16 h-16 rounded-full bg-white/10 flex items-center justify-center" }, [(openBlock(), createBlock("svg", {
						class: "w-8 h-auto animate-flicker",
						viewBox: "0 0 32 40",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createVNode("path", {
						d: "M16 2 C 16 2, 6 14, 6 24 C 6 32, 10 38, 16 38 C 22 38, 26 32, 26 24 C 26 14, 16 2, 16 2 Z",
						fill: "#c98a16"
					}), createVNode("path", {
						d: "M16 12 C 16 12, 12 18, 12 24 C 12 30, 14 34, 16 34 C 18 34, 20 30, 20 24 C 20 18, 16 12, 16 12 Z",
						fill: "#f9f4e8",
						opacity: "0.85"
					})]))]), createVNode("div", null, [createVNode("p", { class: "font-display font-semibold text-2xl leading-tight tracking-display" }, "Acme Candles"), createVNode("p", { class: "text-xs uppercase tracking-[0.3em] text-white/60 mt-1" }, "Hand-poured, small batch")])];
				}),
				_: 1
			}, _parent));
			_push(`<h1 class="font-display text-3xl xl:text-4xl font-semibold leading-tight mb-4 tracking-display"> The Studio </h1><p class="text-white/75 text-base leading-relaxed mb-10 max-w-sm"> Manage fragrances, batches, orders and journal entries — everything behind the scenes at the candle workshop. </p><ul class="space-y-4"><!--[-->`);
			ssrRenderList([
				{
					icon: "✦",
					text: "Manage product collections and fragrances"
				},
				{
					icon: "✎",
					text: "Publish journal entries and seasonal notes"
				},
				{
					icon: "◇",
					text: "Track wholesale and online orders"
				},
				{
					icon: "⌂",
					text: "Review batch yields and stock levels"
				}
			], (item) => {
				_push(`<li class="flex items-center gap-3 text-white/80 text-sm"><span class="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center text-base shrink-0 text-accent-200">${ssrInterpolate(item.icon)}</span> ${ssrInterpolate(item.text)}</li>`);
			});
			_push(`<!--]--></ul></div><div class="relative px-10 pb-10"><p class="text-white/40 text-xs">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Acme Candles</p></div></div><div class="flex-1 flex flex-col bg-cream-50"><div class="lg:hidden flex items-center justify-between px-6 pt-6 pb-4">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "flex items-center gap-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center"${_scopeId}><svg class="w-5 h-auto" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M16 2 C 16 2, 6 14, 6 24 C 6 32, 10 38, 16 38 C 22 38, 26 32, 26 24 C 26 14, 16 2, 16 2 Z" fill="#c98a16"${_scopeId}></path><path d="M16 12 C 16 12, 12 18, 12 24 C 12 30, 14 34, 16 34 C 18 34, 20 30, 20 24 C 20 18, 16 12, 16 12 Z" fill="#f9f4e8" opacity="0.85"${_scopeId}></path></svg></div><div${_scopeId}><p class="font-display font-semibold text-brand-700 text-lg leading-tight tracking-display"${_scopeId}>Acme Candles</p></div>`);
					else return [createVNode("div", { class: "w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center" }, [(openBlock(), createBlock("svg", {
						class: "w-5 h-auto",
						viewBox: "0 0 32 40",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createVNode("path", {
						d: "M16 2 C 16 2, 6 14, 6 24 C 6 32, 10 38, 16 38 C 22 38, 26 32, 26 24 C 26 14, 16 2, 16 2 Z",
						fill: "#c98a16"
					}), createVNode("path", {
						d: "M16 12 C 16 12, 12 18, 12 24 C 12 30, 14 34, 16 34 C 18 34, 20 30, 20 24 C 20 18, 16 12, 16 12 Z",
						fill: "#f9f4e8",
						opacity: "0.85"
					})]))]), createVNode("div", null, [createVNode("p", { class: "font-display font-semibold text-brand-700 text-lg leading-tight tracking-display" }, "Acme Candles")])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "text-xs text-warm-500 hover:text-brand-600 transition-colors font-medium"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Back to shop `);
					else return [createTextVNode(" Back to shop ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex-1 flex items-center justify-center px-6 py-10 sm:px-10"><div class="w-full max-w-md"><div class="mb-8"><h2 class="font-display text-3xl font-semibold text-warm-900 tracking-display">${ssrInterpolate(__props.title)}</h2>`);
			if (__props.subtitle) _push(`<p class="text-warm-500 text-sm mt-2">${ssrInterpolate(__props.subtitle)}</p>`);
			else _push(`<!---->`);
			_push(`</div>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
