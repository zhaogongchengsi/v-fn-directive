const typescript = require("rollup-plugin-typescript2");
const babel = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const atransformRuntime = require("@babel/plugin-transform-runtime");
const resolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
module.exports = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "iife",
    name: "v",
  },

  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    babel({
      plugins: [atransformRuntime],
      babelHelpers: "runtime",
    }),
    commonjs(),
    resolve(),
    replace({
      preventAssignment: false,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};
