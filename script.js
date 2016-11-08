// tu codigo va aca
function callbackPromedio(a,b,c,callback){
    var promedio = (a+b+c)/3;
    return callback(promedio); 
}
var seg = 0;
function segundero(){
	seg++;
    document.getElementById("titulo").innerHTML = seg;
}
setInterval('segundero()', 1000);
//var interval = setInterval( segundero, 1000);
//setInterval(function(){ alert("Hello"); }, 3000);
/*
setInterval(function() {
    segundero();
}, 1000);
*/
//setInterval(function(){ segundero(); }, 1000);
