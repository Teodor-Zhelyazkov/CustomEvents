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
object.on("whatever_event_you_like", function(CustomEvent){
    alert("Event triggered");
    // 'this' points to original 'object'
    // CustomEvent.name will be "whatever_event_you_like" 
    // CustomEvent.data will be the object you passed in "dispatch(name, eventDaataPassed)" method
});

object.on("whatever_event_you_like_2", function(CustomEvent){
    alert("Event triggered");
    // 'this' points to original 'object'
    // CustomEvent.name will be "whatever_event_you_like_2" 
    // CustomEvent.data will be the object you passed in "dispatch(name, eventDaataPassed)" method
});

// dispatch all events to our object OR .. .  
object.dispatch();

// ... OR you can dispatch spesific Event
object.dispatch("whatever_event_you_like_2");

// ... OR you can dispatch spesific Event with custom data
var data = {
    id : 25,
    name : "John Wick"
};
object.dispatch("whatever_event_you_like_2", data);

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
object.on("whatever_event_you_like", function(CustomEvent){
    alert("Event triggered");
    // 'this' points to original 'object'
    // CustomEvent.name will be "whatever_event_you_like" 
    // CustomEvent.data will be the object you passed in "dispatch(name, eventDaataPassed)" method
});

object.on("whatever_event_you_like_2", function(CustomEvent){
    alert("Event triggered");
    // 'this' points to original 'object'
    // CustomEvent.name will be "whatever_event_you_like_2" 
    // CustomEvent.data will be the object you passed in "dispatch(name, eventDaataPassed)" method
});

// dispatch all events to our object OR .. .  
object.dispatch();

// ... OR you can dispatch spesific Event
object.dispatch("whatever_event_you_like_2");

// ... OR you can dispatch spesific Event with custom data
var data = {
    id : 25,
    name : "John Wick"
};
object.dispatch("whatever_event_you_like_2", data);

```

