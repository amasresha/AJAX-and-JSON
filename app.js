var URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699";
var myRequest = new XMLHttpRequest();
myRequest.open('GET', URL);

var btn = document.querySelector("#btn");
var titleD = document.querySelector("#titleDisplay");
var authorD = document.querySelector("#authorDisplay");
var desriptionD = document.querySelector("#desriptionDisplay");

btn.addEventListener("click", function () {

    var myData = JSON.parse(myRequest.responseText);
    var title = myData.items[0].volumeInfo.title;
    var author = myData.items[0].volumeInfo.authors;
    var description = myData.items[0].volumeInfo.description;

    titleD.innerHTML = title;
    authorD.innerHTML = author;
    desriptionD.innerHTML = description;

})

myRequest.send();




