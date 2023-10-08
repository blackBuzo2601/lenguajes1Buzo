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

    var renglones = data.split('\n'); //separa toda la informacion en base saltos de linea
    const topColumnas = renglones[0]; //almacena la primer linea correspondiente a los campos
    const divisionColumnas = topColumnas.split(","); //separa la informacion (campos) de topColumnas
    const contadorColumnas = divisionColumnas.length-1; //contador de campos de informacion


    var caracteresAlfanumericos="abcdefghijklmnopqrstuvwxyz0123456789"; //caracteres alfanumericos para evaluar
    var letra;                      //caracter que compararemos con caracteresAlfanumericos

    //inicializacion de variables extra que me serviran
    var divisionColumnasEntrada;    
    var contadorColumnasEntrada;
    var divisionDatos;
    var divisionDatosTrim;
    //CONTAR CUANTOS RENGLONES DE DATOS SON después del topColumnas
    var contarSaltosDeLinea=renglones.length-1; //contar lineas despues del topColumnas

    //-------------------------------------------------------------------------------------------
    //CICLO FOR GENERAL
    //Este for recorre cada uno de los renglones de la data.
for(let i=1;i<=contarSaltosDeLinea;i++){ 
    divisionDatos=""; //varialbe que se reiniciara cada iteracion del bucle for
    divisionSubDatos="";    //Por cada renglon va a contar cuantas columnas de datos tiene
    //---------------------------------------------------------------------------------------------
     divisionColumnasEntrada=renglones[i].split(",");           //separador de datos ingresados  
     contadorColumnasEntrada=divisionColumnasEntrada.length-1;  //contador de datos ingresados
    //---------------------------------------------------------------------------------------------
    

    //VALIDAR SI LOS RENGLONES TIENEN LA MISMA CANTIDAD DE COLUMNAS QUE EL TopColumnas
        if(contadorColumnasEntrada==contadorColumnas){ 
        console.log("El renglon ("+i+") SI tiene la misma cantidad de columnas");
        }
        if(contadorColumnasEntrada!=contadorColumnas){
            console.log("El renglon ("+i+") NO tiene la misma cantidad de columnas");
            //guardar el log en un archivo
        }
        
    //------------------------------------------------------------------------------------------
    //VALIDAR SI LAS COLUMNAS TIENEN DATOS
        /*Usaremos el método trim() que nos permitirá
        retirar las cadenas de caracters vacias " " 
        al principio y el final de un texto. */
        divisionDatos = renglones[i].split(","); //separador de datos del topColumnas
        for(let k=0;k<contadorColumnasEntrada;k++){
            divisionDatosTrim=divisionDatos[k].trim();
            if(divisionDatosTrim==""){
                console.log("esta vacia")
            }else{
                //No esta vacia
                console.log(divisionDatosTrim);
            }
        }


/*Documentare esto por mientras porque se que me servira
         //evaluar si es alfanumerico
         for(let j=0;j<renglones[i].length;j++){
            letra=renglones[i].charAt(j).toLowerCase();   
            if(caracteresAlfanumericos.includes(letra)){
                    console.log("Si es alfanumerico");
            }else{
                
            }
                              
            }
       */

        
    }//fin for general

    
});
 
//debo investigar que guarde en un archivo los logs.