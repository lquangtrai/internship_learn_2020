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












## PostgreSQL


### JavaScript Basic
Example of JavaScript is on the web where it is used to create everything from engaging photo, and video galleries,.... games , ., applications

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

JavaScript Arrays


JavaScript Object

JavaScript Numbers




* Resource :
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions





### React
#### Reactjs
Why we need React? the library for building user interfaces. The benefit of react is providing the efficient and flexible way of building, organizing and
maintaining the UI code. In addition, the react provide the way to break up the code into reusable pieces of code called **components**. The other big benefit is that React keeps application's data or at state and the UI in-sync and can efficiently update you UI when data changes.


Create a new React application:
* npx create-react-app my-app
* cd my-app
* npm start // to start the web server

React = HTML + CSS + JavaScript + DOM + Nodejs


#### React Native

1. Install create-react-native-app
* npm install -g create-react-native-app
2. Create project
* create-react-native-app NameApp
3. 




* Resource :
  * https://reactjs.org/docs/thinking-in-react.html (Think in React)

### Nodejs latest 10 version
