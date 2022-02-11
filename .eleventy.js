const del = require('del');

const passThroughPaths = [
  './src/assets/',
  './src/favicon.ico',
];

module.exports = config => {
  del('dist/*');

  passThroughPaths.forEach((path) => {
    config.addPassthroughCopy(path);
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    }
  }
}
