
var BMIController = {
	
	init: function() {
		BMIController.setForm();
	},
	
	setForm: function() {
		var form = document.getElementById('frm-imc');
		form.addEventListener('submit', function(event) {
			BMIController.calculateIMC();
			event.preventDefault(); //to avoid form submition
		});
	},
	
	calculateBMI: function() {
		var heightInput = document.getElementById('height');
		var weightInput = document.getElementById('weight');
		
		var height = parseFloat(heightInput.value);
		var weight = parseFloat(weightInput.value);
		
		var result = 0;
		
		if(height && weight) {
			result = IMCService.calculate(height, weight);
			IMCController.showResult(result);
		}
	},
	
	showResult: function(result) {
		var span = document.getElementById('result');
		span.innerHTML = result.toFixed(2);
	}

};

//initialization
