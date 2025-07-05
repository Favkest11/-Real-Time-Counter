let textInput=document.querySelector("#text-input");
let charCount=document.querySelector("#char-count");

 textInput.addEventListener("input", () => {
 let counter=textInput.value.length;
 charCount.textContent="Character Count: " + counter + "/50";
 if(counter===50){
   charCount.setAttribute("class","change-color");
 }
  });