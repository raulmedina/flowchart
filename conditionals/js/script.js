// JavaScript Document

/*

Student: Raul Medina
October 2, 2013
Version: 1.0A
Assignment: Conditionals
WPF-1


*/


myname = "global"; // global variable   
function func() {  
   var myname; // same as -> var myname = undefined;  
   alert(myname); // "undefined"  
   myname = "local";  
   alert(myname); // "local"   
}  
func(); 