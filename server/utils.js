Meteor.methods({
    qn_uptoken: function() {
        var bucket_name = QN.config.bucket_name;
        var putPolicy = new qiniu.rs.PutPolicy(bucket_name);
        return putPolicy.token();
    },

    qn_delete: function(key) {
        check(key, String);
        console.log("server delete call");
        var client = new qiniu.rs.Client();
        var bucketName = QN.config.bucket_name;
        client.remove(bucketName, key, function(err, ret) {
            if (!err) {

            } else {
                console.log(err);
            }
        })
    },

    qn_upload: function(file, path, uptoken) {
        // check(file, Object);

        var extra = new qiniu.io.PutExtra();
        console.log("extra: " + extra);
        console.log("uptoken: " + uptoken);

        console.log("server file: ");
        console.log(file);
 
        var key = path + file._id + file.name;
        console.log("key: " + key);

        qiniu.io.putFile(uptoken, key, file, extra, function(err, ret) {
            if (!err) {
                console.log(ret.key, ret.hash);
            } else {
                console.log(err);
            }
        });
    }
})
