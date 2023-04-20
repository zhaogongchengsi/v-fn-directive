const typescript = require("rollup-plugin-typescript2");
const babel = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const atransformRuntime = require("@babel/plugin-transform-runtime");
const resolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const dts = require("rollup-plugin-dts");
module.exports = () => {
  const plugins = [
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
    dts({
      output: "dist/index.d.ts",
    }),
  ];

  return [
    {
      input: "src/index.ts",
      output: {
        file: "dist/index.mjs",
        format: "esm",
      },
      plugins,
    },
    {
      input: "src/index.ts",
      output: {
        file: "dist/index.global.js",
        format: "iife",
        name: "v",
      },

      plugins,
    },
  ];
};
