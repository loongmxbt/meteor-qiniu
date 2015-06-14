# Qiniu cloud storage wrapper for Meteor

## Ref

https://github.com/Lepozepo/S3/
http://developer.qiniu.com/docs/v6/sdk/nodejs-sdk.html

## Usage

### Step 1

Define your Qiniu credentials. Server Side

```
QN.config = {
    access_key: '0C4vv7tesnjdk6vOiWBHbIrEnZEVk4ysi-wegLYA',
    secret_key: 'PJDi-ftcf-D839K-iLAmFx9p1C2E-DHX3ptG7DqV',
    bucket_name: 'mysite',
    domain_name: 'xxxxx.com1.z0.glb.clouddn.com'
}
```

### Step 2

Create a file input and progress indicator. Client Side

```
<template name="qiniu_tester">
    <input type="file" class="file_bag">
    <button class="upload">Upload</button>

    {{#each files}}
        <p>{{percent_uploaded}}</p>
    {{/each}}
</template>
```

### Step 3

Create a function to upload the files and a helper to see the uploads progress. Client Side

```
Template.qiniu_tester.events({
    "click button.upload": function(){
        var files = $("input.file_bag")[0].files

        QN.upload({
                files:files,
                path:"subfolder"
            },function(e,r){
                console.log(r);
        });
    }
})

Template.qiniu_tester.helpers({
    "files": function(){
        return S3.collection.find();
    }
})
```

## API

### QN.upload(ops, callback)

### QN.delete(key, callback)

### QN.downloadUrl(key, callback)
Private download url

### QN.fileInfo(key, callback)

### QN.bucketInfo()