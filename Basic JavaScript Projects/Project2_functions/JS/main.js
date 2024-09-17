function updateContent() {
    var helloMessage = "Hello!";//assigning variable hellomessage
    var infoMessage = "This is some additional information.";//assigning variable infoMessage
                document.getElementById('hello').textContent = helloMessage;//getElementById for hello variable
                document.getElementById('info').textContent = infoMessage;//getElementById for infoMessage variable
}

function myFunction(){//function defining myFuction
    var sentence = "I am learning";//start of the sentence and concatenate string
    sentence += "\na lot from this book!";//\n adds a space for the string concatenate
    document.getElementById("Concatenate").innerHTML = sentence;//getElementById
}