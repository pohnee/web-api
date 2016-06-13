module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            options: {
                sourceMap: true
            },
            dist: {
                src: [
                    //e.g:
                    //'scripts/*.js', // All JS in the scripts folder
                    //'paperoni/*.js'  // All JS in the paperoni folder

                    //files are listed one by one because the ordering matters
                    'scripts/angular.min.js',
                    'scripts/angular-route.min.js',
                    'scripts/jquery-1.12.4.min.js',
                    'scripts/bootstrap.min.js',
                    'scripts/paperoni.js',
                    'paperoni/paperoni.module.js',
                    'paperoni/paperoni.routes.js',
                    'paperoni/paperoni.config.js',
                    'paperoni/home/controllers/homeController.js',
                    'paperoni/books/controllers/booksController.js'
                ],
                dest: 'build/production.js',
            }
        },
        
        uglify: {
            build: {
                src: 'build/production.js',
                dest: 'build/production.min.js'
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);

};