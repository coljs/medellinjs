module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'public/'
        }
      }
    },
    watch: {
      harp: {
        files: [
          '_harp/**/*.md',
          '_harp/**/*.ejs',
          '_harp/**/*.json',
          '_harp/**/*.css',
          '_harp/**/*.js'
        ],
        tasks: ['harp'],
        options: {
          livereload: true
        }
      }
    },
    harp: {
      dist: {
        source: '_harp',
        dest: 'public'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-harp');

  grunt.registerTask('default', ['harp', 'connect', 'watch']);
  grunt.registerTask('build', ['harp']);

};
