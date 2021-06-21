// const BASE_URL = "http://localhost:3000"
const BASE_URL = "https://lyft-interview-test.glitch.me/test" 

cutString('{"string_to_cut":"iamyourlyftdriver"}')

function cutString(string_to_cut){
    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
            // 'Access-Control-Allow-Origin':'no-cors',
            // 'Access-Control-Allow-Methods': 'POST'
        },
        body: JSON.stringify(string_to_cut)
    })
    .then(res => res.json())
    .then(string_to_cut => {
        console.log(string_to_cut)
    })
}