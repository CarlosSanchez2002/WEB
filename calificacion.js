function aaa(){
    var mostrarcalificacion=document.getElementById("calificacioncjsg").value;
    if (mostrarcalificacion==0){
        alert("¿QUE?")
    }else if (mostrarcalificacion<=5){
        alert("¿Porque tan baja esa calificación? :,c")
    }else if(mostrarcalificacion<=10){
        alert("No pues ingeniero, yo sé que mi página vale más que eso. :,)")
    }else if(mostrarcalificacion<=14){
        alert("Un punto más no sea asi")

    }else if(mostrarcalificacion==15){
        alert("Esa si es una calificacion digna de mi trabajo, jeje.")
    }


}