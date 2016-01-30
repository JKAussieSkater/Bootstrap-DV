var module, require;

module.exports = function (grunt) {
    'use strict';

    // Configuration goes here
    grunt.initConfig({

        //Retrieve project's metadata
        pkg: grunt.file.readJSON('package.json'),

        mybanner:   '-------------------------------------\n' +
                    '         <%= pkg.name %>\n' +
                    'Copyright © <%= pkg.author.name %>  2015-<%= grunt.template.today("yyyy") %>\n' +
                    '-------------------------------------\n' +
                    '     Version: <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)',

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

};
