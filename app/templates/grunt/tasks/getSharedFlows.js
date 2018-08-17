/*jslint node: true */

var grunt_common = require('apigee-sdk-mgmt-api');

module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('getSharedFlows', 'Retrieve all Shared Flows revisions', function() {
        var sharedflowsRevisions = function(error, response, body) {
            grunt.log.writeln(response.statusCode)
            grunt.log.writeln(body);
            done();
        }
        var done = this.async();
        grunt_common.getSharedFlows(grunt.config.get('apigee_profiles'), sharedflowsRevisions, grunt.option.flags().indexOf('--curl') !== -1)
    });
};
