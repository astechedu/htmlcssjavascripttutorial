

//document.getElementById('byId').innerHTML = "Found getElementById";

//var elmsByTagName = document.getElementsByTagName('div');


//var allClasses = document.getElementsByClassName('byClassName');


//var q = document.querySelectorAll('div');

var x = document.forms['myForm'];

var text = "";

for (var i = 0; i < x.length; i++) {
 
    text += x.elements[i].value + " ";
	
}

console.log(text);