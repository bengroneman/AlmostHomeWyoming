/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				't-black': "#333333",
				't-orange': "#feb358",
				't-blue': "#3c78e0",
				't-teal': "#50bec1",
		    }
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
}
