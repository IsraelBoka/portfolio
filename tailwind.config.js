/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#2C0839',
				secondary: '#581071',
				tertiary: '#AC88B8'
			},
			fontFamily: {
				Founders: ['Founders_Grotesk'],
				Crusader: ['Crusader']
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				},
				'marquee-down': {
					'0%': { transform: 'translateY(0%)' },
					'100%': { transform: 'translateY(-100%)' }
				},
				'marquee-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0%)' }
				}
			},
			animation: {
				marquee: 'marquee 60s linear infinite',
				marquee2: 'marquee2 60s linear infinite',
				'marquee-down': 'marquee-down 60s linear infinite',
				'marquee-up': 'marquee-up 60s linear infinite'
			}
		}
	},
	plugins: []
};
