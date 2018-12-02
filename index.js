module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {

    const cJsonRule = webpackConfig.module.rule('cjson').test(/\.cjson$/);
    cJsonRule.use('raw-loader').loader('raw-loader');
  });
}
