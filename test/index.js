const t = require('tap')
const { log } = require('../')
const { LEVELS } = log

t.matchSnapshot(LEVELS, 'log levels')
for (const level of LEVELS) {
  t.test(level, t => {
    t.match(log[level], Function)
    process.once('log', (actual, ...args) => {
      t.equal(actual, level, 'emitted log with expected level')
      t.same(args, [1, 2, 3], 'got expected args')
      t.end()
    })
    log[level](1, 2, 3)
  })
}
