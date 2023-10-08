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
    const contadorColumnas = divisionColumnas.length-1; //contador de campos de informacion
    var caracteresAlfanumericos="abcdefghijklmnopqrstuvwxyz0123456789";
    var letra;
    

    for(let i=1;i<=renglones.length;i++){ //ciclo for general que recorrera cada uno de los renglones
        //empieza en el renglon 1 puesto que el 0 es el de el tipo de dato.

    var divisionColumnasEntrada=renglones[i].split(",");            //separador de datos ingresados
    var contadorColumnasEntrada=divisionColumnasEntrada.length-1;   //contador de datos ingresados


    //VALIDAR SI LOS RENGLONES TIENEN LA MISMA CANTIDAD DE COLUMNAS QUE EL TopColumnas
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
        }else{
            
        }
               
               
                     
        }
        
       
    }//fin for general
});

//debo investigar que guarde en un archivo los logs.