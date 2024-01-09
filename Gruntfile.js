module.exports = function(grunt)
{
    grunt.initConfig
    ({
        pkg: grunt.file.readJSON('package.json'),    //configuraçoes do Grunt

        less:
        {
            development: 
            {
                files:
                {
                    'main.css': 'main.less'
                }
            },

            production:
            {
                options:
                {
                    compress: true,
                },

                files:
                {
                    'main.min.css': 'main.less'
                }
            }
        },
        

        uglify:
        {
            options:
            {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build:
            {
                src: 'source.js',
                dest: 'output.min.js'
            }
        }        
    });
    
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify'); 

    grunt.registerTask('default', ['less', 'uglify']);         //Defaul obrigatorio
}