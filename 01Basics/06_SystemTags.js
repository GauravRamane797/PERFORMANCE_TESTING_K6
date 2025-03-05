import http from 'k6/http'

export const options = {
    duration : '10s',
    thresholds : {
        http_req_duration : ['p(95)<200'],
        'http_req_duration{status:200}' : ['p(95)<200'],
        'http_req_duration{status:201}' : ['p(95)<200']
    }
}

export default function(){
    http.get('https://run.mocky.io/v3/c749013d-9ba7-4ebd-a273-6aa13c6da897');
    http.get('https://run.mocky.io/v3/16ac77fd-35bb-4fe9-9969-e70e39adef51?mocky-delay=1000ms');
}