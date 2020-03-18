const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("section.output");
const originalText = document.querySelector(".output").innerHTML;


sentenceTag.addEventListener("keyup", function(){
    
    //input value ? output is input : output is original text.
    if(this.value){
        outputTag.innerHTML = this.value;
    } else {
        outputTag.innerHTML = originalText;
    }

});