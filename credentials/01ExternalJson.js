import http from 'k6/http'
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { SharedArray } from 'k6/data'
import { check } from 'k6/data'

let credArray = new SharedArray('Cred of users', () => JSON.parse(open('./credentials/users.json')).users)
console.log("credArray", credArray)

export const options = {
    thresholds : {
        checks : ['rate>=0.90']
    }
}

export default function () {
    
    const randomCredential = randomItem(credArray);
    console.log("randomCredential", randomCredential)

    let res = http.post(
        'https://test-api.k6.io/auth/token/login/',
        JSON.stringify(
            {
                username: randomCredential.username,
                password: randomCredential.password
            }
        ),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    check(res, {
        'status is 200': (r) => r.status === 200,
        'has access token': (r) => r.json() !== undefined
    });
    
    // const accessToken = res.json().access;
}