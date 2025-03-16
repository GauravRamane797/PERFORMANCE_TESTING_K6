import http from 'k6/http'

export default function(){
    console.log("BASE_URL", __ENV.BASE_URL)
    console.log(`${__ENV.BASE_URL}/api/test`)

}

// k6 % k6 run -e BASE_URL=test.io 03ParametersinK6/01EnvVariablesInK6.js