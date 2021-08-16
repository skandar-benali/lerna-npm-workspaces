import consola from 'consola';

const logger = {
    success: (msg: string): void => { consola.success(msg) },
    info: (msg: string): void => { consola.info(msg) },
    error: (msg: string): void => { consola.error(msg) }
}

export default logger