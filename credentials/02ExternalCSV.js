import http from 'k6/http'
import papaparse  from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from 'k6/data'

let credArray = new SharedArray('Cred of users CSV', () => papaparse.parse(open('./credentials/users.csv'), {header:true}).data)


export default function () {
    console.log("credArray", credArray)
    
}