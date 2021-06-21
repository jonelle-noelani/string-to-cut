const BASE_URL = "http://localhost:3000"
// const BASE_URL = "https://lyft-interview-test.glitch.me/test" 

postString('{"string_to_cut":"iamyourlyftdriver"}')

function postString(string_to_cut){
    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(string_to_cut)
    })
    .then(res => res.json())
    .then(str => {
        cutString(str)
    })
}

// cutString("iamyourlyftdriver")

function cutString(str){
    let everyThird = ''
    const splitStr = str.split('')
    for (let i = 2; i < splitStr.length; i += 3){
        everyThird = everyThird.concat(splitStr[i])
    }
    console.log({"return_string": everyThird})
}