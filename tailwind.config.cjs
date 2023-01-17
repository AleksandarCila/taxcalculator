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
                primary: '#226CE0',
                secondary: {
                    300:'#534B62',
                    200:'#A499B3',
                    100:'#D0BCD5',
                }
			},
		},
	},
	plugins: [],
};
