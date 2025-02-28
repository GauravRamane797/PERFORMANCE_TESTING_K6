import http from "k6/http";
import { check } from "k6";  // Import check function

export default function () {
    const response = http.get("https://test.k6.io/");

    // check(true,{
    //     'status is true': (value) => value.status === true,
    // })

    // console.log(`Stratus is ${response.status}`)

    check(response, {
        "status is 200": (r) => r.status === 200,
        "status is 400": (r) => r.status === 400,
    });
}
