let datosJson;

/*let xhr=new XMLHttpRequest();
xhr.open("GET","datos.json",true);
xhr.responseType='json';
xhr.onload=function(){
    if(xhr.status===200){
        datosJson=xhr.response;
        let elementoDiv=document.getElementById("legacy");
        elementoDiv.textContent=datosJson.profesión;
    }
}
xhr.send();*/

fetch("datos.json")
.then(res=>res.json())
.then((salida)=>{
    datosJson=salida;

    let elementoDiv=document.getElementById("legacy");
    elementoDiv.textContent=datosJson.apellidos; //Se extraen los apellidos del código .json

})