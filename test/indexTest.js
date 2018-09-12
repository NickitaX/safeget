const {describe, it} = require('mocha')
const assert = require('assert')

const safeget = require('../index')

describe('safeget', () => {
  const target = {
    what: {
      can: {
        go: {
          wrong: '?'
        }
      }
    }
  }
  it('provide default value while getting wrong child member', () => {
    assert.equal(safeget(() => target.what.can.not.go.wrong, 'stub!'), 'stub!')
  })
  it('provide real value while getting correct child member', () => {
    assert.equal(safeget(() => target.what.can.go.wrong, 'stub!'), '?')
  })
})

const target = {
  what: {
    can: {
      go: {
        wrong: '?'
      }
    }
  }
}