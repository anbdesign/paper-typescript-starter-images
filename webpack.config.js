module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist",
		publicPath: "/dist"
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' as resolvable extensions.
		extensions: [".ts", ".js", ".json"]
	},

	module: {
		rules: [
			// All files with a '.ts' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.ts$/, loader: "awesome-typescript-loader" },

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			
			{
				test: /\.(png|svg|jpg|gif)$/,
			   use: [
			  'file-loader',
				],
			 },

			 {
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			  },


		]
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		"paper": "paper"
	},
};
