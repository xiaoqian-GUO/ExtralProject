module.exports=function(grunt){
	//任务配置，所有插件的配置信息
	grunt.initConfig({
		//获取package.json的信息
		pkg:grunt.file.readJSON('package.json'),
		//uglify插件的配置信息
		uglify:{
			options:{
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				src:'src/test.js',
				dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			}
		},
		
		jshint:{
			build:['Gruntfile.js','src/*.js'],
			options:{
				jshintrc:'check.jshintrc'
			}
		},
		csslint:{
            options:{
                csslintrc:'style.csslint'
            },
            build:['css/*.css']
 
        },
		watch:{
			build:{
				files:['src/*.js','css/*.css'],
				tasks:['jshint','csslint','uglify'],
				options:{spawn:false}
			}
		}
		
		
	});
	//告诉grunt当我们在终端中输入grunt时需要做些什么事情，注意先后顺序
	//grunt.registerTask('default',[]);
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['jshint','csslint','uglify','watch']);
};