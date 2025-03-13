import http from 'k6/http'
import { check } from 'k6'

export default function () {
    let payload = JSON.stringify({
        username: "croco" + Date.now(),
        password: "test"
    })

    let param = {
        headers: { 'Content-Type': 'application/json' }
    }
    let res = http.post(`https://test-api.k6.io/user/register/, payload, param`)

    check(res, {
        'Valiadate Status': (r) => r.status === 201
    })
}