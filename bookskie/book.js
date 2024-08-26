//selecting popover and popbox
var popover = document.querySelector(".pop-over")
var popbox = document.querySelector(".pop-box")
var addbutton = document.getElementById("add-popup-butt")

addbutton.addEventListener("click",function(){
    popover.style.display="block"
    popbox.style.display="block"
})

//select cancel button

var cancelpop = document.getElementById("cancel-pop")

cancelpop.addEventListener("click",function(event){
    event.preventDefault()
     popover.style.display="none"
    popbox.style.display="none"
    
})

//select con,add-book,bok-ti-in,bok-aut-in,bok-not-in

var con = document.querySelector(".con")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("bok-ti-in")
var bookauthorinput = document.getElementById("bok-aut-in")
var booknoteinput = document.getElementById("bok-not-in")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-con")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${booknoteinput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`

            con.append(div)
            popover.style.display="none"
            popbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
