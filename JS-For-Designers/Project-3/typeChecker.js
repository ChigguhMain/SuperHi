// Inputs
const sentenceTag = document.querySelector("input[name='sentence']");
const typefaceTag = document.querySelector("select[name='typeface']");
const typesizeTag = document.querySelector("input[name='typesize']");
const fontweightTag = document.querySelector("input[name='fontweight']");
const lineheightTag = document.querySelector("input[name='lineheight']");
const italicTag = document.querySelector("input[name='italic']");
const colourTags = document.querySelectorAll(".colours div");

// Outputs
const lineheightOutput = document.querySelector("span.lineheight-output");
const typesizeOutput = document.querySelector("span.typesize-output");
const fontweightOutput = document.querySelector("span.fontweight-output");
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

// When I change the font weight slider, update the outputTag font weight AND
// Update the font weight label
fontweightTag.addEventListener("input", function () {
  outputTag.style.fontWeight = this.value;
  fontweightOutput.innerHTML = this.value;
});

// Every color that is clicked, update the bodyTag background color AND
// the outputTag text color AND 
// make this tag be selected
colourTags.forEach(tag => {
  tag.addEventListener("click", function () {
    outputTag.style.color = this.style.color;
    outputTag.style.background = this.style.background;

    // Reset the classes
    colourTags.forEach(tag => {
      tag.classList.remove("selected");
    })
    // Add selected class
    this.classList.add("selected");
  });
});