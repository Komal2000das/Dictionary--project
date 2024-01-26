const input = document.querySelector('input')
const btn = document.querySelector('button')
const dictionary = document.querySelector('Dictionary-app')










async function dictionaryFn(word){
const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then(res => res.json())

console.log(res)
}

async function fetchandcreatecard(){
    const data = dictionaryFn(input.value) 

    console.log(data)
}

dictionaryFn('chair')













