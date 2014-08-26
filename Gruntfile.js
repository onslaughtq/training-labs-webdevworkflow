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
		clean: [ "dist/" ]
	});

	grunt.loadNpmTasks( "grunt-contrib-copy" );
	grunt.loadNpmTasks( "grunt-contrib-clean" );

	grunt.registerTask( "default", [ "clean","copy" ] );
};