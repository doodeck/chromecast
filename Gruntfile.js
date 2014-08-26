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
    },
    'template': {
        'options': {
            // Task-specific options go here
        },
        'process-html-template': {
            'options': {
              // Target-specific options go here
	      'data': {
                'version': '<%= pkg.version %>',
	        'author': 'moi',
	        'content': 'Lorem ipsum dolor sit amet.'
	      }
            },
            'files': {
                // Target-specific file lists go here
		'public/index.html': ['src/index.html.tpl']
            }
        }
    }
  });


  // I need templating first, to tuner the html files
  grunt.loadNpmTasks('grunt-template');

  if (doUglify) {
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
  } else {
    // A very basic default task.
    /*
    grunt.registerTask('default', 'Log some stuff.', function() {
      grunt.log.write('Logging some stuff...' +
                      ' Package version <%= pkg.version %>').ok();
    });
    */
    grunt.registerTask('default', [
        'template'
    ]);

  }

};
