<script setup>
import { Link } from '@inertiajs/vue3';

const journal = [
    {
        date: '12 May 2026',
        title: 'A new spring fragrance: Elderflower &amp; Linen',
        excerpt: 'Six months of nose-work, three rounds of blends, and one very patient testing club later — meet the lightest candle we have ever made.',
        tag: 'New scent',
    },
    {
        date: '02 May 2026',
        title: 'How we blend a fragrance, from idea to bench',
        excerpt: 'A look at how a single line in a notebook turns into a thirty-litre batch of finished wax. Spoiler: most of it is waiting.',
        tag: 'Workshop notes',
    },
    {
        date: '18 Apr 2026',
        title: 'Refills are back — and a little less plastic',
        excerpt: 'Send your empty Acme jar back in a returnable pouch and we will pour you a fresh fill at thirty percent off the new candle price.',
        tag: 'The shop',
    },
];
</script>

<template>
    <section id="journal" class="py-24 lg:py-32 bg-cream-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-5">
                <div class="max-w-lg">
                    <p class="eyebrow text-brand-600 mb-5">The Journal</p>
                    <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display">
                        Notes from <span class="italic font-normal text-brand-700">the bench.</span>
                    </h2>
                </div>
                <Link href="/news-updates"
                    class="inline-flex items-center gap-2 self-start text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700 pb-1">
                    Read the journal
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div class="grid md:grid-cols-3 gap-x-8 gap-y-12">
                <article v-for="item in journal" :key="item.title"
                    class="group cursor-pointer">
                    <!-- Image placeholder block -->
                    <div class="aspect-[4/3] mb-6 overflow-hidden"
                         style="background: linear-gradient(135deg, #f1e7cb 0%, #cdd3a8 60%, #8d9656 100%);">
                        <div class="w-full h-full opacity-[0.08]"
                             style="background-image: radial-gradient(circle, #1a1611 1px, transparent 1px); background-size: 22px 22px;"></div>
                    </div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="eyebrow text-accent-500">{{ item.tag }}</span>
                        <time class="text-xs text-warm-400">{{ item.date }}</time>
                    </div>
                    <h3 class="font-display text-2xl font-medium text-warm-900 tracking-display mb-3 leading-snug group-hover:text-brand-700 transition-colors" v-html="item.title">
                    </h3>
                    <p class="text-sm text-warm-600 leading-relaxed mb-5">{{ item.excerpt }}</p>
                    <span class="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-brand-700">
                        Read on
                        <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </article>
            </div>
        </div>
    </section>
</template>
