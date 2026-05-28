<script setup>
const stats = [
    { value: '10', label: 'Years in the studio' },
    { value: '40+', label: 'Signature fragrances' },
    { value: '45hr', label: 'Average burn time' },
    { value: '100%', label: 'Soy &amp; rapeseed wax' },
];
</script>

<template>
    <section class="bg-brand-700 text-cream-50 py-14 border-y border-brand-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
                <div v-for="(stat, i) in stats" :key="i"
                     class="px-2 lg:px-6"
                     :class="i > 0 ? 'lg:border-l lg:border-white/15' : ''">
                    <p class="font-display text-4xl sm:text-5xl font-medium tracking-display" v-html="stat.value"></p>
                    <p class="eyebrow text-cream-100/60 mt-3" v-html="stat.label"></p>
                </div>
            </div>
        </div>
    </section>
</template>
