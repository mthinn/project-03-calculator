var answer = document.calculator.results.value

function btn9(){
	document.calculator.results.value += "9";
}

function btn8(){
	document.calculator.results.value += "8";
}

function btn7(){
	document.calculator.results.value += "7";
}

function btn6(){
	document.calculator.results.value += "6";
}

function btn5(){
	document.calculator.results.value += "5";
}

function btn4(){
	document.calculator.results.value += "4";
}

function btn3(){
	document.calculator.results.value += "3";
}

function btn2(){
	document.calculator.results.value += "2";
}

function btn1(){
	document.calculator.results.value += "1";
}

function btn0(){
	document.calculator.results.value += "0";
}

function btntimes(){
	document.calculator.results.value += "*";
}

function btndivide(){
	document.calculator.results.value += "%";
}

function btnplus(){
	document.calculator.results.value += "+";
}

function btnminus(){
	document.calculator.results.value += "-";
}

function btnclear(){
	document.calculator.results.value += "c";
}

function btnequal(){
   var btnequal=btnequal(document.calculator.results.value);
   document.calculator.results.value += btnequal;
}