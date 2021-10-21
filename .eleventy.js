module.exports = config => {
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
