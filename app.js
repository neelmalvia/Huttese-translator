var translateInput = document.querySelector("#translate-input");
var translateButton = document.querySelector("#translate-button");
var translateOutput = document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/huttese.json";

function constructURL(inputText) {
  return url + "?" + "text=" + inputText;
}

function buttonClickHandler() {
  console.log("Clicked");
  var input = translateInput.value;
  var finalURL = constructURL(input);
  console.log(finalURL);

  fetch(finalURL)
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translatedText;
      translateOutput.innerText = translatedText;
    })
    .catch(() => alert("Error in Server...."))
}

translateButton.addEventListener("click", buttonClickHandler);





// var url = "https://api.funtranslations.com/translate/minion.json";



function buttonClickHandler() {
  console.log("button clicked")
  var input = translateInput.value;
  var finalURL = constructURL(input);
  console.log(finalURL);

  fetch(finalURL)
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      translateOutput.innerText = translatedText;
    })
    .catch(() => alert("Some Error occurred. Please try again later."))
};

// translateButton.addEventListener("click", buttonClickHandler);