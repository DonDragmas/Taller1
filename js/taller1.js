/*let artistas = ['cuco', 'Darktrhone', 'korn', 'cannibal corpse', 'Terror Reid']
console.log (artistas [2]);
/*borrar el ultio elemento
artistas.pop();
/*foreach 
artistas.forEach(function(elemento,index,array){
    console.log(`posicion${index} elemnto ${elemento}`);
}
)*/
/*artistas.unshift("FEID");
console.log(artistas);
artistas.unshift();
*/
/*el onesplice borra de una posicion a otra
artistas.splice(0,1)
console.log(artistas);
*/

/*let aprendiz=[];
let seguir=true;
while(seguir==true){
    aprendiz.push(prompt("Ingrese el nombre del aprendiz"));

    seguir=confirm("¿Desea continuar?");    

    
}
console.log("El numero de aprendices son "+aprendiz);
let filtro = aprendiz.filter(aprendiz=>aprendiz=="Ferxxo");
console.log("El filtro dio "+filtro);

let find = aprendiz.find(aprendiz=>aprendiz=="Ferxxo");
console.log("El buscar dio "+find);

aprendiz.sort();
*/
let inst=[
    {primerN:"Daniel",primerAP:"Daza"},
    {primerN:"Carlos",primerAP:"Chala"}
]
let nombrecompleto = inst.map(function(elemento,index,array){
    return `${elemento.primerN} ${elemento.primerAP}`
})
console.log(nombrecompleto);



