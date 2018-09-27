// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
// Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
// https://12factor.net/config
require('dotenv').config();
module.exports = function(wallaby) {

  // Babel, jest-cli and some other modules may be located under
  // react-scripts/node_modules, so need to let node.js know about it
  var path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
  require('module').Module._initPaths();

  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '!src/**/*.test.js?(x)'
    ],

    tests: ['src/**/*.test.js?(x)'],

    env: {
      type: 'node',
      runner: 'node',
      //params: {
        //env : "REACT_APP_apiKey=AIzaSyAZZRGFnOciwLZsSMjBlilnxfIlPcXXtc4;REACT_APP_authDomain=flw-rcmps-frbs.firebaseapp.com;REACT_APP_databaseURL=https://flw-rcmps-frbs.firebaseio.com;REACT_APP_projectId=flw-rcmps-frbs;REACT_APP_storageBucket=flw-rcmps-frbs.appspot.com;REACT_APP_messagingSenderId=985894078085;REACT_APP_VERSION=$npm_package_version;"
      //}
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: ['react-app']
      })
    },

    setup: wallaby => {
      const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(p => require.resolve('react-scripts/' + p));
      Object.keys(jestConfig.transform || {}).forEach(k => ~k.indexOf('^.+\\.(js|jsx') && void delete jestConfig.transform[k]);
      delete jestConfig.testEnvironment;
      if(jestConfig.setupTestFrameworkScriptFile) {
        jestConfig.setupTestFrameworkScriptFile = jestConfig.setupTestFrameworkScriptFile.replace('<rootDir>', wallaby.projectCacheDir);
      }
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest'
  };
};