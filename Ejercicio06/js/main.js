
document.getElementById("title").innerHTML = document.title;
console.log(document.title+'\n\n');


let listaIdsNombres = [];
let listaIdsApellidos = [];
let listaApellidos = [];

//comienzo de array 
let arrNombres = [];
let arrApellidos=[];

//Limitadores
let maximoNombres = 2;
let maximoApellidos = 2;

function mostrarNombre(id){
    let nombresCompletos= "";
    let apellidosCompletos= "";

    for (let i = 1; i <= maximoNombres; i++) {
        let nombre = document.getElementById("nombre"+id+"-"+i);
        if( nombre != null){
            listaIdsNombres.push("nombre"+id+"-"+i);
            nombresCompletos= nombresCompletos +" "+ (nombre.textContent);
            arrNombres.push(nombre.textContent)
        }   
    }

    for(let j=1; j<= maximoApellidos; j++){
        let apellido = document.getElementById("apellido"+id+"-"+j);
        if( apellido !== null){
            listaIdsApellidos.push("apellido"+id+"-"+j);
            apellidosCompletos= apellidosCompletos +" "+ (apellido.textContent);
            arrApellidos.push(apellido.textContent)
        }
    }   
let resultado= (nombresCompletos.trim())+ " " + (apellidosCompletos.trim())
console.log("Integrante " + id + ": " + resultado)
}

/////////////////////////////Función para buscar coincidencia de Nombres/////////////////////////////////////////////

function coincidenciasNombres(){
    let auxiliarNombres = [];
    let auxiliarIds = []
    let coincidencias=[];

    for (let i = 0; i<= arrNombres.length-1; i++) {
        for(let j=0; j<=arrNombres.length-1; j++){
            if(arrNombres[i] == arrNombres[j] && (i!=j)){  
                auxiliarIds.push(listaIdsNombres[i])
            }
            if(arrNombres[i] == arrNombres[j] && (i!=j && i<j)){  
                auxiliarNombres.push(arrNombres[i])
            }
        }
    }

    if(auxiliarNombres.length<=0){
        console.log("No hay coinsidencias en los nombres")
    }
    else{
        console.log(`Hay coincidencia en estos nombres: ${auxiliarNombres}`)
        let ingreseUnColor = prompt("Ingrese un color para descar los resultados de coincidencia");
        for (let i = 0; i < auxiliarIds.length; i++) {
            document.getElementById(auxiliarIds[i]).style.color = ingreseUnColor;    
        }
    }   
}


/////////////////////////////Función para buscar coincidencia de Apellidos/////////////////////////////////////////////

function coincidenciasApellidos(){
    let auxiliarApellidos = [];
    let auxiliarIds = [];

    for (let i = 0; i<= arrApellidos.length-1; i++) {
        for(let j=0; j<=arrApellidos.length-1; j++){
            if(arrApellidos[i] == arrApellidos[j] && (i!=j)){  
                auxiliarIds.push(listaIdsApellidos[i])
            }
            if(arrApellidos[i] == arrApellidos[j] && (i!=j && i<j)){  
                auxiliarApellidos.push(arrApellidos[i])
            }
        }   
    }

    if(window.confirm("Quiere  buscar coincidencias de Apellidos?")){
        if(auxiliarApellidos.length<=0){
            alert("No hay coincidencias en los apellidos")
        }
        else{
            alert(`Hay coincidencia en estos apellidos: ${auxiliarApellidos}`)
            let ingreseUnColor = prompt("Ingrese un color para descartar los resultados de coincidencia");
        
            for (let i = 0; i < auxiliarIds.length; i++) {
                document.getElementById(auxiliarIds[i]).style.color = ingreseUnColor;
            
            }
        } 
    }
}

mostrarNombre(1);
mostrarNombre(2);
coincidenciasNombres();
coincidenciasApellidos();


