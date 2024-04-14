const t = require('tap')
const { input } = require('../')

t.test('read', t => {
  t.test('will await promise', async t => {
    process.once('input', (level, resolve, reject, ...args) => {
      if (level === 'read') {
        t.strictSame(args, [1, 2, 3])
        setTimeout(() => resolve('done'), 100)
      }
    })

    await t.resolves(input.read(1, 2, 3), 'done')
  })

  t.test('can reject promise', async t => {
    process.once('input', (level, resolve, reject, ...args) => {
      if (level === 'read') {
        t.strictSame(args, [1, 2, 3])
        setTimeout(() => reject(new Error('not ok')), 100)
      }
    })

    await t.rejects(input.read(1, 2, 3), { message: 'not ok' })
  })

  t.end()
})

t.test('start and end', t => {
  t.test('returns function to stop', t => {
    const called = {}
    const handler = (actual) => {
      called[actual] = true
      if (called.start && called.end) {
        t.end()
      }
    }

    process.on('input', handler)
    t.teardown(() => process.off('input', handler))

    input.start()()
  })

  t.test('sync callback', t => {
    const res = input.start((...args) => {
      t.strictSame(args, [], 'get no args')
      return 1
    })
    t.equal(res, 1)
    t.end()
  })

  t.test('async callback', async t => {
    const res = await input.start((...args) => {
      t.strictSame(args, [], 'get no args')
      return Promise.resolve(1)
    })
    t.equal(res, 1)
  })

  t.test('async callback that errors', async t => {
    const called = {}
    const handler = (level) => called[level] = true

    process.on('input', handler)
    t.teardown(() => process.off('input', handler))

    await t.rejects(input.start(() => {
      return Promise.reject(new Error('not ok'))
    }), { message: 'not ok' })

    t.ok(called.start)
    t.ok(called.end)
  })

  t.end()
})
