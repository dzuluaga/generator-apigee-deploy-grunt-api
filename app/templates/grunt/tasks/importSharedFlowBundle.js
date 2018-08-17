/*jslint node: true */

var grunt_common = require('apigee-sdk-mgmt-api');
var async = require('async');

module.exports = function(grunt) {

    grunt.registerTask('importSharedFlowBundle', 'Import Shared Flow bundle under a Shared Flow name', function() {
        var importedBundle = function(error, response, body) {
            if (!error && response.statusCode === 201) {
                var importBundleRes = JSON.parse(body);
                grunt.option('revision', importBundleRes.revision);
            }
            grunt.log.debug(response.statusCode);
            grunt.log.debug(body);
            done(error);
        };
        var done = this.async();
        grunt_common.importSharedFlowBundle(grunt.config.get('apigee_profiles'), importedBundle, grunt.option.flags().indexOf('--curl') !== -1);
    });
};
