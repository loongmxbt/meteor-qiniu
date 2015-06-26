Package.describe({
  name: 'loongmxbt:meteor-qiniu',
  version: '0.0.1',
  summary: 'Qiniu cloud storage wrapper for Meteor',
  git: 'https://github.com/loongmxbt/meteor-qiniu',
  documentation: 'README.md'
});

Npm.depends({
  'qiniu': '6.1.8'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['underscore', 'check'], ['client', 'server']);

  api.addFiles(['server/startup.js', 'server/utils.js'],'server');
  api.addFiles(['client/api.js'],'client');

  api.export && api.export('QN');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('loongmxbt:meteor-qiniu');
  api.addFiles('meteor-qiniu-tests.js');
});
