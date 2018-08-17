/*jslint node: true */

var grunt_common = require('apigee-sdk-mgmt-api');

module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('getDeployedSharedFlowRevisions', 'Retrieve Last Shared Flow revision deployed', function() {
        var sharedFlowRevisions = function(error, response, body) {
            if (!error && (response.statusCode === 200 || response.statusCode === 400)) {
                var sharedFlowDeployedRevisions = JSON.parse(body);
                grunt.option('revisions_deployed', sharedFlowDeployedRevisions);
            }
            grunt.log.debug(response.statusCode)
            grunt.log.debug(JSON.stringify(response.headers))
            grunt.log.debug(body);
            done();
        }
        var done = this.async();
        grunt_common.getDeployedSharedFlowRevisions(grunt.config.get('apigee_profiles'), sharedFlowRevisions, grunt.option.flags().indexOf('--curl') !== -1)
    });
};
