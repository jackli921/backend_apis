import request from 'supertest';
import { expect } from 'chai';
import { createApp } from '../src/app'; // Adjust the path if needed
import { Express } from 'express';

// Helper function for the delay - keep it here if only needed by rate limit tests
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('API Rate Limiting', () => {
    let app: Express;

    before(() => {
        app = createApp();
    });

    // Constants for the rate limit test
    const numberOfRequestsToSend = 20; // 10 is the limit; send more than the limit
    const requestDelayMs = 25; // Small delay

    it(`should enforce rate limiting and return 429 after multiple requests`, async function () {
        // Increase timeout for this specific test
        this.timeout(10000); // 10 seconds (adjust as needed)

        let hitRateLimit = false;
        let rateLimitRequestIndex = -1;
        let successfulRequestsCount = 0;
        const expectedSuccessStatus = 200;
        const rateLimitStatus = 429;

        console.log(
            `\nStarting rate limit test: Sending ${numberOfRequestsToSend} requests with ${requestDelayMs}ms delay...`,
        );

        for (let i = 0; i < numberOfRequestsToSend; i++) {
            try {
                const res = await request(app).get('/'); // Use the app instance

                console.log(`Request ${i}: Status ${res.statusCode}`);

                if (res.statusCode === expectedSuccessStatus) {
                    successfulRequestsCount++;
                } else if (res.statusCode === rateLimitStatus) {
                    hitRateLimit = true;
                    rateLimitRequestIndex = i;
                    console.log(`Rate limit hit detected at request ${i}.`);
                    break; // Stop sending after hitting the limit
                } else {
                    expect.fail(
                        `Received unexpected status code ${res.statusCode} at request ${i}`,
                    );
                }
            } catch (error: any) {
                console.error(`Error sending request ${i}: ${error.message}`);
                throw error;
            }

            if (requestDelayMs > 0) {
                await delay(requestDelayMs);
            }
        }

        console.log(
            `Finished rate limit test. Successful requests: ${successfulRequestsCount}, Rate limit hit: ${hitRateLimit}`,
        );

        // Assertions
        expect(hitRateLimit).to.be.true;
        expect(successfulRequestsCount).to.be.at.least(1); // Basic check
        expect(rateLimitRequestIndex).to.be.at.least(1); // Basic check
    });
});
