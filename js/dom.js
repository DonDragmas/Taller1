console.log (document.getElementById("features"));
//. el punto sirve para llamar clases y el # sirve para llamar ids
console.log (document.querySelector(".feature"));
console.log (document.querySelectorAll("p")[0]);
console.log (document.querySelector("a").getAttribute("href"));
const $mi= document.querySelector("#features");
$mi.style.setProperty("color","#F00000");
$mi.style.setProperty("width","500px");

const $mic=document.querySelector(".clase");
let text=`<h1>
El Dom es bla bla
</h1>
<p>
Se puede accerder y modificar
</p>
`

//$mic.textContent=text
$mic.innerHTML=text

const img=document.createElement("img");
img.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwS2VgprDoaaqGrOnCImQ9LNR2IItVnqBV3CLACvd7BEkIqK-TvDCFyVElsOqTa3TcQCo&usqp=CAU";
document.body.appendChild(img);

const $caja=document.createElement("div");
$caja.innerHTML="<img src =`img/imagen.jpg`>"

$mic.appendChild($caja);