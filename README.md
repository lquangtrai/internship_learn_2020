# Contents

## JAVA
#### Introduction
Java is oriented programming language which show the principle "write once, run anywhere"(WORA)- Java application can be executed any platform where Java Virtual Machine(JVM) is installed.
Some popular applications of java can be listed like :
 + large client-server web
 + modern desktop
 + mobile applications
 + frameworks
 + libraries

Some essential properties of Java :
* platform independence : compiler convert source code to bytecode after that JVM executes the bytecode.
* multi-paradigm: almost everything is an object of a class.
* **garbage collector** : automatics memory cleaning of unused object at runtime.
* built-in multithreading : concurrent and parallel execution of several parts of Java program.

#### Translate Java source code :(basic understand)
* Tools   :-------------javac----------------------JVM-------------
* process : FILE.java ---> FILE.class(bytecode) ---> low-level code ---> computer



### Compile java code in Terminal
> javac NameClass.java
> java NameClass


### Some shortcut must remember when using intellij
* Ctrl + Space // quick
* Ctrl + j //
* Ctrl + q // View the doc about the function
* Ctrl + Alt + L // format code

### Install third party library : the spring libraries
Class path: consist of one or more directories that contain all the Java files associated with our project.

Now, I add JAR(Java Archive) files to class path in intellij:
Using Gradle or Maven to manage the dependence


### Import for write code
* java.io...  or java.util.... // for input and output
*


## Spring
https://spring.io/

Spring is a library for creating interactive web applications.hl

Basic web app operation: Client request to server through the web browser (protocol define the rule is HTTP : Hyper Text Transfer Protocol).  Some basic components when we start Java code such as : a component to intercept the incoming request, component to handle the request to certain locations and more components to fetch and store any data related to the requester response, the components to generate the response back to the web browser. The code will define the logic for responding the web requests and it executes in a web server.

Therefore, the approach here is using the popular of java is the spring framework.

###### Setup Gradle
add dependency: https://mvnrepository.com/artifact/org.springframework/spring-webmvc



A component is a set of related functionality.

**Beans**: allows any Java Object to be created and used in what's called the servlet container.
**Servlet Container**: the container of your entire running applications on the web server.

**Context component**
### Annotation
@Configuration : for any class that contains application configuration code

@Controller : for any controller classes, which will handle URI requests

@ComponentScan :  used on a configuration class for telling the Spring Framework to scan for components

**SpEL**: stands for Spring Expression Language

**AOP** : stands for Aspect-Oriented

Example:

Create a Controller to Handle HTTP Requests:

URL: Uniform Resource Locator. URL is address that includes a method for locating a
method for locating a resource with a protocol like HTTP or FTP and include the host name.

URI: Uniform Resource Identifier which does not have the host name and indicating protocol.

## Using Thymeleaf to Serve HTML
The process begins with the user making an http request to web server. Based on the request,
the server knows, from the host name. In the application, a dispatcher servlet receives the request and URI is examined. From the URI, the dispatcher servlet determines which controller, and which
of its methods is mapped to the URI requested by using the **RequestMapping** Annotation. As a result, the mapped controller methods is called which will perform any desired actions and gather data to be used in putting together a response to the original HTTP request. That data will be feed to what's called a Spring View Resolver. => String will put to the proper Thymeleaf template(because we use Thymeleaf, jam the data into the proper place holders), and produce a final HTML product that will handed back to the dispatchers servlet. Then, the dispatcher servlet hands it back to the web server.
**Need image to show flow**







## PostgreSQL


### JavaScript Basic

JavaScript is a high-level, object-oriented, **multi-paradigm** programming language.

* high-level: don't have to worry about complex stuff like memory management.
* object-oriented: based on objects
* multi-paradigm: flexible so we can use different styles of programming such as imperative, declarative (different styles then different way of structuring code).



Example application of JavaScript is on the web where it is used to create everything from engaging photo, and video galleries,.... games , ., applications.


Output the message:
  * alert()
  * console.log()
  * document.write()

Capture Input message:
  * prompt();

The browser read and display Content(HTML), Style(CSS), Interactivity(JavaScript) by the JavaScript Engine ( a program or interpreter ) built into the browser that executes JavaScript code.
  * When a browser reads and acts on JavaScript program => running or executing program.
  * Add the JavaScript to HTML by ```<script src="myScript.js"> ... <\script>``` or insert directly the code inside but I can not do both.

### Comparison Operators
| **Syntax** | **Description**            |
|------------|----------------------------|
|===         | equal value and equal type |
|==          | equal to (not care the same type or not )|

