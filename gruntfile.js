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
        options: {
          sourcemap: "auto"
        },
        files: {
            // destination         // source file
            "stylesheets/main.css" : "scss/main.scss"
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
