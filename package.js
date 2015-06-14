Package.describe({
  name: 'loongmxbt:meteor-qiniu',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
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
