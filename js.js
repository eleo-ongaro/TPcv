
//no estaria funcionando ningun evento
window.addEventListener('beforeprint', (event) => {
    console.log('Están por imprimir el CV');
  });
  
  
  document.getElementById("boton").addEventListener("click", function () {
    console.log("registrando clicks");
    document.getElementById("boton").innerHTML = "Probando nuestro primer evento en JS";
})

document.getElementById("boton").onclick = function() {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Probando nuestro primer evento en JS";
}