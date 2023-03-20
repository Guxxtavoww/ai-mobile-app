module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['transform-inline-environment-variables'],
      ['react-native-reanimated/plugin'],
      ['inline-dotenv'],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
