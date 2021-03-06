const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var proxy = require('http-proxy-middleware');
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
        hot:true,
        contentBase:path.join(__dirname,"dist"),
        host: '192.168.0.114',
        port: '3011',
        proxy:{
            "/in_theaters":{
                target: 'https://api.douban.com/',
                pathRewrite: {'/in_theaters' : '/v2/movie/in_theaters'},
                changeOrigin: true,
                secure: false
            },
            "/weekly":{
                target:"https://api.douban.com/",
                pathRewrite:{
                    "/weekly":"/v2/movie/top250"
                },
                changeOrigin:true,
                secure:false
            },
            "/coming":{
                target:"https://api.douban.com/",
                pathRewrite:{
                    "/coming":"/v2/movie/coming_soon"
                },
                changeOrigin:true,
                secure:false
            }
        }
    }
};
//特别注意此处，处理css时候，一定要将style-loader写在前边，css-loader写在后边处理，否则会报错
module.exports=config;