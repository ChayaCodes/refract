module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: '18'
      }
    }],
    '@babel/preset-typescript'
  ],
  plugins: [],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current'
          }
        }],
        '@babel/preset-typescript'
      ]
    }
  }
};