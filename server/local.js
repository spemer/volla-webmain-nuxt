const { Builder } = require('nuxt')
const consola = require('consola')
const internalIp = require('internal-ip')
const app = require('./app')
const { nuxt } = require('./nuxt')

const port = 8001

const start = async () => {
  if (process.env === 'dev') {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.listen(port)
  consola.ready({
    message: `Server listening on http://${internalIp.v4.sync()}:${port}`,
    badge: true
  })
}

start()
