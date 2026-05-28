<script setup>
import { usePage } from '@inertiajs/vue3';

defineProps({
    navLinks: { type: Array },
});

const page = usePage();
</script>

<template>
    <footer class="bg-brand-900 text-cream-100">
        <!-- Newsletter band -->
        <div class="border-b border-white/10">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p class="eyebrow text-accent-200 mb-4">Letters from the workshop</p>
                    <h3 class="font-display text-3xl sm:text-4xl font-semibold tracking-display leading-tight">
                        Slow news, new scents, the occasional pre-order invitation.
                    </h3>
                </div>
                <form class="flex flex-col sm:flex-row gap-3" @submit.prevent>
                    <input type="email" placeholder="you@example.com"
                        class="flex-1 px-5 py-4 text-sm bg-white/5 border border-white/20 text-cream-50 placeholder:text-cream-100/40 focus:outline-none focus:border-accent-300 transition" />
                    <button type="submit"
                        class="px-8 py-4 bg-cream-50 text-brand-900 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-cream-100 transition-colors">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid md:grid-cols-4 gap-10 mb-12">
                <div class="md:col-span-2">
                    <div class="flex items-center gap-3 mb-5">
                        <div class="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                            <svg class="w-5 h-auto" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2 C 16 2, 6 14, 6 24 C 6 32, 10 38, 16 38 C 22 38, 26 32, 26 24 C 26 14, 16 2, 16 2 Z" fill="#c98a16"/>
                                <path d="M16 12 C 16 12, 12 18, 12 24 C 12 30, 14 34, 16 34 C 18 34, 20 30, 20 24 C 20 18, 16 12, 16 12 Z" fill="#f9f4e8" opacity="0.85"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-display text-xl font-semibold text-cream-50 tracking-display leading-none">Acme Candles</p>
                            <p class="text-[10px] uppercase tracking-[0.3em] text-cream-100/60 mt-1.5">Hand-poured · Small batch</p>
                        </div>
                    </div>
                    <p class="text-cream-100/60 text-sm leading-relaxed max-w-sm">
                        A small studio pouring soy and rapeseed wax candles by hand since {{ page.props.site.established }}. Botanical fragrances, considered ingredients, made on the high street.
                    </p>
                </div>

                <div>
                    <p class="eyebrow text-cream-100/50 mb-5">Visit</p>
                    <ul class="space-y-2.5">
                        <li v-for="link in navLinks" :key="link.label">
                            <a :href="link.href" class="text-cream-100/70 text-sm hover:text-cream-50 transition-colors">{{
                                link.label }}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <p class="eyebrow text-cream-100/50 mb-5">Get in touch</p>
                    <ul class="space-y-2.5 text-sm text-cream-100/70 mb-7">
                        <li>
                            <a :href="'tel:' + page.props.site.telephone" class="hover:text-cream-50 transition-colors">
                                {{ page.props.site.telephone }}
                            </a>
                        </li>
                        <li>
                            <a :href="'mailto:' + page.props.site.email" class="hover:text-cream-50 transition-colors">
                                {{ page.props.site.email }}
                            </a>
                        </li>
                        <li class="text-cream-100/40 text-xs pt-1.5 leading-relaxed" v-html="page.props.site.opening_times"></li>
                    </ul>
                    <p class="eyebrow text-cream-100/50 mb-3">Follow</p>
                    <div class="flex gap-3">
                        <a :href="page.props.site.social?.instagram" target="_blank" rel="noopener"
                            class="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-cream-50 hover:bg-white/5 transition-colors"
                            aria-label="Instagram">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a :href="page.props.site.social?.facebook" target="_blank" rel="noopener"
                            class="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-cream-50 hover:bg-white/5 transition-colors"
                            aria-label="Facebook">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a :href="page.props.site.social?.tiktok" target="_blank" rel="noopener"
                            class="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-cream-50 hover:bg-white/5 transition-colors"
                            aria-label="TikTok">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div
                class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-100/40">
                <p>&copy; Acme Candles {{ new Date().getFullYear() }}. Hand-poured in the UK.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-cream-50 transition-colors">Privacy</a>
                    <a href="#" class="hover:text-cream-50 transition-colors">Terms</a>
                    <a href="#" class="hover:text-cream-50 transition-colors">Shipping &amp; Returns</a>
                </div>
            </div>
        </div>
    </footer>
</template>
