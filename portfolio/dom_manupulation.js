let div=document.querySelector("div");
//onsole.log(div.getAttribute("class"));

//div.setAttribute("class","vijay");
//console.log(div.getAttribute("class"));

//let div= document.querySelector("div");
//div.style.backgroundColor='green';

let btn =document.createElement("button");
btn.innerText="click me";
console.log(btn);
div.after(btn);

let h1=document.querySelector("h1");
div.prepend(h1);
let p=document.querySelector("p");
div.append(p);

