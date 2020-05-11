// Inputs
const sentenceTag = document.querySelector("input[name='sentence']");
const typefaceTag = document.querySelector("select[name='typeface']");
const typesizeTag = document.querySelector("input[name='typesize']");
const lineheightTag = document.querySelector("input[name='lineheight']");
const italicTag = document.querySelector("input[name='italic']");

// Outputs
const lineheightOutput = document.querySelector("span.lineheight-output");
const typesizeOutput = document.querySelector("span.typesize-output");
const outputTag = document.querySelector("textarea.output");
const ogText = outputTag.value;

console.log(ogText);

// When I type in sentenceTag, update outputTag accordingly.
// If there is no value, put in the original text.

sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value;
  } else {
    outputTag.value = ogText;
  }
});

// When I type in the outputTag, update the sentenceTag.
// If there is no value, up in the original text.

outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value;
});

// When I change my typesize slider, update the text next to it AND
// Update the outputTag's font size.
typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px";
  typesizeOutput.innerHTML = this.value + "px";
});

lineheightTag.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value;
  lineheightOutput.innerHTML = this.value;
});

// When I change my italic checkbox, update the font style to either
// normal or italic
italicTag.addEventListener("change", function () {
  if (this.checked) {
    outputTag.style.fontStyle = "italic";
  } else {
    outputTag.style.fontStyle = "normal";
  }
});

// When I change my select for typeface, update the font family
typefaceTag.addEventListener("input", function () {
  outputTag.style.fontFamily = this.value;
});
