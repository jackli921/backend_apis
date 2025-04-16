import path from 'path';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.ts',
    mode: 'development', // Sets the build mode to 'development', which usually disables optimizations for easier debugging
    experiments: {
        outputModule: true, // Enables experimental support for outputting ECMAScript Modules
    },
    output: {
        filename: 'bundle.js', // Sets the name of the output bundle file
        path: path.resolve(process.cwd(), 'dist'), // Determines the directory where the output bundle will be saved (inside 'dist')
        module: true, // Indicates that the output should be treated as an ECMAScript Module (so no other config setting should use commonjs, or else not found errors occur during runtime)
},
    target: 'node', // Specifies that the output code is intended to run in a Node.js environment
    resolve: {
        extensions: ['.ts', '.js'], // Tells Webpack which file extensions to consider when resolving modules
        alias: {
            '@controller': path.resolve(process.cwd(), 'src/controllers/'), // Creates an alias so you can use '@controller' in your imports to refer to the 'src/controllers' directory
        },
        extensionAlias: {
            '.js': ['.ts', '.js'], // Specifies that when resolving '.js' files, also consider '.ts' files first
        },
        modules: [
            path.resolve(process.cwd(), 'node_modules'), // Specifies a directory to search for modules (your project's 'node_modules')
            'node_modules', // Fallback directory to search for modules
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // Defines a rule that applies to files ending with '.ts'
                use: 'ts-loader', // Specifies the loader to use for these files (ts-loader will transpile TypeScript to JavaScript)
                exclude: /node_modules/, // Excludes files in the 'node_modules' directory from this rule
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), // Uses a plugin to clean the output directory before each build
    ],
    devtool: 'source-map', // Configures the generation of source maps for easier debugging in the browser or Node.js
};
