

var list=document.getElementById("list")



function additem(){

    var  item=document.getElementById("todoitem") ;
    var li=document.createElement('li');
    var litext=document.createTextNode(todoitem.value )

    li.appendChild(litext );
  
var deltebt=document.createElement("Button")
var deltetext=document.createTextNode("DELETE")
deltebt.setAttribute("class" ,"bt")
deltebt.setAttribute("onclick","deleteitem(this)")
deltebt.appendChild(deltetext)


var editbt=document.createElement("Button")
var edittext=document.createTextNode("EDIT")
editbt.appendChild(edittext)
editbt.setAttribute("onclick","edititem(this)")







li.appendChild(editbt)
li.appendChild(deltebt)
list.appendChild(li);

   todoitem.value="";
    console.log(li)

}

function deleteitem(e){
    e.parentNode.remove()
}

function edititem(e){
        var a=prompt("Enter Update Text",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue =a;
    }
function deleteall(){
    list.innerHTML=""
}



