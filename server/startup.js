qiniu = Npm.require("qiniu");

QN = {
    config: {}
}

Meteor.startup(function(){
    var has_ak = _.has(QN.config, "access_key") && QN.config.access_key;
    var has_sk = _.has(QN.config, "secret_key") && QN.config.secret_key;
    var has_bn = _.has(QN.config, "bucket_name") && QN.config.bucket_name;
    var has_dn = _.has(QN.config, "domain_name") && QN.config.domain_name;

    if (!has_ak) {
        console.log("QN: Qiniu access key is undefined");
    }

    if (!has_sk) {
        console.log("QN: Qiniu secret key is undefined");
    }

    if (!has_bn) {
        console.log("QN: Qiniu bucket name is undefined");
    }

    if (!has_dn) {
        console.log("QN: Qiniu domain name is undefined");
    }

    if (!has_ak || !has_sk || !has_bn || !has_dn) {
        return
    }

    qiniu.conf.ACCESS_KEY = QN.config.access_key;
    qiniu.conf.SECRET_KEY = QN.config.secret_key;
    console.log("QN: Qiniu config is successfully defined!");

})