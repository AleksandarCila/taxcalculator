module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		fontFamily: {
			nunito: ['nunito', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				background: '#1B1725',
				primary: {
					DEFAULT: '#226CE0',
					200: '#4e89e6',
				},

				secondary: {
					300: '#534B62',
					200: '#A499B3',
					100: '#D0BCD5',
				},
				warning: {
					DEFAULT: '#DD1155',
				},
			},
			keyframes: {
				scale: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				'scale-render': 'scale 0.1s linear',
			},
		},
	},
	plugins: [],
};
