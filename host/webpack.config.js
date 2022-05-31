const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const dependencies = require("./package.json").dependencies;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "host",
    publicPath: "http://localhost:4201/"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      library: {type: "var", name: "host"},
      filename: "remoteEntry.js",
      exposes: {
      },
      shared: {
        '@angular/common/http': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
        '@angular/common': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
        '@angular/core': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
        '@angular/platform-browser': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
        '@angular/platform-browser-dynamic': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
        '@angular/router': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
        '@angular/cdk/a11y': {singleton: true, strictVersion: false, requiredVersion: 'auto'},
        '@angular/animations': {singleton: true, strictVersion: false, requiredVersion: 'auto'}
      }
    }),
  ],
};
