import http from "k6/http";  // Correct import (not "https")
import { check, sleep } from 'k6';

// export default function () {
//     http.get("https://test.k6.io");  // Replace with your API URL
// }



export let options = {
    vus: 50, // Virtual users
    duration: '30s', // Test duration
};

export default function () {
    let res = http.get('https://your-website.com');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1); // Simulates real user behavior
}