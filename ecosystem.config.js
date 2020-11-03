module.exports = {
  apps: [
    {
      name: 'Portfolio',
      exec_mode: 'cluster',
      instances: 2,
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
