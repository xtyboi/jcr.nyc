module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: "src/scss/*.scss",
        tasks: ['sass']
      }
    },
    sass: {
      dev: {
        files: {
          "src/css/main.css": "src/scss/main.scss"
        }
      }
    },
    concat: {
      dist: {
        src: ['src/css/reset.css', 'src/css/main.css'],
        dest: 'stage/css/concat.css',
      },
    },
    autoprefixer: {
      options: {
        browsers: ['last 8 versions']
      },
      build: {
        files: {
          'stage/css/prefix.css': 'stage/css/concat.css'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/css/min.css': 'stage/css/prefix.css'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/js/min.js': ['src/js/scripts.js']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'autoprefixer', 'cssmin', 'uglify']);
};
