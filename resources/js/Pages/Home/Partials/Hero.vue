<script setup>
defineProps({
    site: { type: Object },
});
</script>

<template>
    <section id="home" class="relative overflow-hidden bg-cream-50">

        <!-- Subtle texture / glow -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-0 right-0 w-[640px] h-[640px] rounded-full bg-accent-100/40 blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-100/50 blur-3xl"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-28">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                <!-- ── Left: Copy ── -->
                <div class="lg:col-span-7">
                    <p class="eyebrow text-brand-600 mb-6">
                        Hand-poured · Small batch · Since {{ site.established }}
                    </p>

                    <h1 class="font-display text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] font-medium leading-[1.02] text-warm-900 tracking-display mb-8">
                        Quiet rooms,<br />
                        <span class="italic font-normal text-brand-700">slow evenings,</span><br />
                        scented by hand.
                    </h1>

                    <p class="text-base sm:text-lg text-warm-600 leading-relaxed mb-10 max-w-lg">
                        A small studio of soy and rapeseed wax candles, blended with natural fragrance oils and poured into vessels you'll want to keep. Made on the high street, designed for slow living.
                    </p>

                    <div class="flex flex-wrap gap-4 items-center">
                        <a href="#collections"
                            class="inline-flex items-center gap-3 px-9 py-4 bg-brand-700 text-cream-50 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-brand-800 transition-colors">
                            Shop the Collections
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#about"
                            class="inline-flex items-center gap-2 px-2 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700">
                            Our Story
                        </a>
                    </div>

                    <!-- Trust strip -->
                    <div class="flex flex-wrap items-center gap-x-10 gap-y-4 mt-14 pt-8 border-t border-warm-200">
                        <div class="flex items-center gap-2 text-warm-600">
                            <span class="text-brand-600 text-base">✦</span>
                            <span class="text-xs tracking-wider uppercase">Soy &amp; rapeseed wax</span>
                        </div>
                        <div class="flex items-center gap-2 text-warm-600">
                            <span class="text-accent-500 text-base">✦</span>
                            <span class="text-xs tracking-wider uppercase">Vegan &amp; cruelty-free</span>
                        </div>
                        <div class="flex items-center gap-2 text-warm-600">
                            <span class="text-scent-amber text-base">✦</span>
                            <span class="text-xs tracking-wider uppercase">UK-made</span>
                        </div>
                    </div>
                </div>

                <!-- ── Right: Candle visual ── -->
                <div class="lg:col-span-5 relative">
                    <div class="relative aspect-[4/5] w-full max-w-md mx-auto">

                        <!-- Backdrop card with warm gradient + faint grain -->
                        <div class="absolute inset-0 bg-gradient-to-br from-brand-200/80 via-cream-100 to-accent-200/60 overflow-hidden">
                            <div class="absolute inset-0 opacity-[0.06]"
                                 style="background-image: radial-gradient(circle, #1a1611 1px, transparent 1px); background-size: 22px 22px;"></div>
                        </div>

                        <!-- Stylised candle -->
                        <div class="absolute inset-0 flex items-end justify-center pb-[6%]">
                            <div class="relative">
                                <!-- Flame glow -->
                                <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-accent-300/40 blur-3xl"></div>

                                <!-- Flame -->
                                <svg class="absolute -top-20 left-1/2 -translate-x-1/2 w-12 h-auto animate-flicker"
                                     viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                                     style="transform-origin: bottom center;">
                                    <path d="M16 2 C 16 2, 4 18, 4 30 C 4 40, 9 46, 16 46 C 23 46, 28 40, 28 30 C 28 18, 16 2, 16 2 Z" fill="#e3a72b"/>
                                    <path d="M16 14 C 16 14, 10 22, 10 30 C 10 38, 13 44, 16 44 C 19 44, 22 38, 22 30 C 22 22, 16 14, 16 14 Z" fill="#fef3d4"/>
                                </svg>

                                <!-- Wick -->
                                <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-[2px] h-4 bg-warm-900"></div>

                                <!-- Candle jar (amber glass) -->
                                <div class="relative w-44 h-56 rounded-t-md rounded-b-2xl shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_30px_60px_-15px_rgba(45,40,32,0.4)] overflow-hidden"
                                     style="background: linear-gradient(180deg, #c98a16 0%, #a36c0f 60%, #7d510b 100%);">
                                    <!-- Glass highlight -->
                                    <div class="absolute top-0 left-3 w-2 h-full bg-white/30 blur-sm"></div>
                                    <div class="absolute top-2 right-4 w-3 h-20 bg-white/15 blur-sm rounded-full"></div>
                                    <!-- Wax meniscus -->
                                    <div class="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-cream-100 to-cream-200"></div>
                                </div>

                                <!-- Label -->
                                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-36 bg-cream-50 border border-warm-200 px-3 py-2.5 text-center shadow-sm">
                                    <p class="font-display text-sm font-semibold text-warm-900 tracking-display leading-none">No. 04</p>
                                    <p class="text-[9px] tracking-[0.25em] uppercase text-warm-500 mt-1">Cedar &amp; Smoke</p>
                                </div>
                            </div>
                        </div>

                        <!-- Floating product chips -->
                        <div class="hidden lg:block absolute top-6 -left-6 bg-cream-50 border border-warm-200 px-3 py-2 shadow-sm animate-float-slow">
                            <p class="text-[10px] tracking-[0.25em] uppercase text-warm-500">Burn time</p>
                            <p class="font-display text-base text-warm-900">45 hrs</p>
                        </div>
                        <div class="hidden lg:block absolute bottom-20 -right-4 bg-cream-50 border border-warm-200 px-3 py-2 shadow-sm animate-float">
                            <p class="text-[10px] tracking-[0.25em] uppercase text-warm-500">From</p>
                            <p class="font-display text-base text-warm-900">&pound;32</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
