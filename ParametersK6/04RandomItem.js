import http from 'k6/http'
import {check} from 'k6'
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
    vus:2
}

export default function () {
    let res = http.get(`https://test-api.k6.io/public/crocodiles/`)
    let response = res.json()
    console.log("response", response)
    let totalIds = response.map((a) => a.id)
    let allNames = response.map(a => a.name)
    console.log("totalIds", totalIds)
    console.log("allNames", allNames)

    // let id = response[0].id
    let id = randomItem(totalIds)
    console.log("id", id)
    http.get(`https://test-api.k6.io/public/crocodiles/${id}`)
    
}

// [
//     {"id":1,"name":"Bert","sex":"M","date_of_birth":"2010-06-27","age":14},
//     {"name":"Ed","sex":"M","date_of_birth":"1995-02-27","age":30,"id":2},
//     {"id":3,"name":"Lyle the Crocodile","sex":"M","date_of_birth":"1985-03-03","age":40},
//     {"sex":"M","date_of_birth":"1993-12-25","age":31,"id":4,"name":"Solomon"},
//     {"id":5,"name":"The gharial","sex":"F","date_of_birth":"2004-06-28","age":20},
//     {"id":6,"name":"Sang Buaya","sex":"F","date_of_birth":"2006-01-28","age":19},
//     {"sex":"F","date_of_birth":"1854-09-02","age":170,"id":7,"name":"Sobek"},
//     {"date_of_birth":"1981-01-03","age":44,"id":8,"name":"Curious George","sex":"M"}
// ]