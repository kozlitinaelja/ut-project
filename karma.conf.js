/**
 * Created by elnara.kozlitina on 8/24/15.
 */

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: [
      'js/**/*.js',
      'test/**/*.js'
    ],
    logLevel: config.LOG_INFO,
    preprocessors: {
      'js/**/*.js': ['babel'],
      'test/**/*.js': ['babel']
    },
    reporters: ['progress'],
    babelPreprocessor: {
      options: {
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    }

  });
};
