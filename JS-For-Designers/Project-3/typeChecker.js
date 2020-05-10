const sentenceTag = document.querySelector("input[name='sentence']");
const typesizeTag = document.querySelector("input[name='typesize']");
const typesizeOutput = document.querySelector("span.typesize-output");
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

// When I change my typesize slider, update the text next to it AND
// Update the outputTag's font size. 
typesizeTag.addEventListener("input", function() {
  outputTag.style.fontSize = this.value + "px";
  typesizeOutput.innerHTML = this.value + "px";
})