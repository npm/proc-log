const t = require('tap')
const { time } = require('../')

t.test('time returns function to stop timer', t => {
  const called = {}
  const handler = (actual, name) => {
    t.equal(name, 'timerName')
    called[actual] = true
    if (called.start && called.end) {
      t.end()
    }
  }

  process.on('time', handler)
  t.teardown(() => process.off('time', handler))

  time.start('timerName')()
})

t.test('time can run a sync callback', t => {
  const res = time.start('timerName', (...args) => {
    t.strictSame(args, [], 'get no args')
    return 1
  })
  t.equal(res, 1)
  t.end()
})

t.test('time can run an async callback', async t => {
  const res = await time.start('timerName', (...args) => {
    t.strictSame(args, [], 'get no args')
    return Promise.resolve(1)
  })
  t.equal(res, 1)
})

t.test('time can run an async callback that errors', async t => {
  const called = {}
  const handler = (level) => called[level] = true

  process.on('time', handler)
  t.teardown(() => process.off('time', handler))

  await t.rejects(time.start('timerName', () => {
    return Promise.reject(new Error('not ok'))
  }), { message: 'not ok' })

  t.ok(called.start)
  t.ok(called.end)
})
