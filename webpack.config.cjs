const path = require("path")
const CopyPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const SRC_DIR_PATH = "./src_named_dir/"


/**
 * @type {import("webpack").Configuration}
 */
let config = {
    entry: {
        main: [ `${SRC_DIR_PATH}/main.ts`, `${SRC_DIR_PATH}/main_js.js` ],

        "static/js/test": [
            `${SRC_DIR_PATH}/static/js/test.jsx`,
        ],
    },

    output: {
        path: path.resolve(__dirname, "dist_custom_dir"),
    },


    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".cjs", ".mjs"],
    },


    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(jsx)?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },


    // Enable source maps
    devtool: "source-map",

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: `${SRC_DIR_PATH}/.`,
                    to: "",
                    filter: (resourcePath) => {
                        return /\.(json|html|css)$/.test(resourcePath);
                    }
                }
            ],
        }),

        /*new WebpackManifestPlugin({
            fileName: "asset-manifest.json",
            publicPath: "/",
            generate(seed, files, entries) {
                const manifest = {
                    files: {},
                    entrypoints: [],
                };

                // Map all files: file.name -> file.path (with publicPath)
                files.forEach(file => {
                    manifest.files[file.name] = file.path;
                });

                // Flatten entries into a unique array of entrypoints
                const seen = new Set();
                Object.values(entries).forEach(entryFiles => {
                    entryFiles.forEach(file => {
                        if (!seen.has(file)) {
                            seen.add(file);
                            manifest.entrypoints.push(file);
                        }
                    });
                });

                return manifest;
            },
        }),*/
    ],
}

module.exports = config