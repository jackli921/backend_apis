import request from 'supertest';
import { expect } from 'chai';
import { createApp } from '../src/app'; // Adjust the path if needed
import { Express } from 'express';

// This describe block groups all tests specifically for the GET / endpoint
describe('GET / Endpoint', () => {
    let app: Express;

    // Before any test in THIS FILE runs, create the app instance
    before(() => {
        app = createApp();
    });

    // Your original GET / test case
    it('should return "hello world"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('hello world');
        expect(res.type).to.equal('application/json');
    });

    // Add other GET / tests here later if any (e.g., with different query params)
});