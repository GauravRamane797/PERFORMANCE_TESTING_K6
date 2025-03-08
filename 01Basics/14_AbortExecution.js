import http from 'k6/http'
import exec from 'k6/execution'

export function setup(){
    const res = http.get('https://gons.com')
    if(res.error){
        exec.test.abort("Abort as API is  down")
    }
}


export default function(){
    http.get('https://gons.com');
}