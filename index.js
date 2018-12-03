module.exports = (api, projectOptions) => {
  api.chainWebpack(config => {

    config.resolve.extensions.merge(['.cjson'])

    const cJsonRule = config.module.rule('cjson').test(/\.cjson$/);
    cJsonRule.use('raw-loader').loader('raw-loader');

    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    config.externals({
      'vue': 'Vue',
      'vueHelper': 'glueHelper'
    });
  });
}
