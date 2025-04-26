import request from 'supertest';
import { expect } from 'chai';
import { createApp } from '../src/app';
import {Express} from 'express';


describe('GET /', () => {
    let app: Express;

    before(() => {
        app = createApp();
    })
    
    it('should return "hello world"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('hello world');
        expect(res.type).to.equal('application/json');
    });
});
