const sentenceTag = document.querySelector("input[type='text']");
const outputTag = document.querySelector("section.output");
const ogText = outputTag.innerHTML;

console.log(ogText);


// When I type in sentenceTag, update outputTag accordingly.
// If there is no value, put in the original text. 

sentenceTag.addEventListener("keyup", function() {
  if (this.value) {
    outputTag.innerHTML = this.value;
  } else {
    outputTag.innerHTML = ogText;
  };
});

