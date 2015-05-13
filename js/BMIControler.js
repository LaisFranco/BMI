var BMIControler{
    
    init: function(){
        BMIControler.setForm();
    },
        
        setForm: function(){
            
            var form = document.getElementById('frm-bmi');
            form.addEventListener('submit', function(event)){
             BMIControler.calculate();
             alert("voce clicou no botao que eu sei!!!");
            event.preventDefault();// to avoid form submition
            
            
        }};

},
    calculateBMI: function(){
        var height = document.getElementById('height').value;
        var weight = document.getElementById('weight').value;
        
    },
        showResult function(){
            
            
            
        }
};
//initialization
BMIControler.init();