var textBox1, textBox2;
var button1;
var button_Enter;
var button3;

function setup(){
  console.log("body: "+ document.body);
  textBox1 = document.createElement("textarea");
  console.log(document);
  // console.log(document.html);
  console.log(document.body);
  document.body.appendChild(textBox1);
  //textBox1.parentNode.removeChild(textBox1);
  button1 = document.createElement("button");
  document.body.appendChild(button1);
  button1.innerHTML = "+";

  textBox2 = document.createElement("textarea");
  document.body.appendChild(textBox2);

  button_Enter = document.createElement("button");
  document.body.appendChild(button_Enter);
  button_Enter.innerHTML = "Enter";
  button_Enter.addEventListener("click", Enter, false);

  createP("");

  button3 = document.createElement("label");
  document.body.appendChild(button3);
  button3.innerHTML = "尊重";
  button3.style.fontSize = "72px";
}

function draw(){
  
}

function Enter(){
  button3.innerHTML = parseInt(textBox1.value) + parseInt(textBox2.value);
}

