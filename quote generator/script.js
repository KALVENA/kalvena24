var quote=document.getElementById("quote");
var author=document.getElementById("author");
var btn=document.getElementById("btn");

const url="https://api.quotable.io/random";

let getquote = () =>{
    fetch(url)
    .then(data => data.json())
    .then((item)=>{
        console.log(item.content);
        console.log(item.author);
        quote.innerText = item.content;
        author.innerText=item.author;


    });
}
window.addEventListener("load",getquote);
btn.addEventListener("click",getquote);