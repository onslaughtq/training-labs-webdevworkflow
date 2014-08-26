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
		}
	});

	grunt.loadNpmTasks( "grunt-contrib-copy" );
	grunt.loadNpmTasks( "grunt-contrib-clean" );
	grunt.loadNpmTasks( "grunt-contrib-jshint" );

	grunt.registerTask( "default", [ "jshint","clean","copy" ] );
};