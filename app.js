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


    const caracteresAlfanumericos="abcdefghijklmnopqrstuvwxyz0123456789"; //caracteres alfanumericos
    const caracteresNumericos="1234567890.";                                 //caracteres numericos
    const caracteresNormales="abcdefghijklmnopqrstuvwxyz"                   //caracteres normales
    var letra;                      //caracter que compararemos con caracteresAlfanumericos Y caracteresNormales
    var numero;                     //numero que compararemos con caracteresNumericos
    //inicializacion de variables extra que me serviran
    var divisionColumnasEntrada;    
    var contadorColumnasEntrada;
    var divisionDatos;
    var divisionDatosTrim;
    var esAlfanumerico=0; 
    var esNumerico=0;

    //Contador de renglones después del renglon 0 (el de los campos)
    var contarSaltosDeLinea=renglones.length-1; //-1 para excluir el topColumnas
    //-------------------------------------------------------------------------------------------
    //CICLO FOR GENERAL
    //Este for recorre cada uno de los renglones de la data.
for(let i=1;i<=contarSaltosDeLinea;i++){ 
    console.log("\nRENGLON NUMERO: "+i+"\n");
    divisionDatos=""; //variable que se reiniciara cada iteracion del bucle for
    divisionDatosTrim="";    //Por cada renglon va a contar cuantas columnas de datos tiene
    //---------------------------------------------------------------------------------------------
     divisionColumnasEntrada=renglones[i].split(",");           //separador de datos ingresados del renglon 1,2,3... 
     contadorColumnasEntrada=divisionColumnasEntrada.length-1;  //contador de datos ingresados del renglon correspondiente
    //---------------------------------------------------------------------------------------------
    esAlfanumerico=0;

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
            //agregar al LOG el que no cumple con lo especificado
        }
        //------------------------------------------------------------------------------------------------------------
        
        //Reiniciar variables para volver a trabajar con ellas
        divisionDatosTrim="";
        divisionDatos="";
        divisionDatos = renglones[i].split(","); //separar cada dato del renglon actual.
        esNumerico=0;
        //EVALUAR QUE LA MATRICULA SEA NUMERICA
        for(j=0;j<divisionDatos[1].length;j++){ //el bucle for revisara cada letra de matricula
            numero=divisionDatos[1].charAt(j); //almacenar cada uno de los digitos de la matricula
            if(caracteresNumericos.includes(numero)){
                    //no realizar nada pues xd
            }else{
                  esNumerico++ //si vale de 1 en adelante, significa que contiene caracteres especiales, por lo que no es alfanumerico
            }
        }
        if(esNumerico==0){
            console.log("La matricula: "+divisionDatos[1]+" SI es NUMERICA");
        }else{
            console.log("La matricula: "+divisionDatos[1]+" NO es NUMERICA");
            //agregar al LOG el que no cumple con lo especificado
        }
        //-------------------------------------------------------------------------------------------------------------------------------

        //Reiniciar variables para volver a trabajar con ellas
        divisionDatosTrim="";
        divisionDatos="";
        divisionDatos = renglones[i].split(","); //separar cada dato del renglon actual.
        esNumerico=0;
        esAlfanumerico=0;

        //VALIDAR QUE FACULTAD SEA UN STRING
        for(let j=0;j<divisionDatos[2].length;j++){ //el bucle for revisara cada letra de facultad
            letra=divisionDatos[2].charAt(j).toLowerCase(); //cambiar a minuscula cada letra por si son mayusculas
            if(caracteresNormales.includes(letra)){
                    //no realizar nada pues xd
            }else{
                  esAlfanumerico++ //reutilice esta variable puesto que me sirve para saber que se almaceno un caracter diferente del abedecedario pues.
            }
        }
        if(esAlfanumerico==0){ //mismo caso, si vale de 1 en adelante, significa que contiene caracteres no String.
            console.log("La facultad: "+divisionDatos[2]+" Si es de tipo STRING.");
        }else{
            console.log("La facultad: "+divisionDatos[2]+" No es de tipo STRING");
            //agregar al LOG el que no cumple con lo especificado
        }
        //------------------------------------------------------------------------------------------------------------------

        //a partir de aqui solo voy a copiar y pegar codigo puesto que: carrera, promedio,edad son de tipo string y numericos
        //y he realizado trabajado con los dos tipos de datos.

         //Reiniciar variables para volver a trabajar con ellas
         divisionDatosTrim="";
         divisionDatos="";
         divisionDatos = renglones[i].split(","); //separar cada dato del renglon actual.
         esNumerico=0;
         esAlfanumerico=0;

         //VALIDAR QUE CARRERA SEA UN STRING
        for(let j=0;j<divisionDatos[3].length;j++){ //el bucle for revisara cada letra de facultad
            letra=divisionDatos[3].charAt(j).toLowerCase(); //cambiar a minuscula cada letra por si son mayusculas
            if(caracteresNormales.includes(letra)){
                    //no realizar nada pues xd
            }else{
                  esAlfanumerico++ //reutilice esta variable puesto que me sirve para saber que se almaceno un caracter diferente del abedecedario pues.
            }
        }
        if(esAlfanumerico==0){ //mismo caso, si vale de 1 en adelante, significa que contiene caracteres no String.
            console.log("La carrera: "+divisionDatos[3]+" Si es de tipo STRING.");
        }else{
            console.log("La carrera: "+divisionDatos[3]+" No es de tipo STRING");
            //agregar al LOG el que no cumple con lo especificado
        }
        //------------------------------------------------------------------------------------------------------------

        //Reiniciar variables pero esta vez por medio de una función.
        function reiniciarVariables(){
        divisionDatosTrim="";
        divisionDatos="";
        divisionDatos = renglones[i].split(","); //separar cada dato del renglon actual.
        esNumerico=0;
        esAlfanumerico=0;
        }
        reiniciarVariables(); //Llamando a la función para reiniciar variables y trabajar con ellas.

        //EVALUAR QUE EL PROMEDIO SEA NUMERICO
        for(j=0;j<divisionDatos[4].length;j++){ //el bucle for revisara cada letra de matricula
            numero=divisionDatos[4].charAt(j); //almacenar cada uno de los digitos de la matricula
            if(caracteresNumericos.includes(numero)){
                    //no realizar nada pues xd
            }else{
                  esNumerico++ //si vale de 1 en adelante, significa que contiene caracteres especiales, por lo que no es alfanumerico
            }
        }
        if(divisionDatos[4].charAt(divisionDatos[4].length-1)=="."){ //evalua si el ultimo caracter de promedio es un ".", si es asi, no es un
                                                                    //valor numerico valido.
            esNumerico++;
        }
        if(esNumerico==0){
            console.log("El promedio: "+divisionDatos[4]+" SI es NUMERICO");
        }else{
            console.log("El promedio: "+divisionDatos[4]+" NO es NUMERICO");
            //agregar al LOG el que no cumple con lo especificado
        }






    }//fin for general
    
    
});
 
//debo investigar que guarde en un archivo los logs.