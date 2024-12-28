import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            animation: {
                wave1: 'wave1 30s linear infinite',
                wave2: 'wave2 15s linear infinite',
            },
            keyframes: {
                wave1: {
                    '0%': { backgroundPositionX: '0' },
                    '100%': { backgroundPositionX: '1000px' },
                },
                wave2: {
                    '0%': { backgroundPositionX: '0' },
                    '100%': { backgroundPositionX: '-1000px' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
