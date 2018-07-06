module.exports = function(grunt) {
  grunt.registerTask('default',['concat:default','uglify','concat:dist']);
  grunt.initConfig({
    concat: {
      default: {
        files: {
          'dist/capt.js': [
             'parts/header.js'
            ,'src/cancelAlarm.js'
            ,'src/currentTimestamp.js'
            ,'src/dateFromTimestamp.js'
            // ,'src/helloWorld.js'
            ,'src/isBrowserLoaded.js'
            ,'src/setAlarm.js'
          ]
        }
      },
      dist: {
        files: {
          'dist/capt.js': [
             'parts/license.js'
            ,'dist/capt.js'
          ]
        }
      }
    },
    uglify: {
      options: {
        mangle: true,
        compress: true,
        beautify: false
      },
      files: {
        src: 'dist/capt.js',
        dest: 'dist/capt.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
};
