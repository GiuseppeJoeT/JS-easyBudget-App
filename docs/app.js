// easyBudget Application

// BUDGET CONTROLLER (Data controller)
var budgetController = (function() {
// When the JavaScript runtime hits this line here, the IIFE gets executed
// and this anonymous function is declared and immediately invoked
    
    // an IIFE allows us to have data privacy because it creates a new scope
    // that is not visible from the outside scope.

    // Expense Constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Income Constructor
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        // Adding a new item to the Budget Controller, so to store the information in the data object
        addItem: function(type, des, val) {
            var newItem, ID;

            // [1 2 3 5 8], next ID = 9
            // ID = last ID + 1

            // Create new item ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
         

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp' ) {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element 
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    };


})();

// UI CONTROLLER
var UIController = (function() {
  
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

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

    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMstrings();

        // in this case the ctrlAddItem argument is a CALLBACK, so it does not needs parenthesis
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // set up and EventListener for a keypress event (ENTER button)
        document.addEventListener('keypress', function(event) {
            // log the key button pressed
            // console.log(event); 

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInputValue();
        //  console.log(input);

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        
    };

    return {
        init: function() {
            console.log('The easyBudget Application has started');
            setupEventListeners();
        }
    }    

})(budgetController, UIController);


controller.init();