module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          'sioserver.js': 'sioserver.coffee',
          'sioclient.js': 'sioclient.coffee'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.registerTask('default', ['coffee']);
}
