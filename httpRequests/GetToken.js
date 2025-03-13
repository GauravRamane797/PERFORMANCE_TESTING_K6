import http from 'k6/http'
import {check} from 'k6'

export default function(){
    let payload = JSON.stringify({
        username:"croco"+ Date.now(),
        password: "test"
    })

    let param = {
        headers :{ 'Content-Type':'application/json'}
    }
    let res = http.post(`https://test-api.k6.io/user/register/, payload, param`)

    check(res,{
        'Valiadate Status': (r) => r.status === 201
    })

    let tokenRes = http.post(`https://test-api.k6.io/auth/token/login/, payload, param`)
    let token = tokenRes.json()

    console.log("Token", token)
    console.log("refresh", token.refresh)
    console.log("access", token.access)
}