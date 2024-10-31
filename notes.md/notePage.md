Testing adding a line to notes from cmd
This can be done, but it's probably easier to open the file

This is a useful link containing a bunch of syntax "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"

Remember to pull first to get the current version, then edit, commit changes with a comment, and then push if there are no conflicts. 

EXAMPLE STARTUP - "https://github.com/webprogramming260/startup-example/tree/main" 

My server IP is http://98.80.67.144/ and I have allocated an elastic address, REMEMBER TO CANCEL AFTER THE TERM But the new permanent one is http://3.229.25.250/

Using the Amazon Route 53 service I was able to purchase and link the domain http://lorecore.click and link it to the IP address, so now searching that opens my website. 

We will be doing a lot of work in GitBash. Here are the base commands.  
echo - Output the parameters of the command

cd - Change directory

mkdir - Make directory

rmdir - Remove directory

rm - Remove file(s)

mv - Move file(s)

cp - Copy files

ls - List files

curl - Command line client URL browser

grep - Regular expression search

find - Find files

top - View running processes with CPU and memory usage

df - View disk statistics

cat - Output the contents of a file

less - Interactively output the contents of a file

wc - Count the words in a file

ps - View the currently running processes

kill - Kill a currently running process

sudo - Execute a command as a super user (admin)

ssh - Create a secure shell on a remote computer

scp - Securely copy files to a remote computer

history - Show the history of commands

ping - Check if a website is up

tracert - Trace the connections to a website

dig - Show the DNS information for a domain

man - Look up a command in the manual


**CSS**

CSS is about defining rules sets and rules. The sets are composed of declarations of a property: value. 

There are Element type selectors: 
"body {
  font-family: sans-serif;
}"

Class selector to edit all instances of a classes appearance. 

ID selector is to unique IDs marked with a # symbol

Link to a table of delectations: https://learn.cs260.click/page/css/declarations/declarations_md

none - Don't display this element. The element still exists, but the browser will not render it.

block - Display this element with a width that fills its parent element. A p or div element has block display by default.

inline - Display this element with a width that is only as big as its content. A b or span element has inline display by default.

flex - Display this element's children in a flexible orientation.

grid - Display this element's children in a grid orientation.

There are also many more examples including founts and selectors forked on CodePen

# Javascript notes Start:

Java script seems somewhat similar to Java, probably intentionally. 
To "print" it's console.log("string") and s% is space

console.time -> console.timeEnd for timers

Import with <script src="javascript.js"></script>and run things using onclick="functionName()"

The varibale 'let' is changeable, and var 'const' is not

Strings can be done with a single quote ' and there are several boolean functions doable for checking strings for some reason. 

Functions: function functionName(var){
return ret;
}

You can pass functions as parameters to take an "Anonymous" function that can do multiple this using those other functions 

Functions can be written shorthand using an arrow. 
// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);

Javascript has arrays similar to Java ones. Here is a table of functions https://learn.cs260.click/page/javascript/array/array_md

You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

For the object class you make an object then can add things to it with obj.subobject = 'Thing'

Or object literal syntax like this 
const obj = {
  a: 3,
  b: 'fish',
};

They act similarly to maps

Classes an inheritance essentially works like C++

What the heck is '==='

Try->catch->finally

Global - Visible to all code
Module - Visible to all code running in a module
Function - Visible within a function
Block - Visible within a block of code delimited by curly braces

var is universally affected by functions and stuff so it's not great to use

Local storage can be found at application tad in dev tools, then storage>local storage and you can see your saved variables 

Promise states:
Pending: The operation is still in progress.
Fulfilled: The operation completed successfully, and the result is available.
Rejected: The operation failed, and an error or reason for failure is available.

# Websocket 
Vue combines HTML, CSS, and JavaScript into a single file. HTML is represented by a template element that can be aggregated into other templates.

Like Vue, Svelte combines HTML, CSS, and JavaScript into a single file. The difference here is that Svelte requires a transpiler to generate browser-ready code, instead of a runtime virtual DOM.

React combines JavaScript and HTML into its component format. CSS must be declared outside of the JSX file. The component itself leverages the functionality of JavaScript and can be represented as a function or class.

An Angular component defines what JavaScript, HTML, and CSS are combined together. This keeps a fairly strong separation of files that are usually grouped together in a directory rather than using the single file representation.

Websocket improves performance and increases device coverage
