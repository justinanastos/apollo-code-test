// The order is here for documentation purposes. Ignore alpha rule.
/* eslint-disable justinanastos/alpha-object-expression */

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],

  parser: 'babel-eslint',

  plugins: [
    'justinanastos',
    'flowtype',
    'prettier',
    'react',
    'standard',
    'wyze',
  ],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      impliedStrict: true,
    },
  },

  globals: {
    $ElementType: false,
  },

  root: true,

  rules: {
    'import/no-extraneous-dependencies': 0,

    'prettier/prettier': 'error',

    // Use `wyze/sort-imports` in favor of `import/first`
    'import/first': 0,

    'import/prefer-default-export': 0,

    // Use custom captions implementations so we don't need this
    'jsx-a11y/media-has-caption': 0,

    'prefer-destructuring': 0,

    // This rule is buggy. Revisit when
    // https://github.com/yannickcr/eslint-plugin-react/issues/1389 is resolved
    'react/no-typos': 0,

    // Don't follow this because we keep multiline semicolons on a following
    // line. We should try using
    // https://github.com/justinanastos/eslint-plugin-justinanastos/blob/master/docs/rules/chained-semi.md
    'semi-style': 0,

    // ---------------------------------------------------------------------------------------------
    // # Rules not included in airbnb

    'justinanastos/alpha-object-expression': 1,

    'callback-return': 2,

    curly: [2, 'all'],

    'jsx-a11y/no-onchange': 2,

    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
    ],

    'newline-before-return': 2,

    'no-invalid-this': 2,

    'no-mixed-requires': 2,

    'react/default-props-match-prop-types': 0,

    'react/jsx-key': 2,

    'react/no-direct-mutation-state': 2,

    'react/no-set-state': 2,

    // The default config doesn't include `sortShapeProp`
    'react/sort-prop-types': [
      2,
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],

    // The default order places `type` before `all`, I felt this made more sense.
    'wyze/sort-imports': [
      2,
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ['none', 'all', 'type', 'named', 'default'],
      },
    ],

    // ---------------------------------------------------------------------------------------------
    // Stricter versions of airbnb

    // Allow RewireAPI and graphql's __typename with `no-underscore-dangle`
    'no-underscore-dangle': [
      2,
      {
        allow: ['__typename'],
      },
    ],

    // Make this rule work with react-router
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['onTouchTap', 'to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    'no-else-return': ['error', { allowElseIf: false }],

    'react/require-default-props': 0,

    // I want pure, case insensitive, alphabetical order. This overrides the
    // default of putting reserved props (like `key`) first
    'react/jsx-sort-props': [
      2,
      {
        ignoreCase: true,
        reservedFirst: false,
      },
    ],
  },
};
