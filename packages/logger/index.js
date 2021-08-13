const consola = require('consola');

const logger = {
    success: (msg) => { consola.success(msg) },
    info: (msg) => { consola.info(msg) },
    error: (msg) => { consola.error(msg) }
}

module.exports = logger