module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.initConfig({
        pkg: grunt.file.readJSON('node_modules/grunt/package.json'),

      /*  sass: {
            dist: {
                /!*options:{
                    style:'compressed'
                },*!/
                files: {
                    'css/style.css' : 'scss/style.scss'
                }
            }
        }*/
        sass: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'scss/',
                    src: ['**/*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        autoprefixer:{
            options: {
                browsers: ['last 4 versions']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'css/*.css',
                dest: 'css/'
            }/*,
            dist:{
                files:{
                    'css/style.css':'css/style.css'
                }
            }*/
        },
        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass', 'autoprefixer']
            }
        }

    });

    grunt.registerTask('default',['watch']);
};