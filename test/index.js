const t = require('tap')
const procLog = require('../')
for (const method in procLog) {
  t.test(method, t => {
    const log = procLog[method]
    const { LEVELS } = log
    t.matchSnapshot(LEVELS, `${method} levels`)
    t.test(`all ${method}.LEVELS have a function in ${method}`, t => {
      for (const level of LEVELS) {
        t.test(level, t => {
          t.match(log[level], Function)
          process.once(method, (actual, ...args) => {
            t.equal(actual, level, `emitted ${method} with expected level`)
            t.same(args, [1, 'two', [3], { 4: 4 }], 'got expected args')
            t.end()
          })
          log[level](1, 'two', [3], { 4: 4 })
        })
      }
      t.end()
    })
    t.test(`all ${method} functions are in ${method}.LEVELS`, t => {
      t.plan(LEVELS.length)
      for (const fn in log) {
        if (fn !== 'LEVELS') {
          t.ok(LEVELS.includes(fn), `${method}.${fn} is in ${method}.LEVELS`)
        }
      }
    })
    t.end()
  })
}
