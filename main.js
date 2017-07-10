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

var label1;
var textBox3;
var button4;
var label2;

function Enter(){
  button3.innerHTML = parseInt(textBox1.value) + parseInt(textBox2.value);

  createP("");

  label1 = document.createElement("label");
  document.body.appendChild(label1);
  label1.innerHTML = "接下來請輸入圓半徑";

  createP('');

  textBox3 = document.createElement("textarea");
  document.body.appendChild(textBox3);

  button4 = document.createElement("button");
  document.body.appendChild(button4);
  button4.innerHTML = "Enter";
  button4.addEventListener("click", Enter2);

  createP('');

  label2 = document.createElement("label");
  document.body.appendChild(label2);
  
}

function Enter2(){
  label2.innerHTML = "圓周長 = ";
  label2.style.fontSize = "72px";
  label2.style.fontFamily = "DFKai-sb";
  label2.innerHTML += parseInt(textBox3.value) * 2 * 3.14159265358979323846264338327950;
}
