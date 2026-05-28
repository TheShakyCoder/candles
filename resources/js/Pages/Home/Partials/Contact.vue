<script setup>
defineProps({
    site: Object
})
</script>

<template>
    <section id="contact" class="py-24 lg:py-32 bg-cream-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 max-w-2xl mx-auto">
                <p class="eyebrow text-brand-600 mb-5">Visit Us</p>
                <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display mb-6">
                    Come and have a <span class="italic font-normal text-brand-700">sniff.</span>
                </h2>
                <p class="text-warm-600 text-[15px] leading-relaxed">
                    The workshop and shop are on Penwortham high street. Pop in to test the full library, refill a jar, or just say hello — we'll usually have the kettle on.
                </p>
            </div>

            <div class="grid lg:grid-cols-5 gap-10 lg:gap-14">

                <!-- Contact info -->
                <div class="lg:col-span-2 space-y-px bg-cream-100">
                    <div class="flex items-start gap-5 p-7 bg-cream-50">
                        <div class="w-9 h-9 border border-brand-300 flex items-center justify-center text-brand-700 shrink-0">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p class="eyebrow text-warm-500 mb-2">The Shop</p>
                            <p class="text-warm-800 text-[15px] leading-relaxed" v-html="site.address"></p>
                        </div>
                    </div>
                    <div class="flex items-start gap-5 p-7 bg-cream-50">
                        <div class="w-9 h-9 border border-brand-300 flex items-center justify-center text-brand-700 shrink-0">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p class="eyebrow text-warm-500 mb-2">Telephone</p>
                            <a :href="'tel:' + site.telephone" class="text-warm-800 text-[15px] hover:text-brand-700 transition-colors">{{ site.telephone }}</a>
                        </div>
                    </div>
                    <div class="flex items-start gap-5 p-7 bg-cream-50">
                        <div class="w-9 h-9 border border-brand-300 flex items-center justify-center text-brand-700 shrink-0">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8l2-2h14l2 2" />
                            </svg>
                        </div>
                        <div>
                            <p class="eyebrow text-warm-500 mb-2">Email</p>
                            <a :href="'mailto:' + site.email" class="text-warm-800 text-[15px] hover:text-brand-700 transition-colors">{{ site.email }}</a>
                        </div>
                    </div>
                    <div class="flex items-start gap-5 p-7 bg-cream-50">
                        <div class="w-9 h-9 border border-brand-300 flex items-center justify-center text-brand-700 shrink-0">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p class="eyebrow text-warm-500 mb-2">Opening Hours</p>
                            <p class="text-warm-800 text-[15px] leading-relaxed" v-html="site.opening_times"></p>
                        </div>
                    </div>
                </div>

                <!-- Contact form -->
                <form class="lg:col-span-3 bg-cream-100 p-8 sm:p-10 space-y-6">
                    <div>
                        <p class="eyebrow text-brand-600 mb-2">Get in touch</p>
                        <p class="font-display text-2xl font-medium text-warm-900 tracking-display">Send us a note</p>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-5">
                        <div>
                            <label class="eyebrow text-warm-500 mb-2 block">First name</label>
                            <input type="text" placeholder="Eleanor"
                                class="w-full px-4 py-3 text-sm bg-cream-50 border border-warm-200 focus:outline-none focus:border-brand-500 text-warm-900 transition" />
                        </div>
                        <div>
                            <label class="eyebrow text-warm-500 mb-2 block">Last name</label>
                            <input type="text" placeholder="Marsh"
                                class="w-full px-4 py-3 text-sm bg-cream-50 border border-warm-200 focus:outline-none focus:border-brand-500 text-warm-900 transition" />
                        </div>
                    </div>
                    <div>
                        <label class="eyebrow text-warm-500 mb-2 block">Email</label>
                        <input type="email" placeholder="you@example.com"
                            class="w-full px-4 py-3 text-sm bg-cream-50 border border-warm-200 focus:outline-none focus:border-brand-500 text-warm-900 transition" />
                    </div>
                    <div>
                        <label class="eyebrow text-warm-500 mb-2 block">What's it about?</label>
                        <select
                            class="w-full px-4 py-3 text-sm bg-cream-50 border border-warm-200 focus:outline-none focus:border-brand-500 text-warm-900 transition">
                            <option>Order or shipping query</option>
                            <option>Refills &amp; returns</option>
                            <option>Wholesale enquiry</option>
                            <option>Bespoke fragrance commission</option>
                            <option>Workshop &amp; private events</option>
                            <option>Just saying hello</option>
                        </select>
                    </div>
                    <div>
                        <label class="eyebrow text-warm-500 mb-2 block">Message</label>
                        <textarea rows="5" placeholder="A few words…"
                            class="w-full px-4 py-3 text-sm bg-cream-50 border border-warm-200 focus:outline-none focus:border-brand-500 text-warm-900 transition resize-none"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full py-4 bg-brand-700 text-cream-50 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-brand-800 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
