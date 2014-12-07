var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      vendor: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/bootstrap/',
            src: ['js/**', 'less/**'],
            dest: 'app/public/vendor/bootstrap/',
          },
          {
            expand: true,
            cwd: 'bower_components/bootstrap/',
            src: ['fonts/**'],
            dest: 'app/public/',
          },
          {
            expand: true,
            cwd: 'bower_components/angular/',
            src: ['**'],
            dest: 'app/public/vendor/angular/',
          }
        ]
      }
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          ignore: [
            'node_modules/**',
            'app/public/**'
          ],
          ext: 'js',
          nodeArgs: ['--debug']
        }
      }
    },
    watch: {
      clientJS: {
        files: [
          'app/public/views/**/*.js', '!public/views/**/*.min.js'
        ],
        tasks: ['newer:uglify', 'newer:jshint:client']
      },
      serverJS: {
        files: [
          'app/server/controllers/**/*.js',
          'app/server/models/**/*.js',
          'app/server/views/**/*.js',
        ],
        tasks: ['newer:jshint:server']
      },
      clientLess: {
        files: [
          'app/public/views/**/*.less',
          'app/public/less/**/*.less'
        ],
        tasks: ['newer:less']
      }
    },
    uglify: {
      options: {
        sourceMap: true,
        sourceMapName: function(filePath) {
          return filePath + '.map';
        }
      },
      layouts: {
        files: {
          'app/public/views/templates/core.min.js': [
            'app/public/vendor/angular/angular.js',
            'app/public/vendor/bootstrap/js/affix.js',
            'app/public/vendor/bootstrap/js/alert.js',
            'app/public/vendor/bootstrap/js/button.js',
            'app/public/vendor/bootstrap/js/carousel.js',
            'app/public/vendor/bootstrap/js/collapse.js',
            'app/public/vendor/bootstrap/js/dropdown.js',
            'app/public/vendor/bootstrap/js/modal.js',
            'app/public/vendor/bootstrap/js/tooltip.js',
            'app/public/vendor/bootstrap/js/popover.js',
            'app/public/vendor/bootstrap/js/scrollspy.js',
            'app/public/vendor/bootstrap/js/tab.js',
            'app/public/vendor/bootstrap/js/transition.js',
            'app/public/js/core.js'
          ]
        }
      },
      views: {
        files: [{
          expand: true,
          cwd: 'app/public/views/',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'app/public/views/',
          ext: '.min.js'
        }]
      }
    },
    jshint: {
      client: {
        options: {
          jshintrc: '.jshintrc-client',
          ignores: [
            'app/public/views/**/*.min.js'
          ]
        },
        src: [
          'app/public/views/**/*.js'
        ]
      },
      server: {
        options: {
          jshintrc: '.jshintrc-server'
        },
        src: [
          'app/server/controllers/**/*.js',
          'app/server/models/**/*.js',
          'app/server/views/**/*.js'
        ]
      }
    },
    less: {
      options: {
        compress: true
      },
      layouts: {
        files: {
          'app/public/views/templates/core.min.css': [
            'app/public/less/bootstrap-build.less',
            'app/public/less/core.less'
          ]
        }
      },
      views: {
        files: [{
          expand: true,
          cwd: 'app/public/views/',
          src: ['**/*.less'],
          dest: 'app/public/views/',
          ext: '.min.css'
        }]
      }
    },
    clean: {
      js: {
        src: [
          'app/public/views/**/*.min.js',
          'app/public/views/**/*.min.js.map'
        ]
      },
      css: {
        src: [
          'app/public/views/**/*.min.css'
        ]
      },
      vendor: {
        src: ['app/public/vendor/**']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['copy:vendor', 'newer:uglify', 'newer:less', 'concurrent']);
  grunt.registerTask('build', ['copy:vendor', 'uglify', 'less']);
  grunt.registerTask('lint', ['jshint']);
};
