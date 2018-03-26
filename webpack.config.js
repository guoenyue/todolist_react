const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config={
    mode: 'development',
    entry:{
        index:"./js/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist/js")
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
                //loader:ExtractTextPlugin.extract("style-loader", "css-loader")
                use:ExtractTextPlugin.extract("css-loader")
                // [
                //     // {
                //     //     loader:"style-loader"
                //     // },
                //     // {
                //     //     loader:"css-loader"
                //     // }
                //     {
                //         loader:ExtractTextPlugin.extract("style-loader", "css-loader")
                //     }
                // ]
            }
        ]
    },
    resolve:{
        extensions: [".js", ".json",".jsx",".css"]
    },
    plugins:[
        new ExtractTextPlugin("../css/[name].css")//则会生成一个css文件
    ]
};
//特别注意此处，处理css时候，一定要将style-loader写在前边，css-loader写在后边处理，否则会报错
module.exports=config;