# Closures

```bash
A closure is the combination of a function bundled together
```

## Example 1 

```javascript
function outerFunction(outerVariable){
	return function innerFunction(innerVariable) {
		console.log('outer' + outerVariable)
		console.log('inner' + innerVariable)
	}
}
```

## Example 2

```javascript
function demo(){
    var city= "Ahmedabad";
    return {
        get: function() { console.log(city);},
        set: function(newCity) { city = newCity; }
    }
}

var myCity = demo();
myCity.get();
myCity.set('Pune');  
```

# Constructor

- Contructors: Are used to set an object properties and methods.
- Contructors are invoked the moment an object is instantiated.
  
   Example: var Apple = new Fruit("Apple","Red");


## Example

```javascript
function Fruit(name, color) {  // This is constructor
    console.log("Contructor"); // Contructors are invoked the moment an object is instantiated.
    this.name = name;          // Property 
    this.color = color;        // Property 
    this.type1 = function(){   // Property Function
        console.log("Fruit");
    }
}
var Apple = new Fruit("Apple","Red"); // var Apple is Object
var Apple1 = new Fruit("Apple","Red");
```


# The Prototype Object
- Every Object has a prototype and every prototype is an object

- All objects inherit proerpties and methods from their prototypes

- Prototyping is also an easy way to add properties and methods to objects that have already been instantiated.

## Example
```javascript
var vegetable = function() {
    this.type = "Veggie";    
}

vegetable.prototype.print = function(){
    console.log(this.type + " is good for us.");
}

vegetable.prototype.color = "";

var carrot = new vegetable();

carrot.print();
carrot.color = "orange";
```

