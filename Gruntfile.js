// JSLint Configuration (to suppress unnecessary warnings)
/*jslint node: true */

module.exports = function (grunt) {
  'use strict';

  // Configuration goes here
  grunt.initConfig({

    // Copy Bootstrap dependencies to `test/` folder
    copy: {
      test_bootstrap: {
        files: [{
          expand: true,
          cwd: 'bower_components/bootstrap/dist/',
          src: [
            'css/bootstrap.min.css',
            'js/bootstrap.min.js'
          ],
          dest: 'test/'
        }]
      },
      test_jquery: {
        files: [{
          expand: true,
          cwd: 'bower_components/jquery/dist/',
          src: ['jquery.min.js'],
          dest: 'test/js/'
        }]
      }
    },

    // Minify CSS
    cssmin: {
      css: {
        options: {
          //banner: '/*\n<%= mybanner %>\n*/\n',
          sourceMap: false
        },
        files: [{
          expand: true,
          src: ['src/css/*.css', '!src/css/*.min.css'],
          ext: '.min.css'
        }]
      }
    },

    // Minify JavaScript
    uglify: {
      js: {
        options: {
          //banner: '/*\n<%= mybanner %>\n*/\n',
          preserveComments: false,
          sourceMap: false
        },
        files: [{
          expand: true,
          src: ['src/js/*.js', '!src/js/*.min.js'],
          ext: '.min.js'
        }]
      }
    },

    // Minify HTML
    minifyHtml: {
      html_minified: {
        options: {
          cdata: false
        },
        files: [{
          expand: true,
          src: ['dist/*.html', '!dist/*.min.html'],
          ext: '.min.html'
        }]
      }
    },

    // Merge files
    concat: {
      min_div: {
        files: [{
          'dist/Bootstrap-DV.html': [
            'src/html/div-wrapper-begin.html',
            'src/html/div-html.html',
            'src/html/style-wrapper-begin.html',
            'src/css/bootstrap-dv.min.css',
            'src/html/style-wrapper-end.html',
            'src/html/script-wrapper-begin.html',
            'src/js/bootstrap-dv.min.js',
            'src/html/script-wrapper-end.html',
            'src/html/div-wrapper-end.html'
          ]
        }]
      },
      min_html: {
        files: [{
          'dist/Bootstrap-DV-Standalone-Webpage.html': [
            'src/html/html-wrapper-begin.html',
            'src/html/div-wrapper-begin.html',
            'src/html/div-html.html',
            'src/html/style-wrapper-begin.html',
            'src/css/bootstrap-dv.min.css',
            'src/html/style-wrapper-end.html',
            'src/html/script-wrapper-begin.html',
            'src/js/bootstrap-dv.min.js',
            'src/html/script-wrapper-end.html',
            'src/html/div-wrapper-end.html',
            'src/html/html-wrapper-end.html'
          ]
        }]
      },
      div: {
        files: [{
          'dist/Bootstrap-DV.html': [
            'src/html/div-wrapper-begin.html',
            'src/html/div-html.html',
            'src/html/style-wrapper-begin.html',
            'src/css/bootstrap-dv.css',
            'src/html/style-wrapper-end.html',
            'src/html/script-wrapper-begin.html',
            'src/js/bootstrap-dv.js',
            'src/html/script-wrapper-end.html',
            'src/html/div-wrapper-end.html'
          ]
        }]
      },
      html: {
        files: [{
          'dist/Bootstrap-DV-Standalone-Webpage.html': [
            'src/html/html-wrapper-begin.html',
            'src/html/div-wrapper-begin.html',
            'src/html/div-html.html',
            'src/html/style-wrapper-begin.html',
            'src/css/bootstrap-dv.css',
            'src/html/style-wrapper-end.html',
            'src/html/script-wrapper-begin.html',
            'src/js/bootstrap-dv.js',
            'src/html/script-wrapper-end.html',
            'src/html/div-wrapper-end.html',
            'src/html/html-wrapper-end.html'
          ]
        }]
      },
      test: {
        files: [{
          'test/Bootstrap-Ready.html': [
            'test/_components/html-head.html',
            'test/_components/Bootstrap-Ready.html',
            'test/_components/html-body.html',
            'dist/Bootstrap-DV.html',
            'test/_components/html-wrapper-end.html'
          ],
          'test/Missing-Bootstrap.html': [
            'test/_components/html-head.html',
            'test/_components/Missing-Bootstrap.html',
            'test/_components/html-body.html',
            'dist/Bootstrap-DV.html',
            'test/_components/html-wrapper-end.html'
          ],
          'test/Missing-CSS.html': [
            'test/_components/html-head.html',
            'test/_components/Missing-CSS.html',
            'test/_components/html-body.html',
            'dist/Bootstrap-DV.html',
            'test/_components/html-wrapper-end.html'
          ],
          'test/Missing-JS.html': [
            'test/_components/html-head.html',
            'test/_components/Missing-JS.html',
            'test/_components/html-body.html',
            'dist/Bootstrap-DV.html',
            'test/_components/html-wrapper-end.html'
          ],
          'test/Missing-jQuery.html': [
            'test/_components/html-head.html',
            'test/_components/Missing-jQuery.html',
            'test/_components/html-body.html',
            'dist/Bootstrap-DV.html',
            'test/_components/html-wrapper-end.html'
          ],
          'test/Missing-Everything.html': [
            'test/_components/html-head.html',
            'test/_components/Missing-Everything.html',
            'test/_components/html-body.html',
            'dist/Bootstrap-DV.html',
            'test/_components/html-wrapper-end.html'
          ]
        }]
      }

    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-minify-html');


  // Register Grunt tasks
  grunt.registerTask('default', ['Compile-Bootstrap-DV', 'Assemble-Test']);

  grunt.registerTask('Compile-Bootstrap-DV', [
    'Assemble-Banner',
    'cssmin',
    'uglify',
    'concat:min_div',
    'concat:min_html',
    'minifyHtml',
    'concat:div',
    'concat:html'
  ]);

  grunt.registerTask('Assemble-Test', [
    'copy:test_bootstrap',
    'copy:test_jquery',
    'concat:test'
  ]);

  grunt.registerTask('Assemble-Banner', function () {
    /*jslint regexp: true */
    var pkg = grunt.file.readJSON('package.json'),
      strBanner,
      strName = pkg.description.replace(/\.(?:\n|.)*/, ''),
      strCopyright = 'Copyright © ' + pkg.author.name + ' ',
      strLicense = 'License: ',
      strVersion = 'Version: ' + pkg.version + ' ',
      blnOddName = strName.length % 2 !== 0, // true if odd, false if even
      strYears = pkg.meta.initial_version.date.year,
      strLength,
      strPrefix,
      intLongest;
    /*jslint regexp: false */

    if (pkg.meta.initial_version.date.year !== pkg.meta.current_version.date.year) {
      strYears = pkg.meta.initial_version.date.year + '-' + pkg.meta.current_version.date.year;
    }

    if (((strCopyright + strYears).length % 2 !== 0) === blnOddName) {
      strCopyright = strCopyright + strYears;
    } else {
      strCopyright = strCopyright + ' ' + strYears;
    }

    if (((strLicense + pkg.license).length % 2 !== 0) === blnOddName) {
      strLicense = strLicense + pkg.license;
    } else {
      strLicense = strLicense + ' ' + pkg.license;
    }

    if (((strVersion + '(' + pkg.meta.current_version.date.full + ')').length % 2 !== 0) === blnOddName) {
      strVersion = strVersion + '(' + pkg.meta.current_version.date.full + ')';
    } else {
      strVersion = strVersion + ' ' + '(' + pkg.meta.current_version.date.full + ')';
    }

    intLongest = Math.max(strName.length, strCopyright.length, strLicense.length, strVersion.length);

    for (strLength = ''; strLength.length !== intLongest; 0) {
      strLength = strLength + '-';
    }

    for (strPrefix = intLongest / 2 + strName.length / 2; strName.length !== strPrefix; 0) {
      strName = ' ' + strName;
    }
    for (strPrefix = intLongest / 2 + strCopyright.length / 2; strCopyright.length !== strPrefix; 0) {
      strCopyright = ' ' + strCopyright;
    }
    for (strPrefix = intLongest / 2 + strLicense.length / 2; strLicense.length !== strPrefix; 0) {
      strLicense = ' ' + strLicense;
    }
    for (strPrefix = intLongest / 2 + strVersion.length / 2; strVersion.length !== strPrefix; 0) {
      strVersion = ' ' + strVersion;
    }

    /*jslint white: true */
    strBanner = strLength + '\n' +
          strName + '\n' +
          strCopyright + '\n' +
          strLicense + '\n' +
          strLength + '\n' +
          strVersion;
    /*jslint white: false */

    // Display banner in console
    console.log('<pre><tt>' + strBanner + '</tt></pre>');

    /*jslint regexp: true */
    // Write banner to `src/html/div-html.html`
    grunt.file.write('src/html/div-html.html', grunt.file.read('src/html/div-html.html').replace(/^(?:(?!-->\n?)(?:\n|.))*-->\n?/, '    <!--\n' + strBanner.replace(/^(\n|.)/gm, '       $1') + '\n    -->\n'));
    // Write banner to `src/html/html-wrapper-begin.html`
    grunt.file.write('src/html/html-wrapper-begin.html', grunt.file.read('src/html/html-wrapper-begin.html').replace(/\n\s*<!--(?:(?!-->\n?)(?:\n|.))*-->\n?/, '\n  <!--\n' + strBanner.replace(/^(\n|.)/gm, '     $1') + '\n  -->\n'));
  });
};
