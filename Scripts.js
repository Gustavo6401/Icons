// Code
var codeLeft = document.createElement("div");
var codeRight = document.createElement("div");
var middleBar = document.createElement("div");

codeLeft.setAttribute("class", "code-left icone");
codeRight.setAttribute("class", "code-right icone");
middleBar.setAttribute("class", "middle-bar icone");

var code = document.getElementById("code");
code.appendChild(codeLeft);
code.appendChild(middleBar);
code.appendChild(codeRight);