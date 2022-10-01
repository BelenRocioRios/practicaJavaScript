
//titulo :vista en consola
document.getElementById("mainTitle").innerHTML = document.title;
console.log(document.title+'\n\n');

function consoleID(id,items){
    let datos = []
    let texto = ''; 
    let listaDatosID = '';
    // Almacenar datos en array y sumar a texto para mostrar por consola los datos:
    for (let i = 0; i < items +1; i++) {
        listaDatosID = document.getElementById(''+id+i).innerText;
        datos.push(listaDatosID);
        // Armar columna para mostrar en consola:
        (listaDatosID == "") ? texto += document.getElementById(''+id+i+'').innerText : (listaDatosID === 'Integrante 2:') ? texto += "\n"+document.getElementById(''+id+i+'').innerText : texto += " "+document.getElementById(''+id+i+'').innerText;
    }

    // Mostrar en pantalla:
    console.log('\n'+texto.substring(1)+'\n');
    return datos;
}
/* funcion coincidencias de nombres */
function coincidenciaNombres(id,items) {

    const datos = consoleID(id,items); 
    const primero = []; 
    const segundo = []; 
    let bool = false;
    let total = 0; 

  
    for (let i = 0; i < datos.length; i++) {
        (i>(datos.length/2)) ? segundo.push(datos[i]) : primero.push(datos[i]);
    }

   
    for (let i = 0; i < 9; i++) {
        document.getElementById(id+i).style.color = 'black';
    }

    
    if (confirm('¿Queres ver las coinsidencias en  nombres y apellidos?')) {
    // Buscar coincidencias del primer integrante con el segundo:
    for (let i = 0; i < primero.length; i++) {
        if (segundo.includes(primero[i])) {
            if (bool == false) {
                console.log('\nCoincidencias del Primer integrante en:\n');
                bool = true;
                elementColor = prompt('Se encontraron coincidencias, ¿en que color queres resaltarlas?\n Utilizar solo nombres en ingles.')
            }
            console.log('Posicion: '+i+" "+primero[i]+'\n');
            total+=1;
            document.getElementById(id+i).style.color = elementColor;
        }
    }
    // Buscar coincidencias del segundo integrante con el  primero:
    for (let i = 0; i < segundo.length; i++) {
        if (primero.includes(segundo[i])) {
            if (bool == true) {
                console.log('\nCoincidencias del Segundo integrante en: \n');
                bool = false;
            }
            console.log('Posicion: '+i+" "+segundo[i]+'\n');
            document.getElementById(id+(i+primero.length)).style.color = elementColor;
        }      
    }

    (bool == true) ? console.log('No existen coincidencias') : console.log('\n[['+total+' de coincidencias encontradas]]');

    }else{
        // Evaluar solo nombres:
        if (confirm('¿Te gustaria evaluar coincidencia en los nombres solamente?')) {
            for (let i = 0; i < (primero.length/2); i++) {
                if (segundo.includes(primero[i])) {
                    if (bool == false) {
                        console.log('\nCoincidencias del Primer integrante en:\n');
                        elementColor = prompt('Se encontraron coincidencias, ¿en que color queres resaltarlas?\nUtilizar solo nombres en ingles ')
                        bool = true;
                    }
                    console.log('Posicion: '+i+" "+primero[i]+'\n');
                    total+=1;
                    document.getElementById(id+i).style.color = elementColor;
                }
            }
            
            for (let i = 0; i < (segundo.length/2); i++) {
                if (primero.includes(segundo[i])) {
                    if (bool == true) {
                        console.log('\nCoincidencias del Segundo integrante en: \n');
                        bool = false;
                    }
                    console.log('Posicion: '+i+" "+segundo[i]+'\n');
                    document.getElementById(id+(i+primero.length)).style.color = elementColor;
                }      
            }
        
            (bool == true) ? console.log('No existen coincidencias.') : console.log('\n[['+total+' de coincidencias encontradas.]]');
            }   
        }
}


/*funcion para enviar los datos ingresados al formulario*/

function enviar() {
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault()
    // Datos del formulario:
    const datos = Object.fromEntries( new FormData(e.target));
    // Pasa objeto a array:
    let infoInput = Object.values(datos);
    console.log(infoInput);

    // Enviar datos a las listas:
    document.getElementById('listaDescriptiva1').innerHTML = infoInput[0];
    document.getElementById('listaDescriptiva2').innerHTML = infoInput[1];
    document.getElementById('listaDescriptiva3').innerHTML = infoInput[2];
    document.getElementById('listaDescriptiva4').innerHTML = infoInput[3];
    document.getElementById('listaDescriptiva6').innerHTML = infoInput[4];
    document.getElementById('listaDescriptiva7').innerHTML = infoInput[5];
    document.getElementById('listaDescriptiva8').innerHTML = infoInput[6];
    document.getElementById('listaDescriptiva9').innerHTML = infoInput[7];

    });
}
