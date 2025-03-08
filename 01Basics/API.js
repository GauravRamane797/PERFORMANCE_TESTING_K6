import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export const options = {
    vus: 1,
    duration: '1s',
    thresholds: {
        http_req_duration: ['p(95)<400'],
        'http_req_duration{status:200}': ['p(95)<400'],
        'http_req_duration{status:201}': ['p(95)<200']
    }
};

export default function () {
    const res = http.get("http://test.k6.io/?ts=" + Math.round(randomIntBetween(1, 2000)));

    console.log(`hello bother url here ---${res}`)
    console.log(`Response status: ${res.status}`);
    console.log(`Response body: ${res.body}`);

    check(res, {
        'Status is 200': (r) => r.status === 200
    });

    sleep(1); // Adding a 1-second pause between requests
}
