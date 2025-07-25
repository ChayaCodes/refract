export default {
  input: 'packages/refract/src/index.js',
  output: [
    {
      file: 'packages/refract/dist/refract.cjs.js',
      format: 'cjs',
    },
    {
      file: 'packages/refract/dist/refract.esm.js',
      format: 'esm',
    },
  ],
  external: ['react', 'react-dom'],
};
