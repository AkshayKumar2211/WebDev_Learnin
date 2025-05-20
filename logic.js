const color=["red","green","blue","orange","brown","violet","skyblue","black"];

const button=document.getElementById("change");
const back=document.querySelector(".full");
let a=color.length;

button.addEventListener("click",()=>{
 let col=Math.floor(Math.random() *a);

 back.style.backgroundColor=color[col];

})