import path from 'path'; 

export const entry = './src/index.js';
export const module = {
    rules: [
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader',
            ],
        },
    ],
};
export const plugins = [
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })
];
export const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
];



