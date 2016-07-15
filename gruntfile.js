// Gruntfile.js
module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "scss/**/*.scss",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
      dev: {
        files: {
            // destination         // source file
            "stylesheets/main.css" : "scss/main.scss"
        }
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true,
          open: true
        }
      }
    }
  });

  grunt.registerTask('default', ['watch', 'connect']);

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
};
