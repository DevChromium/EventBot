import consola from "consola"

export const logInfo = (msg: string) => consola.info(msg)
export const logSuccess = (msg: string) => consola.success(msg)
export const logError = (msg: string | Error) => consola.error(msg)
export const logFatal = (msg: string | Error) => consola.fatal(msg)

