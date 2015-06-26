var wrappedPutFile = Meteor.wrapAsync(qiniu.io.putFile, qiniu.io);

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

    qn_upload: function(file, path) {
        // check(file, Object);

        var extra = new qiniu.io.PutExtra();
        var uptoken = Meteor.call('qn_uptoken');
        console.log("extra: " + extra);
        console.log("uptoken: " + uptoken);

        // server side file is empty
        console.log("server file: ");
        console.log(file);
 
        var key = path + "test";
        console.log("key: " + key);
       
        wrappedPutFile(uptoken, key, file, extra);

    }
})
