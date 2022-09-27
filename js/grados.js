function calcular(){
    let gra= document.getElementById("grados").value;
    let op=document.getElementById("grado1").value;
    let op2=document.getElementById("grado2").value;

    if(op == 1 && op2==2){
       let fah = (gra * 1.8) + 32;
       alert(`EL resultado es ${fah}`);
    }
    else if(op == 2 && op2 == 1){
        let kel = parseInt(gra * 9/(5+32));
        alert(`EL resultado es ${kel}`)
    }
    if(op== 1 && op2 == 3){
        let kel = (gra-32)-5/9+273;
        alert(`EL resultado es ${kel}`)
    }
    if(op== 2 && op2 == 3){
        let kell = parseInt(gra + 273);
        alert(`El resultado es ${kell}`);
    }
    else{
        alert("No es verdad")
    }
}