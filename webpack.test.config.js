// webpack.test.config.js
import path from "path";
import { fileURLToPath } from "url";
import { merge } from "webpack-merge"; // Install webpack-merge if needed.
import baseConfig from "./webpack.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testConfig = {
  entry: "./tests/index.test.ts", // Specifies the main file where your tests will start
    output: {
      filename: "bundle.test.js",
      path: path.resolve(process.cwd(), "dist/tests"), // Determines the directory where the bundled test file will be saved (inside 'dist/tests')
    },
    mode: "development", // Sets the build mode to 'development', which usually disables optimizations for easier debugging
    target: "node", // Specifies that the output code is intended to run in a Node.js environment
    externals: [], // An array to list modules that should *not* be included in the bundle (here it's empty, meaning everything should be bundled)
};

export default merge(baseConfig, testConfig);