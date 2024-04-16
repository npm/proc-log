const t = require('tap')
const { META, output } = require('../')

// just to show how this would be implemented in consumers
const getMeta = (...args) => {
  let meta = {}
  const lastArg = args[args.length - 1]
  if (
    lastArg &&
    typeof lastArg === 'object' &&
    Object.prototype.hasOwnProperty.call(lastArg, META)
  ) {
    meta = args.pop()
  }
  return [meta, ...args]
}

// an example of wrapping a handler
const wrapMeta = (handler) => (level, ...args) => handler(level, ...getMeta(...args))

t.test('meta', t => {
  process.once('output', (level, ...rawArgs) => {
    const [meta, ...args] = getMeta(...rawArgs)
    t.equal(level, 'standard')
    t.ok(meta.force)
    t.strictSame(args, ['arg1', 'arg2'])
    t.end()
  })

  output.standard('arg1', 'arg2', { [META]: 0, force: true })
})

t.test('wrap handler', t => {
  process.once('output', wrapMeta((level, meta, ...args) => {
    t.equal(level, 'standard')
    t.ok(meta.force)
    t.strictSame(args, ['arg1', { META: true }])
    t.end()
  }))

  output.standard('arg1', { META: true }, { [META]: null, force: true })
})
