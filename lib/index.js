const log = {
  LEVELS: [
    'notice',
    'error',
    'warn',
    'info',
    'verbose',
    'http',
    'silly',
    'pause',
    'resume',
  ],
}
for (const level of log.LEVELS) {
  log[level] = (...args) => process.emit('log', level, ...args)
}

module.exports = { log }
