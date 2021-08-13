module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/server-1/'
      : '/'
}