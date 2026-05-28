import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Fraunces', 'Cormorant Garamond', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                // Sage / olive — the Hidden Hut signature olive green
                brand: {
                    50:  '#f4f5ec',
                    100: '#e6e9d2',
                    200: '#cdd3a8',
                    300: '#aeb678',
                    400: '#8d9656',
                    500: '#6f7841',
                    600: '#565d33',
                    700: '#444a2a',
                    800: '#383d24',
                    900: '#1f2215',
                },
                // Damson / plum — deep jewel accent for product highlights
                accent: {
                    50:  '#faf3f4',
                    100: '#f0dde0',
                    200: '#e0bbc1',
                    300: '#c98e98',
                    400: '#a85f6c',
                    500: '#7d3a4a',
                    600: '#62293a',
                    700: '#4a1f2c',
                },
                // Warm parchment/cream — the natural linen background tone
                cream: {
                    50:  '#fdfbf6',
                    100: '#f9f4e8',
                    200: '#f1e7cb',
                    300: '#e6d6a5',
                },
                // Botanical / scent family — used as small colour pops for collections
                scent: {
                    sage:    '#869a6c',
                    rose:    '#a85f6c',
                    amber:   '#c98a16',
                    smoke:   '#7d7468',
                    cedar:   '#7b5a3d',
                    eucal:   '#5b7a6a',
                },
                // Legacy alias retained so existing dashboard / admin pages don't break
                lens: {
                    teal:   '#5b7a6a',
                    sky:    '#869a6c',
                    indigo: '#7d3a4a',
                    rose:   '#a85f6c',
                    amber:  '#c98a16',
                    slate:  '#7d7468',
                },
                // Earth-toned neutrals — warmer than slate
                warm: {
                    50:  '#faf8f4',
                    100: '#f1ede4',
                    200: '#e1dbcb',
                    300: '#c8bfa6',
                    400: '#9d9176',
                    500: '#766c54',
                    600: '#5a5240',
                    700: '#43392a',
                    800: '#2d2820',
                    900: '#1a1611',
                },
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
                    '50%': { transform: 'translateY(-20px) rotate(var(--tw-rotate, 0deg))' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
                    '50%': { transform: 'translateY(-30px) rotate(var(--tw-rotate, 0deg))' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                'scale-pulse': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                flicker: {
                    '0%, 100%': { opacity: '1', transform: 'scaleY(1) translateY(0)' },
                    '25%':      { opacity: '0.92', transform: 'scaleY(1.04) translateY(-1px)' },
                    '50%':      { opacity: '0.98', transform: 'scaleY(0.96) translateY(1px)' },
                    '75%':      { opacity: '0.94', transform: 'scaleY(1.02) translateY(-1px)' },
                },
            },
            animation: {
                float: 'float 5s ease-in-out infinite',
                'float-slow': 'float-slow 7s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 1s infinite',
                wiggle: 'wiggle 3s ease-in-out infinite',
                'scale-pulse': 'scale-pulse 4s ease-in-out infinite',
                flicker: 'flicker 2.8s ease-in-out infinite',
            },
        },
    },

    plugins: [forms, typography],
};
