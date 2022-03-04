module.exports = (config, context) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(png|jpe?g|gif|webp)$/,
          type: "asset"
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              dependency: { not: ["url"] },
              use: [
                {
                  loader: require.resolve("@svgr/webpack"),
                  options: {
                    svgo: false,
                    titleProp: true,
                    ref: true
                  }
                }
              ]
            }
          ]
        },
        {
          test: /\.(html)$/,
          use: {
            loader: "html-loader"
          }
        }
      ]
    }
  };
};
