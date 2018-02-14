module.exports = function (config) {
  config.set({
    frameworks: [ 'jasmine', 'karma-typescript' ],
    files: [ './src/test.ts' ],
    preprocessors: { './src/**/*.ts': [ 'karma-typescript' ] },
    reporters: [ 'karma-typescript' ],
    browsers: [ 'Chrome' ]
  });
};
