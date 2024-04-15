const t = require('tap')
const procLog = require('../')

// This makes sure we are testing all known exported methods.
t.plan(4)

for (const method in procLog) {
  t.test(method, t => {
    const log = procLog[method]
    const { LEVELS, KEYS } = log

    t.matchSnapshot(LEVELS, `${method} levels`)
    t.matchSnapshot(KEYS, `${method} keys`)

    t.strictSame(Object.keys(KEYS), LEVELS, 'all keys are in levels')
    t.strictSame(Object.values(KEYS), LEVELS, 'all vales are in levels')

    t.test(`all ${method}.LEVELS have a function in ${method}`, t => {
      for (const level of LEVELS) {
        t.test(level, t => {
          t.match(log[level], Function)

          process.once(method, (actual, ...args) => {
            t.equal(actual, level, `emitted ${method} with expected level`)

            switch (`${method}.${level}`) {
              case 'time.start':
              case 'time.end':
                t.strictSame(args, [1], 'single arg')
                break
              case 'input.start':
              case 'input.end':
              case 'log.pause':
              case 'log.resume':
                t.strictSame(args, [], 'no args')
                break
              case 'input.read':
                t.match(args.slice(0, 2), [Function, Function], 'input gets resolvers')
                t.same(args.slice(2), [1, 'two', [3], { 4: 4 }], 'got expected args')
                break
              default:
                t.same(args, [1, 'two', [3], { 4: 4 }], 'got expected args')
            }

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
        if (fn !== 'LEVELS' && fn !== 'KEYS') {
          t.ok(LEVELS.includes(fn), `${method}.${fn} is in ${method}.LEVELS`)
        }
      }
    })

    t.end()
  })
}
