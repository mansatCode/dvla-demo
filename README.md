# dvla-demo
A purely functional React Native app demonstrating the use of the DVLA API.

`npm i axios` <br />
`npm install -D react-native-dotenv`

1. Create a .env file in the root directory containing the DVLA API key
2. Make the following changes to `babel.config.js`

```
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
```
