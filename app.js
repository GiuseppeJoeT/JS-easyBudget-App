// BUDGET CONTROLLER
var budgetController = (function() {
// When the JavaScript runtime hits this line here, the IIFE gets executed
// and this anonymous function is declared and immediately invoked
    
    // an IIFE allows us to have data privacy because it creates a new scope
    // that is not visible from the outside scope.


})();

// UI CONTROLLER
var UIController = (function() {
   
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        
        console.log('the controller ctrlAddItem works!');
    }

    // in this case the ctrlAddItem function is a CALLBACK, so it does not needs parenthesis
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

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