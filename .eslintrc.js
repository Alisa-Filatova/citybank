/**
 * Параметрами для ESLint
 */

module.exports = {
  extends: 'airbnb-es5',

  rules: {
      indent: ['error', 4, {
          SwitchCase: 1,
          VariableDeclarator: 1,
      }],

      // http://eslint.org/docs/rules/func-names
      'func-names': 0,

      // http://eslint.org/docs/rules/space-before-function-paren
      'space-before-function-paren': 0,
  },

  settings: {
      'import/resolver': {
          webpack: {
              config: `${__dirname}/webpack.config.js`,
          },
      },
  },

  env: {
      browser: true,
      jquery: true,
  },
};
