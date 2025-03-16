import http from 'k6/http';
import { sleep } from 'k6';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
    vus: 5,
    duration: '5s'
}

export default function () {
    let payload = JSON.stringify({
        // username:"croco"+ Date.now(),
        username: "croco" + randomString(7),
        password: "test"
    })

    let param = {
        headers: { 'Content-Type': 'application/json' }
    }
    console.log("payload", payload)
    let res = http.post(
        `https://test-api.k6.io/user/register/`, 
        payload,
        param
    )

    sleep(2)
}