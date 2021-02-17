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

## Example 1
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

## Example 2
```javascript
// Constructor
var Employee = function(empName, empCity) { 
    this.orgEmpName = empName;
    this.orgEmpCity = empCity;
} 

// Contstructor
var Department = function(empName, empCity, deptName) { 
    Employee.call(this, empName, empCity);    
    this.deptName = deptName;
}

// Created Department.prototype object that inherits from Employee.prototype
Department.prototype = Object.create(Employee.prototype);


// Prototyping Function
Employee.prototype.getEmpInfo = function(){ 
    console.log('Employee Name: ' + this.orgEmpName + ' Employee City: ' + this.orgEmpCity);
}

// Prototyping Function
Department.prototype.getDeptInfo = function() {
    console.log('Employee Name: ' + this.orgEmpName + ' Department: ' + this.deptName)
}

var emp1 = new Department("Husen", "Ahmedabad", "Front-end");

emp1.getEmpInfo();
emp1.getDeptInfo();
```


# Web Worker
- A web worker is a script that runs in the background (i.e., in another thread) without the page needing to wait for it to complete. The user can continue to interact with the page while the web worker runs in the background. Workers utilize thread-like message passing to achieve parallelism.

## Example 1
```javascript
    // Create worker    
    var worker = new Worker('./script.js');

    // Receive
    worker.onmessage = function(e) {
        var message = e.data;        
        console.log(message2);
        return deferred.promise();
    }

    // Send
    function submit() {
        var message = document.getElementById('message').value;        
        worker.postMessage(message);
    }
```

### Sript.js
```javascript
    self.onmessage = function(e) {
        var message = e.data;
        self.postMessage(message + ' Processed');
    }
```
