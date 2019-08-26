var conteo= 0;
var contador =0;
var n,pos,operando1,operando2,operacion,memoria1,memoria2,memoria3,memoria4;

function iniciar(){

	var calculadora = {
	                  resultado:document.getElementById("display"),
	                  reset: document.getElementById("on"),
	                  divide:document.getElementById("dividido"),
	                  resta:document.getElementById("menos"),
	                  suma: document.getElementById("mas"),
	                  multiplica: document.getElementById("por"),
	                  signo:document.getElementById("sign"),
	                  igual:document.getElementById("igual"),
	                  punto:document.getElementById("punto"),
	                  cero:document.getElementById("0"),
	                  uno: document.getElementById("1"),
	                  dos:document.getElementById("2"),
	                  tres:document.getElementById("3"),
	                  cuatro:document.getElementById("4"),
	                  cinco:document.getElementById("5"),
	                  seis:document.getElementById("6"),
	                  siete:document.getElementById("7"),
	                  ocho:document.getElementById("8"),
	                  nueve:document.getElementById("9"),
	                  limpiar: function(){
	                  	this.resultado.textContent ="";
	                  	n="";
	                  	conteo=0;
	                  },
	                  resetear: function(){
	                  	this.resultado.textContent="0";
	                  	operando1= "";
	                  	operando2= "";
	                  	operacion= "";
	                  	conteo= 0;
	                  	n="";
	                  	pos=undefined;
	                  	memoria4=undefined;
	                  },
	                  resolver:function(){
	                  	var r,res,resu,resul;
	                  	
	                  	switch(operacion){
	                  	  case "+":
	                  	  	res= Number(operando1) + Number(operando2);
	                  	  	break;
	                  	  case "-":
	                  	    res= Number(operando1) - Number(operando2);
	                  	    break;
	                  	  case "x":
	                  	    res= Number(operando1) * Number(operando2);
	                  	    break;
	                  	  case "/":
	                  	    res= Number(operando1) / Number(operando2);
	                  	    break;   		
	                  	}
	                  	memoria2= Number(operando2);
	                  	memoria3= operacion;
	                  	this.resetear();

	                  	if (res <= Number(99999999)){
	                  	  resu= res.toString();
	                  	  pos= resu.indexOf(".");
	                  	  resul= resu.length;
	                  	  if (resul <=8){
	                  		this.resultado.textContent= res;
	                  		memoria1= this.resultado.textContent;
	                  	  }else{
	                  	  	if ((resul > 8) && (pos != -1)){//buscar el punto decimal
	                  		  r=resu.substring(0,9)
	                  		  this.resultado.textContent= r;
	                  		  memoria1= r;
	                  		}
	                  	   }
	                  	}   
	                  	else  {
	                  		resu=res.toPrecision(8).toString()
	                  		resul=resu.substring(0,10)
	                  		this.resultado.textContent= resul;
	                  		memoria4=0;
	                   	}
	                  }
	}

	//click en numero 0
	calculadora.cero.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

	calculadora.cero.addEventListener("click", function(e){
	    if ((conteo == 0)&&(memoria4!=0)){
	      calculadora.resultado.textContent="0";	
        }
	    else{ if ((conteo !=0) && (conteo < 8)){
	    calculadora.resultado.textContent = calculadora.resultado.textContent + "0";
	    conteo = conteo + 1;	
	    }
        }
    })

	calculadora.cero.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en numero 1              
    calculadora.uno.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

    calculadora.uno.addEventListener("click", function(e){
	    if ((conteo == 0)&&(memoria4!=0)) {
	      calculadora.resultado.textContent="";	
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "1";
	      conteo= conteo +1;
	    }
	    else{ if ((conteo !=0) && (conteo < 8)){
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "1";
	      conteo = conteo + 1;	
	    }
        }
    })

    calculadora.uno.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en numero 2
    calculadora.dos.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })
    
    calculadora.dos.addEventListener("click", function(e){
	    if ((conteo == 0) && (memoria4!=0)) {
	      calculadora.resultado.textContent="";	
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "2";
	      conteo= conteo +1;
	    }
	    else{ if ((conteo !=0) && (conteo < 8)){
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "2";
	      conteo = conteo + 1;	
	    }
        }
    })

    calculadora.dos.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })
    
    //click en numero 3
    calculadora.tres.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })
    
    calculadora.tres.addEventListener("click", function(e){
	    if ((conteo == 0)&&(memoria4!=0)) {
	      calculadora.resultado.textContent="";	
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "3";
	      conteo= conteo +1;
	    }
	    else{ if ((conteo !=0) && (conteo < 8)){
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "3";
	      conteo = conteo + 1;	
	    }
        }
    })

    calculadora.tres.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en numero 4
    calculadora.cuatro.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })
    
    calculadora.cuatro.addEventListener("click", function(e){
	    if ((conteo == 0)&&(memoria4!=0)) {
	      calculadora.resultado.textContent="";	
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "4";
	      conteo= conteo +1;
	    }
	    else{ if ((conteo !=0) && (conteo < 8)){
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "4";
	      conteo = conteo + 1;	
	    }
        }
    })

    calculadora.cuatro.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en numero 5
    calculadora.cinco.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })
    
    calculadora.cinco.addEventListener("click", function(e){
	    if ((conteo == 0)&&(memoria4!=0)) {
	      calculadora.resultado.textContent="";	
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "5";
	      conteo= conteo +1;
	    }
	    else{ if ((conteo !=0) && (conteo < 8)){
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "5";
	      conteo = conteo + 1;	
	    }
        }
    })

    calculadora.cinco.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })
    
    //click en numero 6
    calculadora.seis.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })
    
    calculadora.seis.addEventListener("click", function(e){
	    if ((conteo == 0)&&(memoria4!=0)) {
	      calculadora.resultado.textContent="";	
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "6";
	      conteo= conteo +1;
	    }
	    else{ if ((conteo !=0) && (conteo < 8)){
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "6";
	      conteo = conteo + 1;	
	    }
        }
    })

    calculadora.seis.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en numero 7
    calculadora.siete.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })
    
    calculadora.siete.addEventListener("click", function(e){
	    if ((conteo == 0)&&(memoria4!=0)) {
	      calculadora.resultado.textContent="";	
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "7";
	      conteo= conteo +1;
	    }
	    else{ if ((conteo !=0) && (conteo < 8)){
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "7";
	      conteo = conteo + 1;	
	    }
        }
    })

    calculadora.siete.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en numero 8
    calculadora.ocho.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })
    
    calculadora.ocho.addEventListener("click", function(e){
	    if ((conteo == 0)&&(memoria4!=0)) {
	      calculadora.resultado.textContent="";	
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "8";
	      conteo= conteo +1;
	    }
	    else{ if ((conteo !=0) && (conteo < 8)){
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "8";
	      conteo = conteo + 1;	
	    }
        }
    })

    calculadora.ocho.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en numero 9
    calculadora.nueve.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })
    
    calculadora.nueve.addEventListener("click", function(e){
	    if ((conteo == 0)&&(memoria4!=0)) {
	      calculadora.resultado.textContent="";	
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "9";
	      conteo= conteo +1;
	    }
	    else{ if ((conteo !=0) && (conteo < 8)){
	      calculadora.resultado.textContent = calculadora.resultado.textContent + "9";
	      conteo = conteo + 1;	
	    }
        }
    })

    calculadora.nueve.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en punto decimal
    calculadora.punto.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

    calculadora.punto.addEventListener("click", function(e){
	  n = calculadora.resultado.textContent.toString() ; 
	  pos = n.indexOf(".");
	  if (conteo!=8) { 
	    if ((conteo == 0) && (pos == -1)){
	      if ((n =="0")||(n=="")) {
	        calculadora.resultado.textContent="0";	
	        calculadora.resultado.textContent = calculadora.resultado.textContent + ".";
	        conteo= conteo +1;
	      }
	    }else{
	       if ((conteo < 8) && (pos == -1)){
	         calculadora.resultado.textContent = calculadora.resultado.textContent + ".";
	       }
        }
      }
    })

    calculadora.punto.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en cambio de signo (+/-)
    calculadora.signo.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

    calculadora.signo.addEventListener("click", function(e){
	  var cadena="";
	  var neg="";
	  var negativo="";
	  if (conteo != 0){
		if (Number(calculadora.resultado.textContent) > 0){
		  cadena= calculadora.resultado.textContent.toString();
		  neg="-";
		  negativo= neg + cadena;
		  calculadora.resultado.textContent= Number(negativo);
		}else{
			calculadora.resultado.textContent= Math.abs(calculadora.resultado.textContent);
		}
	  }
    })

    calculadora.signo.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en boton ON/C
    calculadora.reset.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

    calculadora.reset.addEventListener("click", function(e){
	  calculadora.resetear();
	  contador= 0;
    })

    calculadora.reset.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en boton sumar (+)
    calculadora.suma.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

    calculadora.suma.addEventListener("click", function(e){
	  if (memoria4!=0) {
	    contador=0;
        operando1 = calculadora.resultado.textContent;
        operacion = "+";
        calculadora.limpiar();
      }
    })

    calculadora.suma.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en boton restar (-)
    calculadora.resta.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

    calculadora.resta.addEventListener("click", function(e){
	  if (memoria4!=0) {
	    contador=0;
	    operando1 = calculadora.resultado.textContent;
        operacion = "-";
        calculadora.limpiar();
      }
    })

    calculadora.resta.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en boton dividir 
    calculadora.divide.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

    calculadora.divide.addEventListener("click", function(e){
	  if (memoria4!=0) {
	    contador=0;
	    operando1 = calculadora.resultado.textContent;
        operacion = "/";
        calculadora.limpiar();
      }
    })

    calculadora.divide.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click en boton multiplicar (X)
    calculadora.multiplica.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

    calculadora.multiplica.addEventListener("click", function(e){
	  if (memoria4!=0) {
	    contador=0;
	    operando1 = calculadora.resultado.textContent;
        operacion = "x";
        calculadora.limpiar();
  	  }
    })

    calculadora.multiplica.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })

    //click boton igual (=)
    calculadora.igual.addEventListener("mousedown", function(e){
        this.style.transform ="scale(0.9)";
    })

    calculadora.igual.addEventListener("click", function(e){
	  if (memoria4!=0) {
	    if (contador==0){
	      operando2 = calculadora.resultado.textContent;
	      contador=1; 
          calculadora.resolver();
        }else{
          operando1= memoria1;
          operando2= memoria2;
          operacion= memoria3;
          calculadora.resolver();	
        }
      }
    })

    calculadora.igual.addEventListener("mouseup", function(e){
      this.style.transform="scale(1)";
    })
}