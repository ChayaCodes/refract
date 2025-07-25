export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/refract.cjs.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/refract.esm.js',
      format: 'esm'
    }
  ],
  external: []
};