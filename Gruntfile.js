module.exports = function( grunt ) {
	grunt.initConfig({
		copy: {
			js: {
				expand: true,
				src: [ "js/**/*.js" ],
				dest: "dist/",
				cwd: "src/"
			},
			assets: {
				expand: true,
				src: [ "assets/*.*" ],
				dest: "dist/",
				cwd: "src/"
			}
		},
		clean: {
			files: [ "dist/" ]
		},
		jshint: {
			main: {
				options: {
					jshintrc: ".jshintrc"
				},
				files: {
					src: [  "src/js/**/*.js"]
				}
			}
		},
		uglify: {
			WebDev: {
				options: {
					sourceMap: true,
					sourceMapName: "dist/js/sourcemap.map"
				},
				files: {
					"dist/app.min.js": [ 
							"dist/js/app.js",
							"dist/js/models/*.js",
							"dist/js/viewModels/*.js"
						]
				}
			}
		}
	});

	grunt.loadNpmTasks( "grunt-contrib-copy" );
	grunt.loadNpmTasks( "grunt-contrib-clean" );
	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );

	grunt.registerTask( "default", [ "jshint","clean","copy" ] );
};