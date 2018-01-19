Package.describe({
  summary: "Simple templates to add login widgets to an app",
  version: "0.0.1",
  name: "meteormogul:accounts-vue"
});

Package.onUse(function (api) {
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('meteormogul:accounts-vue-unstyled', 'client');
  api.use('less', 'client');

  api.addFiles(['login_buttons.less'], 'client');
});
