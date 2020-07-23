module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--m': '(min-width: 640px)' }
        },
        ,
        {
          customMedia: { '--t': '(min-width: 980px)' }
        }
      ]
    }
  }
}
