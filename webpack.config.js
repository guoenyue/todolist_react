const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config={
    mode: 'development',
    entry:{
        index:"./js/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist/js")
        //path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/i,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["es2015","react"]
                    }
                }
            },
            {
                test:/\.s?css$/i,
                use:ExtractTextPlugin.extract("css-loader")
            }
        ]
    },
    resolve:{
        extensions: [".js", ".json",".jsx",".css"]
    },
    plugins:[
        new ExtractTextPlugin("../css/[name].css"),//则会生成一个css文件
        new HtmlWebpackPlugin({
            title:'app',
            template: './index.html',
            filename:"../index.html",
            inject: 'body',
            chunks:true
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,"dist")
    }
};
//特别注意此处，处理css时候，一定要将style-loader写在前边，css-loader写在后边处理，否则会报错
module.exports=config;