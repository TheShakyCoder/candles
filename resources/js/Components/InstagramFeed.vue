<script setup>
import { usePage } from '@inertiajs/vue3';

const page = usePage();
const instagramUrl = page.props.site.social?.instagram || 'https://www.instagram.com/acmecandles/';
</script>

<template>
    <section id="instagram" class="py-24 lg:py-32 bg-cream-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-5">
                <div class="max-w-lg">
                    <p class="eyebrow text-brand-600 mb-5">Behind the bench</p>
                    <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-display leading-[1.05] text-warm-900">
                        Follow along on <span class="italic font-normal text-brand-700">Instagram.</span>
                    </h2>
                </div>
                <a :href="instagramUrl" target="_blank" rel="noopener"
                   class="inline-flex items-center gap-2 self-start text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700 pb-1">
                    @acmecandles
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>
            </div>

            <!-- Mock instagram grid (4 tiles) -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                <a v-for="(tile, i) in [
                    { bg: 'linear-gradient(135deg, #cdd3a8 0%, #565d33 100%)', label: 'Pouring No. 04' },
                    { bg: 'linear-gradient(135deg, #e0bbc1 0%, #7d3a4a 100%)', label: 'Spring blends' },
                    { bg: 'linear-gradient(135deg, #f1e7cb 0%, #c98a16 100%)', label: 'Bench notes' },
                    { bg: 'linear-gradient(135deg, #c8d4cc 0%, #5b7a6a 100%)', label: 'Sea Holly arrives' },
                ]" :key="i"
                    :href="instagramUrl" target="_blank" rel="noopener"
                    class="group relative aspect-square overflow-hidden block"
                    :style="{ background: tile.bg }">
                    <div class="absolute inset-0 opacity-[0.08]"
                         style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 18px 18px;"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <svg class="w-10 h-10 text-cream-50/70 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <p class="text-cream-50 text-xs font-medium">{{ tile.label }}</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>
