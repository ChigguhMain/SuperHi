const sentenceTag = document.querySelector("input[type='text']");
const outputTag = document.querySelector("textarea.output");
const ogText = outputTag.value;

console.log(ogText);

// When I type in sentenceTag, update outputTag accordingly.
// If there is no value, put in the original text. 

sentenceTag.addEventListener("keyup", function() {
  if (this.value) {
    outputTag.value = this.value;
  } else {
    outputTag.value = ogText;
  };
});

// When I type in the outputTag, update the sentenceTag.
// If there is no value, up in the original text. 

outputTag.addEventListener("keyup", function() {
  sentenceTag.value = this.value;
})