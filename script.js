// tu codigo va aca
function callbackPromedio(a,b,c,callback){
    var promedio = (a+b+c)/3;
    return callback(promedio); 
}

/*(function(){
	var seg = 0;
	function segundero(){
		seg++;
	    document.getElementById("titulo").innerHTML = seg;
	}
	setInterval('segundero()', 1000);
})();

*/

function desc_digits(n) {
     var res = n.toString();
     if (res.length == 3) {
     	res = "0" + res;
     } else if(res.length == 2) {
     	res = "00" + res;
     } else if(res.length == 1) {
     	res = "000" + res;
     }
     res = res.split(''); 
     res = res.sort().reverse();
     res = res.join('');
     res = parseInt(res);
     return res;
}

function asc_digits(n) {
     var res = n.toString();
     if (res.length == 3) {
     	res = "0" + res;
     } else if(res.length == 2) {
     	res = "00" + res;
     } else if(res.length == 1) {
     	res = "000" + res;
     }
     res = res.split(''); 
     res = res.sort();
     res = res.join('');
     res = parseInt(res);
     return res;
}
function top_bottom(a){

    return desc_digits(a) - asc_digits(a);
}
function kaprekar(n) {
    var counter = 0;
    while(n != 6174){
        n = top_bottom(n);
        counter++;
    }
    return counter
}
// suma de arreglos
function suma(arreglo){
    var sum = 0;
    for (var i = 0 ; i < arreglo.length; i++) 
    {
      sum += arreglo[i];
    } 
    return sum;
}
// multiplicacion de arreglos
function multiplicacion(arreglo){
    var mult = 1;
    for (var i = 0 ; i < arreglo.length; i++) 
    {
      mult = mult * arreglo[i];
    } 
    return mult;
}
// suma elementos segun indice
function sumaElementos(arrayA, arrayB) {
    var arr = [];
    for (var i = 0 ; i < arrayA.length; i++) {
        arr.push(arrayA[i] + arrayB[i]);
    }
    return arr;
}

// suma de arreglo y numero
function arregloIndices(numeros, sumaNumeros) {
    for (var i = 0 ; i < numeros.length; i++) {
        for (var j = i + 1 ; j < numeros.length; i++){
            if (numeros[i] + numeros[j] == sumaNumeros) {
                return [i,j];
            }
        }
    }

}