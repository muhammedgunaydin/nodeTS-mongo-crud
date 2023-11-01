import 'mocha'
import { expect } from 'chai'
import request from 'supertest'
import app from '../app'
import Book from '../models/Book'

describe('CRUD Test', () => {
  let book: any

  before(async () => {
    await Book.deleteMany({})
  })

  it('should create a new book', (done) => {
    request(app)
      .post('/api/book')
      .send({ name: 'Book1', author: 'Tester', page: 512, year: 1024 })
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('name')
        expect(res.body).to.have.property('author')
        expect(res.body).to.have.property('page')
        expect(res.body).to.have.property('year')
        book = res.body
        done()
      })
  })

  it('should get all books', (done) => {
    request(app)
      .get('/api/book')
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.status).to.equal(200)
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('should get one book',(done)=>{
    request(app)
    .get(`/api/book/${book._id}`)
    .end((err,res)=>{
      if(err){
        return done(err)
      }
      expect(res.status).to.equal(200)
      expect(res.body).to.be.an('object')
      done()
    })
  })

  it('should update an book', (done) => {
    request(app)
      .put(`/api/book/${book._id}`)
      .send({ name: 'Updated Name' })
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.status).to.equal(200)
        expect(res.body.name).to.equal('Updated Name')
        done()
      })
  })

  it('should delete an book', (done) => {
    request(app)
      .delete(`/api/book/${book._id}`)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.status).to.equal(200)
        done()
      })
  })
})
