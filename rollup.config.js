import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import serve from "rollup-plugin-serve";
import json from "@rollup/plugin-json";

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ["./dist"],
  host: "0.0.0.0",
  port: 5002,
  allowCrossOrigin: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const plugins = [
  nodeResolve(),
  commonjs(),
  typescript(),
  json(),
  babel({
    exclude: "node_modules/**",
    babelHelpers: "bundled",
  }),
  dev && serve(serveopts),
  !dev && terser(),
];

// export default {
//   input: "src/screensaver-card.ts",  // Assicurati che il punto di ingresso sia corretto
//   output: {
//     file: "dist/screensaver-card.js",  // Questo è il file di output
//     format: "es",
//     sourcemap: false,
//   },
//   plugins: [...plugins],
// };

export default [
  {
      input: "src/screensaver-card.ts",
      output: {
          dir: "dist",
          format: "es",
      },
      plugins: [...plugins],
  },
];
