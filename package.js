Package.describe({
  name: 'eha:nojs-banner',
  version: '1.1.0',
  summary: 'Display a banner if JavaScript is disabled',
  git: 'https://github.com/ecohealthalliance/meteor-nojs-banner.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');

  api.use([
    'templating'
  ], 'client');

  api.addFiles([
    'head.html'
  ], 'client');
});
