const path=require ('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');


module.exports={
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, "dist"),
		filename: 'bundle.js'
	}, 
	devServer:{
		port:3006
	},
	module: {
		rules: [
		{ 
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader:'babel-loader'
		}
		},
	
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
		{
			test:/\.(png|jpe?g|gif)$/i,
			use:[
			{
				loader: 'file-loader',
			},
			],
		},
			]
	
},
plugins:[
new HtmlWebpackPlugin({
	template: './src/index.html'
})
],
}