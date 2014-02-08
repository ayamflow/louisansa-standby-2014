module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: 'sass'
                },
                files: {
                    'css/styles.css' : 'sass/styles.scss'
                }
            },
            dev: {
                options: {
                    style: 'expanded',
                    loadPath: 'sass'
                },
                files: {
                    'css/styles.css' : 'sass/styles.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'sass/*.scss',
                tasks: ['sass']
            }
        },
         connect: {
            server: {
                options: {
                    port: 9734,
                    open: true,
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['sass:dev', 'watch']);
    grunt.registerTask('build', ['sass:dist']);
};