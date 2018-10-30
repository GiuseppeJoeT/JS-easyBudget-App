// JS Modules:
// A MODULE is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (its interface)

// The relations between modules are called DEPENDENCIES. 
// When a module needs a piece from another module, it is said to depend on that module.



// Controller Module
var budgetController = (function() {
    // an IIFE allows us to have data privacy because it creates a new scope
    // that is not visible from the outside scope.

    // private value
    var x = 23;

    
    // private function
    var add = function(a) {
        return a + x ;
    }


    return {
        // public method
        publicTest: function(b) {
            // in the console write: budgetController.publicTest(5) --> 28
            console.log(add(b));
        }
    }
})();
