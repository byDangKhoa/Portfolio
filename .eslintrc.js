module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  overrides: [],
  parserOptions: {
    ecmaVersion: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/prop-types': 0, // not prop-type
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
// module.exports = {
//   plugins: ['simple-import-sort'],

//   parser: 'babel-eslint',

//   root: true, // Make sure eslint picks up the config at the root of the directory
//   parserOptions: {
//     ecmaVersion: 9, // Use the latest ecmascript standard
//     sourceType: 'module', // Allows using import/export statements
//     ecmaFeatures: {
//       jsx: true // Enable JSX since we're using React
//     }
//   },
//   settings: {
//     react: {
//       version: 'detect' // Automatically detect the react version
//     }
//   },
//   env: {
//     browser: true, // Enables browser globals like window and document
//     amd: true, // Enables require() and define() as global variables as per the amd spec.
//     node: true, // Enables Node.js global variables and Node.js scoping.
//     es6: true
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
//   ],
//   rules: {
//     'react/react-in-jsx-scope': 'off',
//     'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }], // Use our .prettierrc file as source
//     'react/prop-types': 0, // not prop-type
//     'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
//   }
// };
