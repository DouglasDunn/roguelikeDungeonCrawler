var webpack = require("webpack");

module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/js/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: "app/components/Main.jsx",
      RenderDungeon: "app/components/RenderDungeon.jsx",
      CreateRooms: "app/components/CreateRooms.jsx",
      CreateCharactersAndItems: "app/components/CreateCharactersAndItems.jsx",
      MovePlayer: "app/components/MovePlayer.jsx",
      Player: "app/components/Player.jsx",
      Monster: "app/components/Monster.jsx",
      BossMonster: "app/components/BossMonster.jsx",
      GameData: "app/components/GameData.jsx",
      Modal: "app/components/Modal.jsx",
      applicationStyles: "app/styles/app.scss"
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
