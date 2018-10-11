const path = require('path');
const { RemoteBrowserTarget } = require('happo.io');
const happoPluginTypescript = require('happo-plugin-typescript');

const { HAPPO_API_KEY: apiKey, HAPPO_API_SECRET: apiSecret } = process.env;

module.exports = {
  apiKey,
  apiSecret,

  targets: {
    chrome: new RemoteBrowserTarget('chrome', { viewport: '800x600' }),
  },

  plugins: [
    happoPluginTypescript(),
  ],
  renderWrapperModule: path.resolve(__dirname, 'src/renderWrapper.tsx'),
};
