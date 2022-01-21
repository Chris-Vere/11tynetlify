const del = require('del');
module.exports = config => {
  del('dist/*');

  config.addPassthroughCopy('./src/assets/');
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    }
  }
}