### Declare Variable
In JavaScript, the Variable can be defined with **var** keyword but **let** and **const** help our code less error prone.

Notes :
```
// accepted var allows override data
var myValue = 3;
var myValue = 5;

//Cause  Uncaught SyntaxError
let myValue2 = 3;
let myValue2 = 5;
```
* Resource:
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript

### Function in JavaScript
Function expressions: an anonymous function
```
const getRandomNumer = function(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
};
```

Function declarations: **hoisting** the JavaScript engine moves function declarations to the top of their
scope before code execution
```
function getRandomNumer(upper) {
      const randomNumber = Math.floor(Math.random() * upper ) + 1;
      return randomNumber;
}
```

Function Using Arrow Syntax: similar to Function expressions. Notes that this is the newer syntax and it has the same meaning as the Function expressions. The **Function expressions** is still widely used but **Function with Arrow Syntax** is useful to reduce the line of code in callBack function.
```
const getRandomNumer = (upper) => {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}
```

```
const sayHi = () => "Hi!";
```
Equivalent to
```
const sayHi = function() {
  return "Hi!";
}
```

Default Function Parameters to prevent the error when missing value.
```
function sayHi (friend = 'Student') {
  return `Good Morning, ${friend}`;
}
```

isNaN(value) : check the value inside is a number or not.
```
function getRandomNumer(upper) {
  if ( isNaN(upper) ) {
    throw Error('This is not a number')
  }    
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}
```

### JavaScript Arrays
1. Create array :
```
const planets = [
'Mercury',
'Venus',
'Earth',
'Mars'
];
```
or
```
const multiVar = [
true,
1,
"stringWord"
];
```
2. Access Element :

3. Add Element to Array :
* push(Element, Element, Element) // add to the end
* unshift(Element, Element, Element) // add to the beginning

4. Remove Element from Array :
* pop() // remove and return the element from the end of an array
* shift() // remove and return the element from the beginning of an array
Note : push() and shift() can help to create a Queues, or  

5.



JavaScript Object

JavaScript Numbers




* Resource :
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions


### JavaScript interview question
#### Problem 1:
Write a class, ```EventEmitter``` that has three methods: ```on```, ```emit```, and ```removeListener```.

* ```on("eventName", callbackFn)``` - a function that takes an ``eventName`` and a ``callbackFn``, should save the ``callbackFn`` to be called when the event with `eventName` is emitted.

* `emit("eventName", data)` - a function that takes an `eventName` and data object, should call the `callbackFns` associated with that event and pass them the data object.

* `removeListener("eventName", callbackFn)` - a function that takes `eventName` and `callbackFn`, should remove that `callbackFn` from the event.

* For example:

```
let superbowl = new EventEmitter()

const cheer = function (eventData) {
  console.log('RAAAAAHHHH!!!! Go ' + eventData.scoringTeam)
}

const jeer = function (eventData) {
  console.log('BOOOOOO ' + eventData.scoringTeam)
}

superbowl.on('touchdown', cheer)
superbowl.on('touchdown', jeer)

superbowl.emit('touchdown', { scoringTeam: 'Patriots' }) // Both cheer and jeer should have been called with data

superbowl.removeListener('touchdown', jeer)

superbowl.emit('touchdown', { scoringTeam: 'Seahawks' }); // Only cheer should have been called

```

***Solution***:
Use ES6 classes for the class `EventEmitter` and initialize it with an object `event` in order to track events.

```
class EventEmitter {
  constructor () {
    this.events = {}
  }
}
```

***Emit***
```
emit (eventName, eventData) {
   if (!this.events[eventName]) return
   this.events[eventName].forEach(fn => fn(eventData))  
 }
 ```
 This solution take advantage of **closure** in javascript. **Closure** is very important during the javascript interview. "A closure is essentially when a function has references to its surrounding state or its lexical environment. You can also think of this as a closure allowing you access to an outer function’s scope from inside an inner function. Using global variables is a great simple example of closure. "

 Here’s another great example of using closure to track how many times a function was called.
 ```
 function tracker (fn) {
  let numTimesCalled = 0
  return function () {
    numTimesCalled++
    console.log('I was called', numTimesCalled)
    return fn()
  }
}

function hello () {
  console.log('hello')
}

const trackedHello = tracker(hello)
```
The inner function returned in tracker closes over the variable numTimesCalled and maintains a reference to it for the life of the trackedHello function.

**RemoveListener**
```
removeListener (eventName, callbackFn) {
  const idx = this.events[eventName].indexOf(callbackFn)
  if (idx === -1) return
  this.events[eventName].splice(idx, 1)
}
```

