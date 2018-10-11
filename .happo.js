const { RemoteBrowserTarget } = require('happo.io');

const { HAPPO_API_KEY: apiKey, HAPPO_API_SECRET: apiSecret } = process.env;

module.exports = {
  apiKey,
  apiSecret,

  customizeWebpackConfig: config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
        },
      ],
    });
    config.resolve = Object.assign({}, config.resolve, {
      extensions: ['.tsx', '.ts', '.js'],
    }); // add in the existing config.resolve that happo needs

    return config;
  },

  targets: {
    chrome: new RemoteBrowserTarget('chrome', { viewport: '800x600' }),
  },
  include: '**/@(*-happo|happo).@(ts|tsx)',
};
