function juego() {
                
                
    while(aciertos!=4 && errores!=4){
        var categoria=('0');        //resetear variable categoria
    while((categoria!='Geografía') && (categoria!='Arte') && (categoria!='Espectáculos') && (categoria!='Historia') && (categoria!='Ciencias') && (categoria!='Deportes') ){ //repetir mientras no la variable categoria no sea valida
        alert("Geografía \n ¿Cuál es la capital de España? \n Arte \n ¿Quién pintó el Guernica (apellido)? \n Espectáculos \n ¿Qué grupo cantaba I Want To Break Free? \n Historia \n ¿En qué año empezó la Segunda Guerra Mundial? \n Ciencias \n Símbolo del hidrógeno \n Deportes \n ¿Qué equipo ganó el Mundial de fútbol del 2018?"); //preguntas
        categoria=prompt("Geografía, Arte, Espectáculos, Historia, Ciencias, Deportes");} //elgir categoria
        respuesta=prompt("Respuesta"); //responder
        if(categoria=='Geografía'){ // comprobación
            if (respuesta=='Madrid'){
                alert('Acierto')
                aciertos++;
            }
            else{
                alert('Error');
                errores++;
            }
        }
        if(categoria=='Arte'){
            if (respuesta=='Picasso'){
                alert('Acierto')
                aciertos++;
            }
            else{
                alert('Error');
                errores++;
            }
        }
        if(categoria=='Espectáculos'){
            if (respuesta=='Queen'){
                alert('Acierto')
                aciertos++;
            }
            else{
                alert('Error');
                errores++;
            }
        }
        if(categoria=='Historia'){
            if (respuesta=='1939'){
                alert('Acierto')
                aciertos++;
            }
            else{
                alert('Error');
                errores++;
            }
        }
        if(categoria=='Ciencias'){
            if (respuesta=='H'){
                alert('Acierto')
                aciertos++;
            }
            else{
                alert('Error');
                errores++;
            }
        }
        if(categoria=='Deportes'){
            if (respuesta=='Francia'){
                alert('Acierto')
                aciertos++;
            }
            else{
                alert('Error');
                errores++;
            }
        }
    }

    
}
