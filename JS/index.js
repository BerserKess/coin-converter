const calculateBtn = document.getElementById("calculate");

function calculate() {
	const dolarValue = document.getElementById("dolar-value").value;
	const realValue = document.getElementById("real-value").value;
	const result = document.getElementById("conversion-result");

	if (isNaN(dolarValue) || dolarValue === "" || dolarValue == 0) {
		alert("Você não digitou um número válido! Digite novamente");
	} else {
		let coinConversion = dolarValue * realValue;
		// console.log(coinConversion);
		result.innerHTML = `R$ ${coinConversion}`;
	}
}

function reset() {
	document.getElementById("dolar-value").value = "";
}

calculateBtn.addEventListener("click", function (event) {
	event.preventDefault();
	calculate();
	reset();
});
