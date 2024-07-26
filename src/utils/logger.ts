import pino from 'pino'

export const logger = pino({
  hooks: {
    // Pino expects object to be the first argument
    logMethod(inputArgs, method) {
      if (inputArgs.length >= 2) {
        const arg1 = inputArgs.shift()
        const arg2 = inputArgs.shift()
        return method.apply(this, [arg2, arg1, ...inputArgs])
      }
      return method.apply(this, inputArgs)
    },
  },
  level: process.env.LOG_LEVEL || 'info',
  base: undefined,
  timestamp: process.env.LOG_TIMESTAMP === 'true',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
})
