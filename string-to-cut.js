const BASE_URL = "http://localhost:3000"

cutString("iamyourlyftdriver")

function cutString(string_to_cut){
    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(string_to_cut)
    })
    .then(res => res.json())
    .then(string_to_cut => {
        console.log(string_to_cut)
    })
}