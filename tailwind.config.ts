import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			caveat: ["var(--font-caveat)"],
		},
  		colors: {
  			background: '#eff6ee',
  			foreground: '#273043',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: '#f02d3a',
  				foreground: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: '#9197ae',
  				foreground: '#ffffff'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: '#dd0426',
  				foreground: '#ffffff'
  			},
  			destructive: {
  				DEFAULT: '#f02d3a',
  				foreground: '#ffffff'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			prussian_blue: {
  				DEFAULT: '#273043',
  				100: '#080a0d',
  				200: '#10131b',
  				300: '#181d28',
  				400: '#202736',
  				500: '#273043',
  				600: '#455576',
  				700: '#677ba6',
  				800: '#99a7c3',
  				900: '#ccd3e1'
  			},
  			cool_gray: {
  				DEFAULT: '#9197ae',
  				100: '#1b1d25',
  				200: '#373a4a',
  				300: '#52586f',
  				400: '#6e7593',
  				500: '#9197ae',
  				600: '#a8adbf',
  				700: '#bec1cf',
  				800: '#d4d6df',
  				900: '#e9eaef'
  			},
  			mint_cream: {
  				DEFAULT: '#eff6ee',
  				100: '#253f21',
  				200: '#4a7f43',
  				300: '#77b36f',
  				400: '#b3d5af',
  				500: '#eff6ee',
  				600: '#f2f8f2',
  				700: '#f6faf5',
  				800: '#f9fbf8',
  				900: '#fcfdfc'
  			},
  			imperial_red: {
  				DEFAULT: '#f02d3a',
  				100: '#350407',
  				200: '#6b070e',
  				300: '#a00b15',
  				400: '#d60f1c',
  				500: '#f02d3a',
  				600: '#f35762',
  				700: '#f68189',
  				800: '#f9abb0',
  				900: '#fcd5d8'
  			},
  			rojo: {
  				DEFAULT: '#dd0426',
  				100: '#2c0107',
  				200: '#58020f',
  				300: '#840316',
  				400: '#b0041d',
  				500: '#dd0426',
  				600: '#fa1f40',
  				700: '#fc5770',
  				800: '#fd8f9f',
  				900: '#fec7cf'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
