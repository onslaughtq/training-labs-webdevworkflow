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
		}
	});

	grunt.loadNpmTasks( "grunt-contrib-copy" );

	grunt.registerTask( "default", [ "copy" ] );
};