module.exports = (api, projectOptions) => {
  api.chainWebpack(config => {

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(() => undefined);

      config.module
      .rule('media')
      .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(() => undefined);

      config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url-loader')
      .loader('url-loader')
      .tap(() => undefined);

    const cJsonRule = config.module.rule('cjson').test(/\.cjson$/);
    cJsonRule.use('raw-loader').loader('raw-loader');

    config.resolve.extensions.merge(['.cjson'])

    if (process.env.NODE_ENV !== 'production' || !process.env.VUE_INJECTED) {
      return;
    }

    config.externals({
      'vue': 'Vue',
      'vueHelper': 'glueHelper'
    });
  });
}
