// for the existing example tasks
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }

}
// addin the class
var list = document.querySelector("ul");
list.addEventListener('click', function (ev) {
    if (ev.target.tagName == "LI") {
        ev.target.classList.toggle('checked');
    }
}, false)
// For the newly created elements in the list

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var txtNode = document.createTextNode(inputValue);
    li.appendChild(txtNode);
    if (inputValue === '') {
        alert("Value must not be Empty");
    } else {
        document.getElementById("myTaskList").appendChild(li);
    }
    document.getElementById("myInput").value= "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    var close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }

    }
}
