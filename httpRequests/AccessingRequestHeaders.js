import http from 'k6/http'

export default function () {
    let res = http.get(`https://test-api.k6.io/public/crocodiles/`)
    let croco = res.json()
    let crocoId = croco[0].id

    console.log("Allow header: ",res.headers.Allow)
    console.log("Content-Type header: ",res.headers[Content-Type])
    console.log("X-Frame-Options header: ",res.headers[X-Frame-Options])

}