//
// Gruntfile.js
//

module.exports = function(grunt) {
  var doUglify = false;

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  if (doUglify) {
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
  } else {
    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', function() {
      grunt.log.write('Logging some stuff...' +
                      ' Package version <%= pkg.version %>' /*no working*/).ok();
    });
  }

};
