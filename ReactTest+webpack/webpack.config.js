var webpack = require("webpack");   
var path = require("path");   
  
var DEV = path.resolve(__dirname, "dev");   
var OUTPUT = path.resolve(__dirname, "output");   
  
var config = {   
    entry: DEV + "/index.jsx",   
    output: {   
        path: OUTPUT,   
        filename: "myCode.js"   
    },  
    devServer: {  
        inline: true,  
        port: 8181  
    },	
    module:{  
       rules:[{  
           test:/\.(js|jsx)$/,  
		   loader:'babel-loader',
           exclude:/node_module/,  
           
		   query: {
              presets: ['es2015', 'react']
           }
       }]	   
    }
	
};   
module.exports = config;  