const t = require('tap')
const { log } = require('../')
const { LEVELS } = log

t.test('log', t => {
  t.matchSnapshot(LEVELS, 'log levels')
  t.test('all log.LEVELS have a function in log', t => {
    for (const level of LEVELS) {
      t.test(level, t => {
        t.match(log[level], Function)
        process.once('log', (actual, ...args) => {
          t.equal(actual, level, 'emitted log with expected level')
          t.same(args, [1, 'two', [3], { 4: 4 }], 'got expected args')
          t.end()
        })
        log[level](1, 'two', [3], { 4: 4 })
      })
    }
    t.end()
  })
  t.test('all log functions are in log.LEVELS', t => {
    t.plan(LEVELS.length)
    for (const fn in log) {
      if (fn !== 'LEVELS') {
        t.ok(LEVELS.includes(fn), `log.${fn} is in LEVELS`)
      }
    }
  })
  t.end()
})