* Source : https://dev.to/coderbyte/a-javascript-interview-question-asked-at-google-19f1


### React
#### Reactjs
Why we need React? the library for building user interfaces. The benefit of react is providing the efficient and flexible way of building, organizing and
maintaining the UI code. In addition, the react provide the way to break up the code into reusable pieces of code called **components**. The other big benefit is that React keeps application's data or at state and the UI in-sync and can efficiently update you UI when data changes.


Create a new React application:
* npx create-react-app my-app
* cd my-app
* npm start // to start the web server

React = HTML + CSS + JavaScript + DOM + Nodejs

Thinking in React: think in component
Component is the piece of UI that can reuse.

prop : read only or immutable.
state: dynamic and interactive.

Function vs Class :
Function : if the component is only receiving input through props and rendering UI.
Class : state.

bind or not bind:
https://medium.com/shoutem/react-to-bind-or-not-to-bind-7bf58327e22a
why we need to bind event handlers
https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/#:~:text=When%20we%20bind%20the%20this,scope%20they%20are%20defined%20in.

Update State based on previous State (important)
if we have multiple setState calls inside of an event handler, react will often **batch**, or bundle the updates together into a single update.
The state maybe updated **asynchronously**, whenever we need to update the state based on previous state, we should not reply on the previous state for  example this.setState({ score: this.state.score + 1});
Good way :
```
this.setState( prevState => {
  return {
    score: prevState.score - 1;
  };
});
```

There are two type of states when create a React app:

Application state: Data that is available to the entire applications.

Component state: State that is specific to a component and not shared outside of the component.

Creating a Controlled Component:
  * Initialize state for the value of the input
  * Listen for changes on the input to detect when value is updated
  * Create an event handler that updates the value state.

In React, data naturally flows down the component tree, from the app's top-level component down to the child components, via props.
This is called "unidirectional data flow".
* https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down
Lifting state up : when two or more components need access to the same state, we move the stat into their common parent.
 * https://reactjs.org/docs/lifting-state-up.html

React's build in lifecycle method
Remind: In react, every component instance follows a cycle: it's **mounted** onto the DOM, it's **update** with changes in data, and its **unmounted** from the DOM.

* Build-in methods that get called at each point in the life cycle
* Hooks that run code at key times in a component's life cycle
* Give ability to control what happens when a component mounts, updates and unmounts

Example:
componentDidMount: get called by React as soon as a component is inserted or mounted into the DOM. Also referred to as
lifecycle hooks because they let hook into, or hook to certain part of a component's lifecycle. It is useful hook for setting up timers **fetching data**, anything when the components need to mount into page.

componentWillUnmount is invoked just before a component instance is destroyed: **prevent Memory Leaks** if we provided a stopwatch in multiple pages or a way for users visibly toggle the stopwatch between a visible and hidden state => for getting clear the interval will cause problem

##### Optimize Performance with PureComponent
In previous practice, each time we modify the score of player then React rerenders every player component on the board.
That the reason why we use PureComponent to optimize the Performance.
PureComponent: implment a lifecycle methods behind the scences called  shouldComponentUpdate that runs a shallows comparison of props and state. the lifecycle method automatically checks whether a rerender is required for the component and calls render if it detects changes in state or props.


##### Refs and The DOM
    * https://reactjs.org/docs/refs-and-the-dom.html#refs-and-functional-components
    * https://reactjs.org/docs/refs-and-the-dom.html
    * https://reactjs.org/docs/glossary.html#refs

##### Checking in React
    * PropTypes : https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes; https://www.npmjs.com/package/prop-types
    * TypeSCript : https://www.typescriptlang.org/
    * Flow  : https://flow.org/

#### React Native

1. Install create-react-native-app
* npm install -g create-react-native-app
2. Create project
* create-react-native-app NameApp
3. Start the sample prject
* cd NameApp
* npm start
4. Start Emulator on android phone
* npm run android
5. Write a Test with Jest
* npm test

Note:
6. npm run eject (permanent action only for custom configuration)
7. Install react-native globally
* npm install -g react-native-cli
8. Now from 7 Use command
* react-native init appName --version 1.0
From this command, we have android folder where we can use android studio to open
and we can devloy it as normal

Create React Native App
* Preview your app on a physical device while you build it
* One build tool
* No lock-in
* 'Eject' at any time to create your own build Setup


* Resource :
  * https://reactjs.org/docs/thinking-in-react.html (Think in React)

### Nodejs latest 10 version
