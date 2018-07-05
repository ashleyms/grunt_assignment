module.exports = function(grunt){

	grunt.initConfig({
        //Lint
		jshint:{
			all: ['src/js/*.js']
        },
        //Convert sass to css
        sass: {                              
            dist: {                            
              options: {                      
                style: 'compact'
              },
              files: {                         
                'src/css/query.css': 'src/scss/query.scss',     
                'src/css/style.css': 'src/scss/style.scss'
              }
            }
          },
        //Merge all files
        concat: {
            js: {
                files: {'src/js/main.js': 'src/js/*.js' }
            },
            css:{
                files: {'src/css/main.css': 'src/css/*.css' }
            }
        },
        //Minify js
        uglify: {
            bundle: {
                files: {'src/js/min/main.min.js': 'src/js/main.js'}
            }
        },
        //Min css
        cssmin: {
            target: {
                files: {
                    'src/css/min/main.min.css': 'src/css/main.css'
                  }
            }
          },
        //Watch the js files
        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['jshint']
              }
        } 
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default',['jshint','concat', 'uglify:bundle', 'sass', 'cssmin']);
}
