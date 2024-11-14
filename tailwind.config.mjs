/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {
        // Hvis du placerer noget herinde, så vil du erstatte Tailwinds styling.

        /* COLORS */
        colors: {
            "neutral-950": "rgba(41, 41, 41, 1)",
            "neutral-900": "rgba(61, 61, 61, 1)",
            "neutral-800": "rgba(70, 70, 70, 1)",
            "neutral-700": "rgba(82, 82, 82, 1)",
            "neutral-600": "rgba(101, 101, 101, 1)",
            "neutral-500": "rgba(124, 124, 124, 1)",
            "neutral-400": "rgba(152, 152, 152, 1)",
            "neutral-300": "rgba(189, 189, 189, 1)",
            "neutral-200": "rgba(220, 220, 220, 1)",
            "neutral-100": "rgba(239, 239, 239, 1)",
            "neutral-50": "rgba(255, 255, 255, 1)",
            "red-950": "rgba(86, 4, 0, 1)",
            "red-900": "rgba(156, 9, 1, 1)",
            "red-800": "rgba(189, 10, 0, 1)",
            "red-700": "rgba(230, 12, 0, 1)",
            "red-600": "rgba(255, 13, 0, 1)",
            "red-500": "rgba(255, 31, 19, 1)",
            "red-400": "rgba(255, 83, 74, 1)",
            "red-300": "rgba(255, 146, 140, 1)",
            "red-200": "rgba(255, 191, 187, 1)",
            "red-100": "rgba(255, 220, 218, 1)",
            "red-50": "rgba(255, 240, 239, 1)",
            "green-950": "rgba(24, 27, 19, 1)",
            "green-900": "rgba(44, 49, 35, 1)",
            "green-800": "rgba(53, 59, 42, 1)",
            "green-700": "rgba(64, 73, 51, 1)",
            "green-600": "rgba(81, 91, 64, 1)",
            "green-500": "rgba(106, 116, 85, 1)",
            "green-400": "rgba(147, 155, 128, 1)",
            "green-300": "rgba(176, 182, 159, 1)",
            "green-200": "rgba(209, 212, 198, 1)",
            "green-100": "rgba(232, 233, 226, 1)",
            "green-50": "rgba(245, 246, 243, 1)",
            "yellow-950": "rgba(65, 31, 7, 1)",
            "yellow-900": "rgba(112, 61, 19, 1)",
            "yellow-800": "rgba(132, 74, 15, 1)",
            "yellow-700": "rgba(159, 94, 9, 1)",
            "yellow-600": "rgba(200, 132, 6, 1)",
            "yellow-500": "rgba(232, 172, 10, 1)",
            "yellow-400": "rgba(248, 197, 23, 1)",
            "yellow-300": "rgba(251, 219, 73, 1)",
            "yellow-200": "rgba(253, 238, 150, 1)",
            "yellow-100": "rgba(253, 247, 196, 1)",
            "yellow-50": "rgba(254, 251, 232, 1)",
            "pink-950": "rgba(72, 9, 26, 1)",
            "pink-900": "rgba(150, 27, 60, 1)",
            "pink-800": "rgba(150, 27, 60, 1)",
            "pink-700": "rgba(179, 29, 63, 1)",
            "pink-600": "rgba(213, 41, 77, 1)",
            "pink-500": "rgba(234, 84, 108, 1)",
            "pink-400": "rgba(242, 122, 138, 1)",
            "pink-300": "rgba(247, 170, 178, 1)",
            "pink-200": "rgba(251, 208, 213, 1)",
            "pink-100": "rgba(253, 230, 231, 1)",
            "pink-50": "rgba(254, 242, 243, 1)",
            "orange-950": "rgba(58, 18, 16, 1)",
            "orange-900": "rgba(108, 40, 34, 1)",
            "orange-800": "rgba(133, 46, 39, 1)",
            "orange-700": "rgba(166, 54, 40, 1)",
            "orange-600": "rgba(200, 72, 46, 1)",
            "orange-500": "rgba(215, 93, 56, 1)",
            "orange-400": "rgba(222, 126, 89, 1)",
            "orange-300": "rgba(236, 183, 156, 1)",
            "orange-200": "rgba(241, 204, 183, 1)",
            "orange-100": "rgba(249, 231, 219, 1)",
            "orange-50": "rgba(252, 245, 240, 1)",
            "blue-950": "rgba(26, 44, 50, 1)",
            "blue-900": "rgba(45, 70, 76, 1)",
            "blue-800": "rgba(50, 81, 88, 1)",
            "blue-700": "rgba(53, 97, 105, 1)",
            "blue-600": "rgba(59, 117, 127, 1)",
            "blue-500": "rgba(67, 142, 150, 1)",
            "blue-400": "rgba(95, 170, 177, 1)",
            "blue-300": "rgba(146, 202, 206, 1)",
            "blue-200": "rgba(191, 224, 226, 1)",
            "blue-100": "rgba(221, 239, 240, 1)",
            "blue-50": "rgba(242, 249, 249, 1)",
            'white': '#fff',
            'black': '#000',
          },

          /* SPACING */
          spacing: {
            "xxs": "8px",
            "xs": "16px",
            "s": "24px",
            "sm": "32px",
            "m": "40px",
            "ml": "48px",
            "lg": "64px",
            "xl": "80px",
            "2xl": "96px",
            "3xl": "112px",
            "4xl": "128px",
            "5xl": "160px",
            "6xl": "208px",
            "7xl": "320px",
            "8xl": "360px",
            "9xl": "424px"
          },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        /* FONTE */
        fontFamily: {
            sans: ['Prompt', 'sans-serif'],
            'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
        },

        /* FONTSIZE */
        fontSize: {
            link: ['0.800rem', { lineHeight: '1.25rem' }],
            body: ['1rem', { lineHeight: '1.5rem' }],
            sm: ['1.953rem', { lineHeight: '2.938rem' }],
            m: ['2.441rem', { lineHeight: '3.688rem' }],
            lg: ['3.052rem', { lineHeight: '4.625rem' }],
            xl: ['3.815rem', { lineHeight: '5.75rem' }],
          },

        /* WEIGHT */
          fontWeight: {
            light: '300',
            regular: '400',
            semibold: '500',
            bold: '700',
          },

        /* BORDERWIDTH */
        borderWidth: {
            DEFAULT: '1px',
            0: '0px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
        },

        /* BORDERRADIUS */
        borderRadius: {
            DEFAULT: '20px',
            none: '0px',
            sm: '10px',
            md: '20px',
            lg: '30px',
            xl: '40px',
            full: '999px',
        },

        /* BOXSHADOW */
        boxShadow: {
            drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
            drop50: '4px 4px 4px 0 rgb(0 0 0 / 0.50)',  
            inner25: '0 4px 4px 0 rgb(0 0 0 / 0.25) inset',  
            inner50: '0 4px 4px 0 rgb(0 0 0 / 0.50) inset',  
        },

		extend: {
            // Hvis du placerer noget herinde, så vil du ikke erstatte Tailwinds styling, men blot tilføje til det.
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}