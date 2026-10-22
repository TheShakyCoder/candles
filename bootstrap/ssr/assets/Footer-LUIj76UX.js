import { Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { createBlock, createTextVNode, createVNode, mergeProps, onMounted, onUnmounted, openBlock, ref, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Layouts/Partials/Header.vue
var _sfc_main$3 = {
	__name: "Header",
	__ssrInlineRender: true,
	props: {
		navLinks: Array,
		canLogin: Boolean,
		canRegister: Boolean,
		auth: Object
	},
	setup(__props) {
		const mobileMenuOpen = ref(false);
		const openDropdown = ref(null);
		function closeDropdowns() {
			openDropdown.value = null;
		}
		function handleClickOutside(e) {
			if (e.target.closest("nav") === null) closeDropdowns();
		}
		onMounted(() => {
			document.addEventListener("click", handleClickOutside);
		});
		onUnmounted(() => {
			document.removeEventListener("click", handleClickOutside);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${ssrRenderAttrs(_attrs)}><div class="bg-brand-700 text-cream-50 text-center text-[11px] tracking-[0.25em] uppercase py-2 px-4"> Complimentary UK delivery on orders over £45 </div><nav class="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-warm-200/70"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-20 items-center justify-between">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "flex items-center gap-3 shrink-0"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center shadow-sm"${_scopeId}><svg class="w-5 h-auto animate-flicker" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M16 2 C 16 2, 6 14, 6 24 C 6 32, 10 38, 16 38 C 22 38, 26 32, 26 24 C 26 14, 16 2, 16 2 Z" fill="#c98a16"${_scopeId}></path><path d="M16 12 C 16 12, 12 18, 12 24 C 12 30, 14 34, 16 34 C 18 34, 20 30, 20 24 C 20 18, 16 12, 16 12 Z" fill="#f9f4e8" opacity="0.85"${_scopeId}></path></svg></div><div class="block"${_scopeId}><p class="text-xl font-semibold text-brand-800 leading-none font-display tracking-display"${_scopeId}>Acme Candles</p><p class="text-[10px] text-warm-500 tracking-[0.3em] uppercase leading-none mt-1.5 font-sans font-medium"${_scopeId}>Hand-poured · Small batch</p></div>`);
					else return [createVNode("div", { class: "w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center shadow-sm" }, [(openBlock(), createBlock("svg", {
						class: "w-5 h-auto animate-flicker",
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
					})]))]), createVNode("div", { class: "block" }, [createVNode("p", { class: "text-xl font-semibold text-brand-800 leading-none font-display tracking-display" }, "Acme Candles"), createVNode("p", { class: "text-[10px] text-warm-500 tracking-[0.3em] uppercase leading-none mt-1.5 font-sans font-medium" }, "Hand-poured · Small batch")])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="hidden lg:flex items-center gap-1"><!--[-->`);
			ssrRenderList(__props.navLinks, (link, idx) => {
				_push(`<div class="relative group">`);
				if (!link.children || link.children.length === 0) _push(ssrRenderComponent(unref(Link), {
					href: link.href,
					class: "px-3 py-2 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(link.label)}`);
						else return [createTextVNode(toDisplayString(link.label), 1)];
					}),
					_: 2
				}, _parent));
				else _push(`<button type="button" class="px-3 py-2 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors flex items-center gap-1">${ssrInterpolate(link.label)} <svg class="${ssrRenderClass([{ "rotate-180": openDropdown.value === idx }, "w-3 h-3 transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
				if (link.children && link.children.length > 0 && openDropdown.value === idx) {
					_push(`<div class="absolute left-0 mt-2 w-56 bg-cream-50 border border-warm-200 shadow-lg"><!--[-->`);
					ssrRenderList(link.children, (child, cidx) => {
						_push(ssrRenderComponent(unref(Link), {
							key: cidx,
							href: child.href,
							class: "block px-5 py-3 text-sm text-warm-700 hover:bg-brand-50 hover:text-brand-700 transition-colors border-b border-warm-100 last:border-b-0"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(child.label)}`);
								else return [createTextVNode(toDisplayString(child.label), 1)];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			});
			_push(`<!--]--></div><div class="hidden lg:flex items-center gap-4">`);
			if (__props.canLogin && !_ctx.$page.props.auth?.user) _push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("login"),
				class: "text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-600 hover:text-brand-700 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Account `);
					else return [createTextVNode(" Account ")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (__props.canLogin && _ctx.$page.props.auth?.user) _push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("dashboard"),
				class: "text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-600 hover:text-brand-700 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Studio `);
					else return [createTextVNode(" Studio ")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`<a href="#collections" class="px-6 py-3 bg-brand-700 text-cream-50 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-brand-800 transition-colors"> Shop Now </a></div><button class="lg:hidden p-2 text-warm-700 hover:text-brand-700 transition-colors">`);
			if (!mobileMenuOpen.value) _push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
			else _push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>`);
			_push(`</button></div></div>`);
			if (mobileMenuOpen.value) {
				_push(`<div class="lg:hidden border-t border-warm-200 bg-cream-50 px-4 pb-6 pt-3 space-y-1"><!--[-->`);
				ssrRenderList(__props.navLinks, (link, idx) => {
					_push(`<!--[-->`);
					if (!link.children || link.children.length === 0) _push(`<a${ssrRenderAttr("href", link.href)} class="block px-4 py-3 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-100">${ssrInterpolate(link.label)}</a>`);
					else {
						_push(`<div><button class="w-full text-left px-4 py-3 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors flex items-center justify-between border-b border-warm-100">${ssrInterpolate(link.label)} <svg class="${ssrRenderClass([{ "rotate-180": openDropdown.value === idx }, "w-3 h-3 transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
						if (openDropdown.value === idx) {
							_push(`<div class="ml-4 mt-1 space-y-1"><!--[-->`);
							ssrRenderList(link.children, (child, cidx) => {
								_push(`<a${ssrRenderAttr("href", child.href)} class="block px-4 py-2.5 text-sm text-warm-600 hover:text-brand-700 transition-colors">${ssrInterpolate(child.label)}</a>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					}
					_push(`<!--]-->`);
				});
				_push(`<!--]--><div class="pt-4 flex flex-col gap-3">`);
				if (__props.canLogin && !_ctx.$page.props.auth?.user) _push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("login"),
					class: "block px-4 py-2.5 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-600 hover:text-brand-700 transition-colors"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Account `);
						else return [createTextVNode(" Account ")];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`<a href="#collections" class="block text-center px-4 py-3 bg-brand-700 text-cream-50 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-brand-800 transition-colors"> Shop Now </a></div></div>`);
			} else _push(`<!---->`);
			_push(`</nav></header>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Header.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/CookieConsent.vue
var STORAGE_KEY$1 = "cookie_consent";
var _sfc_main$2 = {
	__name: "CookieConsent",
	__ssrInlineRender: true,
	setup(__props) {
		const visible = ref(false);
		const showDetails = ref(false);
		onMounted(() => {
			try {
				if (!localStorage.getItem(STORAGE_KEY$1)) visible.value = true;
			} catch (e) {
				visible.value = true;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (visible.value) {
				_push(`<div${ssrRenderAttrs(mergeProps({
					role: "dialog",
					"aria-live": "polite",
					"aria-label": "Cookie consent",
					class: "fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
				}, _attrs))}><div class="mx-auto max-w-4xl rounded-2xl bg-warm-900 text-warm-50 shadow-2xl ring-1 ring-warm-50/10"><div class="p-5 sm:p-6"><div class="flex flex-col gap-4 sm:flex-row sm:items-start"><div class="flex-1"><p class="text-sm font-semibold text-accent-400 mb-1">We value your privacy</p><p class="text-sm leading-relaxed text-warm-50/80"> We use cookies to keep the site working and to understand how visitors use it. Essential cookies are always on. You can accept all cookies, reject non-essential ones, or read more below. <a href="#" class="underline hover:text-accent-400 transition-colors">Privacy Policy</a>. </p>`);
				if (showDetails.value) _push(`<div class="mt-4 space-y-3 text-xs text-warm-50/70"><div><p class="font-semibold text-warm-50">Essential</p><p>Required for the site to function (session, security, CSRF). Always on.</p></div><div><p class="font-semibold text-warm-50">Analytics</p><p>Help us understand how the site is used so we can improve it. Optional.</p></div></div>`);
				else _push(`<!---->`);
				_push(`</div><div class="flex flex-col gap-2 sm:w-56 sm:flex-shrink-0"><button type="button" class="rounded-lg bg-accent-400 px-4 py-2 text-sm font-semibold text-warm-900 hover:bg-accent-400/90 transition-colors"> Accept all </button><button type="button" class="rounded-lg border border-warm-50/20 px-4 py-2 text-sm font-medium text-warm-50 hover:bg-warm-50/5 transition-colors"> Reject non-essential </button><button type="button" class="text-xs text-warm-50/60 underline hover:text-warm-50 transition-colors">${ssrInterpolate(showDetails.value ? "Hide details" : "Manage preferences")}</button></div></div></div></div></div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CookieConsent.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/DemoDisclaimer.vue
var STORAGE_KEY = "demo_disclaimer_dismissed";
var _sfc_main$1 = {
	__name: "DemoDisclaimer",
	__ssrInlineRender: true,
	setup(__props) {
		const visible = ref(false);
		const hideTrigger = ref(false);
		const BOT_PATTERN = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|whatsapp|telegrambot|discordbot|slackbot|twitterbot|google-inspectiontool|chrome-lighthouse|headlesschrome/i;
		function isBot() {
			if (typeof navigator === "undefined" || !navigator.userAgent) return false;
			return BOT_PATTERN.test(navigator.userAgent);
		}
		onMounted(() => {
			if (isBot()) {
				hideTrigger.value = true;
				return;
			}
			try {
				if (!localStorage.getItem(STORAGE_KEY)) visible.value = true;
			} catch (e) {
				visible.value = true;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			if (!visible.value && !hideTrigger.value) _push(`<button type="button" aria-label="Show demo notice" class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-accent-400 text-warm-900 shadow-2xl hover:bg-accent-400/90 transition-colors"><span class="absolute inset-0 rounded-full bg-accent-400 animate-ping opacity-75"></span><svg class="relative w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></button>`);
			else _push(`<!---->`);
			if (visible.value) {
				_push(`<div role="dialog" aria-modal="true" aria-labelledby="demo-disclaimer-title" class="fixed inset-0 z-[60] flex items-center justify-center px-4"><div class="absolute inset-0 bg-warm-900/70 backdrop-blur-sm"></div>`);
				if (visible.value) _push(`<div class="relative w-full max-w-md rounded-2xl bg-warm-50 text-warm-900 shadow-2xl ring-1 ring-warm-900/10"><button type="button" aria-label="Dismiss" class="absolute top-3 right-3 rounded-full p-1.5 text-warm-500 hover:bg-warm-900/5 hover:text-warm-900 transition-colors"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"></path></svg></button><div class="p-6 sm:p-8"><div class="flex items-center gap-3 mb-4"><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-400/15 text-accent-400"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span><p class="text-xs font-semibold tracking-[0.22em] uppercase text-accent-400"> Notice </p></div><h2 id="demo-disclaimer-title" class="font-display text-2xl font-semibold text-warm-900 mb-3"> For demonstration purposes only </h2><p class="text-sm leading-relaxed text-warm-600"> This website is a demo. It does not represent a real company or real services. Any names, contact details or content shown here are illustrative only. </p><p class="mt-3 text-sm leading-relaxed text-warm-600"> Built by <a href="https://fig.ltd.uk" target="_blank" rel="noopener" class="font-semibold text-accent-400 underline underline-offset-2 hover:text-accent-500 transition-colors">Fig Limited</a>. </p><button type="button" class="mt-6 w-full rounded-lg bg-warm-900 px-4 py-2.5 text-sm font-semibold text-warm-50 hover:bg-warm-800 transition-colors"> I understand </button></div></div>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DemoDisclaimer.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/Partials/Footer.vue
var _sfc_main = {
	__name: "Footer",
	__ssrInlineRender: true,
	props: { navLinks: { type: Array } },
	setup(__props) {
		const page = usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-brand-900 text-cream-100" }, _attrs))}><div class="border-b border-white/10"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10 items-center"><div><p class="eyebrow text-accent-200 mb-4">Letters from the workshop</p><h3 class="font-display text-3xl sm:text-4xl font-semibold tracking-display leading-tight"> Slow news, new scents, the occasional pre-order invitation. </h3></div><form class="flex flex-col sm:flex-row gap-3"><input type="email" placeholder="you@example.com" class="flex-1 px-5 py-4 text-sm bg-white/5 border border-white/20 text-cream-50 placeholder:text-cream-100/40 focus:outline-none focus:border-accent-300 transition"><button type="submit" class="px-8 py-4 bg-cream-50 text-brand-900 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-cream-100 transition-colors"> Subscribe </button></form></div></div><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"><div class="grid md:grid-cols-4 gap-10 mb-12"><div class="md:col-span-2"><div class="flex items-center gap-3 mb-5"><div class="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center"><svg class="w-5 h-auto" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2 C 16 2, 6 14, 6 24 C 6 32, 10 38, 16 38 C 22 38, 26 32, 26 24 C 26 14, 16 2, 16 2 Z" fill="#c98a16"></path><path d="M16 12 C 16 12, 12 18, 12 24 C 12 30, 14 34, 16 34 C 18 34, 20 30, 20 24 C 20 18, 16 12, 16 12 Z" fill="#f9f4e8" opacity="0.85"></path></svg></div><div><p class="font-display text-xl font-semibold text-cream-50 tracking-display leading-none">Acme Candles</p><p class="text-[10px] uppercase tracking-[0.3em] text-cream-100/60 mt-1.5">Hand-poured · Small batch</p></div></div><p class="text-cream-100/60 text-sm leading-relaxed max-w-sm"> A small studio pouring soy and rapeseed wax candles by hand since ${ssrInterpolate(unref(page).props.site.established)}. Botanical fragrances, considered ingredients, made on the high street. </p></div><div><p class="eyebrow text-cream-100/50 mb-5">Visit</p><ul class="space-y-2.5"><!--[-->`);
			ssrRenderList(__props.navLinks, (link) => {
				_push(`<li><a${ssrRenderAttr("href", link.href)} class="text-cream-100/70 text-sm hover:text-cream-50 transition-colors">${ssrInterpolate(link.label)}</a></li>`);
			});
			_push(`<!--]--></ul></div><div><p class="eyebrow text-cream-100/50 mb-5">Get in touch</p><ul class="space-y-2.5 text-sm text-cream-100/70 mb-7"><li><a${ssrRenderAttr("href", "tel:" + unref(page).props.site.telephone)} class="hover:text-cream-50 transition-colors">${ssrInterpolate(unref(page).props.site.telephone)}</a></li><li><a${ssrRenderAttr("href", "mailto:" + unref(page).props.site.email)} class="hover:text-cream-50 transition-colors">${ssrInterpolate(unref(page).props.site.email)}</a></li><li class="text-cream-100/40 text-xs pt-1.5 leading-relaxed">${unref(page).props.site.opening_times ?? ""}</li></ul><p class="eyebrow text-cream-100/50 mb-3">Follow</p><div class="flex gap-3"><a${ssrRenderAttr("href", unref(page).props.site.social?.instagram)} target="_blank" rel="noopener" class="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-cream-50 hover:bg-white/5 transition-colors" aria-label="Instagram"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></a><a${ssrRenderAttr("href", unref(page).props.site.social?.facebook)} target="_blank" rel="noopener" class="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-cream-50 hover:bg-white/5 transition-colors" aria-label="Facebook"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a><a${ssrRenderAttr("href", unref(page).props.site.social?.tiktok)} target="_blank" rel="noopener" class="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-cream-50 hover:bg-white/5 transition-colors" aria-label="TikTok"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69z"></path></svg></a></div></div></div><div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-100/40"><p>© Acme Candles ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}. Hand-poured in the UK.</p><div class="flex gap-6"><a href="#" class="hover:text-cream-50 transition-colors">Privacy</a><a href="#" class="hover:text-cream-50 transition-colors">Terms</a><a href="#" class="hover:text-cream-50 transition-colors">Shipping &amp; Returns</a></div></div></div>`);
			_push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
			_push(`</footer>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Footer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main$3 as n, _sfc_main as t };
