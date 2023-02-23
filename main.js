function triangulo(){
    var triA = Number(document.getElementById("inA").value);
    var triB = Number(document.getElementById("inB").value);
    var triC = Number(document.getElementById("inC").value);
    var outInfo = document.getElementById("outInfo");
    var outTriangulo = document.getElementById("outTriangulo");

     
    //########### Modelo Simplês ##############
    // if(triA < (triB+triC) || triB < (triA+triC) || triC < (triA + triB)){
    //     alert(`A Soma de "Um" alado não pode ser superior que a dos outros "Dois" somado`)
    //     document.getElementById("inA").value = "",
    //     inA.focus();
    //     return;
    // }

    // Modelo completo com retorno a cedula errada
    if(triA > (triB + triC)){
        alert(`Erro! "A" não pode ser maior que assoma de "B" + "C"`);
        document.getElementById("inA").value = "",
        inA.focus();
        return;} 
    
    if(triB > (triA + triC)){
        alert(`Erro! "B" não pode ser maior que assoma de "A" + "C"`);
        document.getElementById("inB").value = "",
        inB.focus();
        return;
    } 
    
    if(triC > (triA + triB)){
        alert(`Erro! "C" não pode ser maior que assoma de "A" + "B"`);
        document.getElementById("inC").value = "",
        inC.focus();
        return;
        }

    // Triângulo: Equilátero
    if(triA==triB && triB==triC){
        var triangulo = "Equilátero"
        outInfo.textContent=`Lados podem forma um triângulo.`;
        outTriangulo.textContent=`Tipo: ${triangulo}`
    }

    // Triângulo: isóceles
    if(triA==triB || triA==triC || triB==triC){
        var triangulo = "Isóceles"
        outInfo.textContent=`Lados podem forma um triângulo.`;
        outTriangulo.textContent=`Tipo: ${triangulo}`
    } 
    
    //Se não é as outras "então" é um Triângulo do tipo "Escaleno";
    else {
        var triangulo = "Escaleno"
        outInfo.textContent=`Lados podem forma um triângulo.`;
        outTriangulo.textContent=`Tipo: ${triangulo}`
    } 
}

var btButton = document.getElementById("btButton");
btButton.addEventListener("click", triangulo)