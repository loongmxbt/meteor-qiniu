QN = {
    upload: function(file, path, callback) {
        Meteor.call('qn_upload', file, path, callback);
    }
}