import { expect } from 'chai'
import sayHello from '../src/server'

describe('server test', () => {
    describe('sayHello function', () => {
        it('should say Hello World!', () => {

            const str = sayHello();
            expect(str).to.equal('Hello World!')
        })
    })
})
