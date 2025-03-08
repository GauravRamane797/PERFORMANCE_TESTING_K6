import http from 'k6/http';
import { check, sleep } from 'k6';

let url = "https://test.k6.io";
const payload = JSON.stringify({
    "name": "John",
    "age": 30
}, {
    "name": "gaurav",
    "age": 40
});

const params = {
    headers: { 'Content-Type': 'application/json' }
};

export const options = {
    vus:2,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<400'],
        'http_req_duration{status:200}': ['p(95)<400'],
        'http_req_duration{status:201}': ['p(95)<200']
    }
};

export default function () {
    const res = http.post(url, payload, params);

    check(res, {
        'Status is 200': (r) => r.status === 200,
        'Page contains expected text': (r) => r.body.includes("Collection of simple web-pages suitable for load testing.")
    });

    sleep(1); // Adding a 1-second pause between requests
}
