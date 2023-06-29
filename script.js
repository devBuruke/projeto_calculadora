function Insert(num){

     var numero= document.getElementById('result').innerHTML;
     document.getElementById('result').innerHTML = numero + num;
}
function limpar() {
    document.getElementById('result').innerHTML="";
}