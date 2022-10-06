function szamol()
{ 
  
    var indulo=document.getElementById("select1").value;
    var erkezo=document.getElementById("select2").value;

    var eredmeny=indulo-erkezo;
    if(indulo=erkezo){
        alert("Hiba: azonos megállókat választott ki!");
    }
    else{
        alert("Menetidő: "+Math.abs(eredmeny)+"perc!");
    }

    alert(Math.abs(eredmeny));

}
  