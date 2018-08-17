/*jslint node: true */

module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('deploySharedFlowRevisionAlias', 'Deploy an Shared Flow revision alias', function() {
        switch (grunt.cli.tasks[0]){
            case 'UPDATE_CURRENT_REVISION' :
                grunt.task.run('deploySharedFlow:' + grunt.option('revisions_undeployed').name);
                break;
            case 'IMPORT_DEPLOY_BUMP_REVISION' :
                grunt.task.run('deploySharedFlow:' + grunt.option('revision'));
                break;
            case 'DEPLOY_IMPORT_BUMP_SEAMLESS_REVISION' :
                grunt.task.run('deploySharedFlow:' + grunt.option('revision'));
                break;
            default :
                grunt.task.run('deploySharedFlow:' + grunt.option('revision'));
                break;
        }
    });
};
