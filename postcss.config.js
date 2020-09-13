module.exports = {
  modules: false,
  plugins: {
		'postcss-preset-env': {
			stage: 3,
			autoprefixer: {
				grid: true,
				flexbox: false,
				supports: false,
      },
      features: {
        'nesting-rules': true,
        'system-ui-font-family': true
      }
    },
    'postcss-normalize': true
  }
}