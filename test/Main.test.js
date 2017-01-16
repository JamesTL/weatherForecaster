const chai = require('chai')
const { expect } = chai

describe('Test setup running  ok', () => {
    it('should pass', () => {
        expect(1 + 1 === 2).to.be.true
    })
})