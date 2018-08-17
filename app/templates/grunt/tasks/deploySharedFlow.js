/*jslint node: true */

var grunt_common = require('apigee-sdk-mgmt-api');

module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('deploySharedFlow', 'Deploy an Shared Flow. deploySharedFlowRevision:{revision_id}', function(revision) {
        var deployedRevision = function(error, response, body) {
            /*eslint no-empty:0 */
            if (!error && response.statusCode === 200) {
                //var undeployResult = JSON.parse(body);
            }
            else{
                done(false)
            }
            grunt.log.debug(response.statusCode)
            grunt.log.debug(body);
            done(error);
        }
        //core logic
        if(!revision) {
            grunt.fail.fatal('invalid revision id. provide either argument as deploySharedFlowRevision:{revision_id}');
        }else{
            var done = this.async();
            grunt_common.deploySharedFlow(grunt.config.get('apigee_profiles'), revision, deployedRevision, grunt.option.flags().indexOf('--curl') !== -1)
        }
    });
};
