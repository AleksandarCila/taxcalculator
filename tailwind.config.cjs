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
					DEFAULT:"#DD1155"
				}
			},
		},
	},
	plugins: [],
};
