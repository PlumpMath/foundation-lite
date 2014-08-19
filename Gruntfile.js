module.exports = function(grunt) {
  var extra_bower_dirs = [
    'fastclick',
    'jquery',
    'jquery.cookie',
    'jquery-placeholder',
    'modernizr'
  ];

  var extra_found_dirs = [
    'js'
  ];

  var extra_bower_files = [];

  var extra_found_files = ['bower.json'];

  var bower_dir = './bower_components/';
  var found_dir = './bower_components/foundation/';

  var extra_dirs = extra_bower_dirs.map(function(v) {
      return bower_dir + v;
    })
    .concat(
      extra_found_dirs.map(function(v) {
        return found_dir + v;
      })
    );

  var extra_files = extra_bower_files.map(function(v) {
      return bower_dir + v;
    })
    .concat(
      extra_found_files.map(function(v) {
        return found_dir + v;
      })
    );

  console.log(extra_dirs);
  console.log(extra_files);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
    remove: {
      options: {
      },
      main: {
        fileList: extra_files,
        dirList: extra_dirs
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-remove');

  grunt.registerTask('lite', ['remove']);
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build', 'watch']);
};
