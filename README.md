# CustomEvents
CustomEvents lib allows you to bind any object, build and trigger custom events


### Installing

Clone this repo

```
https://github.com/Teodor-Zhelyazkov/CustomEvents.git
```

## Usage

use with extend. .

```
class myCustomClass extends CustomEvents
{
    // Code.. .
}

// make instance of your class
let object = new myCustomClass();

// then you can create custom events
object.on("whatever_event_you_like", function(){
    alert("Event triggered");
});

object.on("whatever_event_you_like_2", function(){
    alert("Event triggered");
});

// dispatch all events to our object OR .. .  
object.dispatch();

// ... OR you can dispatch spesific Event
object.dispatch("whatever_event_you_like_2");

```

use with passing the object 

```
// make a custom object (Any object)

let object = new Array();
// OR 
let object = new Object();
// OR 
let object = [];
// OR 
let object = {};


// make instance of CustomEvents class and pass your custom object to constructor
new CustomEvents( arr );

// then you can create custom events
object.on("whatever_event_you_like", function(){
    alert("Event triggered");
});

object.on("whatever_event_you_like_2", function(){
    alert("Event triggered");
});

// dispatch all events to our object OR .. .  
object.dispatch();

// ... OR you can dispatch spesific Event
object.dispatch("whatever_event_you_like_2");

```

