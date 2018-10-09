'use strict'

const assert = require('assert')
const supertest = require('supertest')
// const _ = require('lodash')

describe('DefaultController', () => {
  let request
  before(() => {
    request = supertest(`http://localhost:${ process.env.PORT || 3000}`)
  })
  describe('info', () => {
    it('should return 404 on GET /v1/default', (done) => {
      request
        .get('/v1/default')
        .expect(404)
        .end((err, res) => {
          console.log(err, res)
          done(err)
        })
    })
    it('should return {app: \'1.0.0\'} on GET /v1/default/info', (done) => {
      request
        .get('/v1/default/info')
        .expect(200)
        .end((err, res) => {
          console.log(err, res)
          const data = res.body
          assert.equal(data.app, '0.0.1')
          done(err)
        })
    })
  })
})
