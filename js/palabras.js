function calcular(){
    let pal= document.getElementById("palabra").value;
    let op=document.getElementById("palabra2").value;

    if(op==1){
        window.alert("La longitud de su palabra es: "+pal.length);
    }
    if(op==2){
        window.alert("La palabra en Mayusucla es "+pal.toUpperCase());
    }
    if(op==3){
        window.alert("La palabra en Minuscula es "+pal.toLowerCase());
    }
    if(op==4){
        window.alert("La primera letra es "+pal.charAt(0));
    }
}