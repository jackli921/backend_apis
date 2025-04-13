// webpack.config.js
import path from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.ts",
  mode: "development",
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    module: true,
  },
  target: "node",
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@controller": path.resolve(process.cwd(), "src/controllers/"),
    },
    extensionAlias: {
      ".js": [".ts", ".js"],
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: "source-map",
};
