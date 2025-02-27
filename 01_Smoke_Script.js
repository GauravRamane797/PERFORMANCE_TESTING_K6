import http from "k6/http";  // Correct import (not "https")
import { check, sleep } from 'k6';

// export default function () {
//     http.get("https://test.k6.io");  // Replace with your API URL
// }



export let options = {
    vus: 1, // Virtual users
    duration: '10s', // Test duration
};

export default function () {
    let res = http.get('https://test.k6.io');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1); // Simulates real user behavior

    let res1 = http.get('https://test.k6.io/contacts.php');
    check(res1, { 'status is 200': (r) => r.status === 200 });
    sleep(2); // Simulates real user behavior

    let res2 = http.get('https://test.k6.io/news.php');
    check(res2, { 'status is 200': (r) => r.status === 200 });
    sleep(2); // Simulates real user behavior
}