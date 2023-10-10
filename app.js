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
      
    //No se que hace esto pero supongo que no debo preocuparme por ahorita
    if(err){
        console.error(err);
        return;
    }

    var renglones = data.split('\n'); //separa toda la informacion en base saltos de linea
    const topColumnas = renglones[0]; //almacena la primer linea correspondiente a los campos
    const divisionColumnas = topColumnas.split(","); //separa la informacion (campos) de topColumnas
    const contadorColumnas = divisionColumnas.length-1; //contador de campos de informacion


    var caracteresAlfanumericos="abcdefghijklmnopqrstuvwxyz0123456789"; //caracteres alfanumericos
    var letra;                      //caracter que compararemos con caracteresAlfanumericos

    //inicializacion de variables extra que me serviran
    var divisionColumnasEntrada;    
    var contadorColumnasEntrada;
    var divisionDatos;
    var divisionDatosTrim;
    var esAlfanumerico=0; 

    //Contador de renglones después del renglon 0 (el de los campos)
    var contarSaltosDeLinea=renglones.length-1; //-1 para excluir el topColumnas
    //-------------------------------------------------------------------------------------------
    //CICLO FOR GENERAL
    //Este for recorre cada uno de los renglones de la data.
for(let i=1;i<=contarSaltosDeLinea;i++){ 
    divisionDatos=""; //variable que se reiniciara cada iteracion del bucle for
    divisionDatosTrim="";    //Por cada renglon va a contar cuantas columnas de datos tiene
    //---------------------------------------------------------------------------------------------
     divisionColumnasEntrada=renglones[i].split(",");           //separador de datos ingresados del renglon 1,2,3... 
     contadorColumnasEntrada=divisionColumnasEntrada.length-1;  //contador de datos ingresados del renglon correspondiente
    //---------------------------------------------------------------------------------------------
    

    //VALIDAR SI LOS RENGLONES TIENEN LA MISMA CANTIDAD DE COLUMNAS QUE EL TopColumnas (campos requeridos)
    //contadorColumnasEntrada: es la cantidad de datos del renglon evaluado | contadorColumnas: es la cantidad de campos de información 
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

        divisionDatos = renglones[i].split(","); //separar cada dato del renglon actual.
        for(let k=0;k<contadorColumnasEntrada;k++){
            divisionDatosTrim=divisionDatos[k].trim(); //retirar los vacios al final e inicio del dato.
                if(divisionDatosTrim==""){
                    console.log("Al renglon "+i+" Le faltan datos del campo: "+divisionColumnas[k])
                }
        }

        //Reiniciar variables para volver a trabajar con ellas
        divisionDatosTrim="";
        divisionDatos="";
        divisionDatos = renglones[i].split(","); //separar cada dato del renglon actual.
        
        //EVALUAR QUE EL NICKNAME SEA ALFANUMERICO
        //-----------------------------------------------------------------------------------------------------------
         for(let j=0;j<divisionDatos[0].length;j++){ //el bucle for revisara cada letra del nickname
            letra=divisionDatos[0].charAt(j).toLowerCase(); //cambiar a minuscula cada letra por si son mayusculas
            if(caracteresAlfanumericos.includes(letra)){
                    //no realizar nada pues xd
            }else{
                  esAlfanumerico++ //si vale de 1 en adelante, significa que contiene caracteres especiales, por lo que no es alfanumerico
            }
        }
        if(esAlfanumerico==0){
            console.log("El nickname: "+divisionDatos[0]+" SI es alfanumerico");
        }else{
            console.log("El nickname: "+divisionDatos[0]+" NO es alfanumerico");
        }
        //------------------------------------------------------------------------------------------------------------
        


        
    }//fin for general
    
    
});
 
//debo investigar que guarde en un archivo los logs.