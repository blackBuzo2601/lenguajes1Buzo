//usamos el modulo ms de Node.js
//con require('fs) se esta importando el modulo
//para acceder a todas las funciones y metodos de fs.
const fs = require ('fs'); 
                                        
//readFileSync es un método de fs.
// UTF-8 el parámetro que indica que se desea leer el archivo en formato UTF-8. 
/*err, data son las variables que usamos para como parámetro de nuestro callBack.
err: se utiliza para almacenar cualquier error que ocurra durante la operacion.
data: se utiliza para almacenar los datos o el resultado de la operacion
*/
fs.readFile('archivo.txt', 'utf8', (err, data) => {      
                                                              
    if(err){
        console.error(err);
        return;
    }
    
    var renglones = data.split('\n'); //usamos el salto de linea para definir cada renglon
    const topColumnas = renglones[0]; //almacena los datos generales por el primer renglon
    const divisionColumnas = topColumnas.split(","); //separador de datos del topColumnas
    const contadorColumnas = divisionColumnas.length-1; //contador de datos, puesto que es como un arreglo
    var caracteresAlfanumericos="abcdefghijklmnopqrstuvwxyz";
    var letra;
    

    console.log(renglones[0]);
    for(let i=1;i<=renglones.length;i++){
    var divisionColumnasEntrada=renglones[i].split(",");           
    var contadorColumnasEntrada=divisionColumnasEntrada.length-1;


        if(contadorColumnasEntrada==contadorColumnas){ 
        console.log("El renglon "+i+" si tiene la misma cantidad de columnas");
        }
        if(contadorColumnasEntrada!=contadorColumnas){
            console.log("El renglon "+i+" no tiene la misma cantidad de columnas");
            //guardar el log en un archivo
        }

        //evaluar si es alfanumerico
        for(let j=0;j<renglones[i].length;j++){
        letra=renglones[i].charAt(j).toLowerCase();   
        if(caracteresAlfanumericos.includes(letra)){
                console.log("Si es alfanumerico");
        }
               
               
                     
        }
        
       
    }//fin for general
});

//debo investigar que guarde en un archivo los logs.