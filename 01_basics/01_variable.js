const accountID=4561121221;
let accountEmail="abc@gmail.com";
var accountPassword="123456";
accountCity="testcity";
let accountState;

/*
Prefer not to use var 
becase of issue in block scope and functional scope

- var and let create variables that can be reassigned another value.
- const creates "constant" variables that cannot be reassigned another value.
- developers shouldn't use var anymore. They should use let or const instead.
- if you're not going to change the value of a variable, it is good practice to use const.

let will be reassign and not redeclare
KEYWORD         	SCOPE	            REDECLARATION & REASSIGNMENT	                HOISTING
var	            Global, Local	            yes & yes	                            yes, with default value
let	            Global, Local, Block	    no & yes	                            yes, without default value
const	        Global, Local, Block	    no & no	                                yes, without default value
*/ 
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);