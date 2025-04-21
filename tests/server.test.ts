import request from 'supertest';
import express from 'express';
import { MyController } from '../src/controllers/my';
import { expect } from 'chai';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/', MyController.handleRequest);
describe('GET /', () => {
    it('should return "hello world"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.equal('hello world');
    });
});
