
module.exports = {
  presets: [
    require.resolve('/Users/lxa/workspaces/github/youtil/node_modules/_@docusaurus_core@2.3.1@@docusaurus/core/lib/babel/preset.js'),
    [
      require.resolve('@babel/preset-react'),
      {
        "pragma": "createElement",
        "pragmaFrag": "Fragment",
        "runtime": "classic"
      },
    ],
  ],
};