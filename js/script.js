function greet(name, age) {	return 'Hello ${name}! You are ${age} years old.';}				

function showProperties(element){
  document.getElementById('message').innerHTML = element.alt;
}
function displayId(element){
  console.log(element.id);
}
function closeMe(){x=document.getElementById("demo");x.className="closed";}

function openMe(){x=document.getElementById("demo");x.className="open";}