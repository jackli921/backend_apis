// webpack.test.config.js
import path from "path";
import { fileURLToPath } from "url";
import { merge } from "webpack-merge"; // Install webpack-merge if needed.
import baseConfig from "./webpack.config.js";
import fs from 'fs'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testsDir = path.resolve(__dirname, 'tests');

const testFiles = fs.readdirSync(testsDir).filter(file => file.endsWith('.test.ts'))

const entryObject = testFiles.reduce((entries, file) =>{
  const entryName = file.replace('.test.ts', '.test')
  const entryPath = path.resolve(testsDir, file)
  entries[entryName] = entryPath
  return entries
}, {})  

const testConfig = {
    entry: entryObject, // Specifies the main file where your tests will start
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist/tests'), // Determines the directory where the bundled test file will be saved (inside 'dist/tests')
    },
    mode: 'development', // Sets the build mode to 'development', which usually disables optimizations for easier debugging
    target: 'node', // Specifies that the output code is intended to run in a Node.js environment
    externals: ['express', 'supertest', 'chai', 'mocha', 'axios'], // An array to list modules that should *not* be included in the bundle (here it's empty, meaning everything should be bundled)
};

export default merge(baseConfig, testConfig);