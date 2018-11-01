// BUDGET CONTROLLER
var budgetController = (function() {
// When the JavaScript runtime hits this line here, the IIFE gets executed
// and this anonymous function is declared and immediately invoked
    
    // an IIFE allows us to have data privacy because it creates a new scope
    // that is not visible from the outside scope.


})();

// UI CONTROLLER
var UIController = (function() {
    // private
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    // public
    return { 
        getInputValue : function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
    
        }
    }
     
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
        // 1. Get the field input data
        var inputData = UICtrl.getInputValue();
        console.log(inputData);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        
    }

    // in this case the ctrlAddItem function is a CALLBACK, so it does not needs parenthesis
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    // set up Event listeners for keypress events
    document.addEventListener('keypress', function(event) {
        
        // log the key button pressed
        // console.log(event); 

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);


// how to use the Event object