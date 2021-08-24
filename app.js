let btnTranslate = document.querySelector("#btn-translate")
let txtInput=document.querySelector("#txt-input")
let outputDiv =document.querySelector("#txt-output")

// let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

let serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(input)
{
    return serverURL + "?" + "text=" + input
}

function errorHandler (error){
    console.log("error occured", error)
    alert("something wrong with server")
}
function clickHandler()
{
let inputText = txtInput.value;
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => { 
    let translatedText= json.contents.translated;
    outputDiv.innerText = translatedText;
})
.catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)