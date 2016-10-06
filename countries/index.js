'use strict';

var url = 'https://api.myjson.com/bins/2chzc'
document.getElementById('points').innerHTML = localStorage.getItem(1)

function checkTheLocal(){
  var input = document.querySelector(".inputString").value
  var theNumberID = localStorage.length + 2
  input = input.replace(/ /g, '');
  input = input.toLowerCase()
  for(var key in localStorage) {
    var value = localStorage[key];
    if (input === value){
      alert("Hey Its in my storage")
      return
    }
  }
  getCountries(input, theNumberID)
}

function addPoints(x){
  if (localStorage.length === 1){
    localStorage.setItem(1, parseInt(x))
  }else{localStorage.setItem(1, parseInt(localStorage.getItem(1)) + parseInt(x))}
}

function letter_counter(s){
  var letters = {}
  s.split('').forEach(function(e){
    if (!(e in letters)){
      letters[e] = 1
    }else{
      letters[e] ++
    }
  })
  var size = 0, key;
    for (key in letters) {
        if (letters.hasOwnProperty(key)) size++;
    }
    return size;
}

function getCountries(input, theNumberID) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    var response = JSON.parse(xhr.response);
    response.forEach(function(e){
      var e = e.name
      e = e.replace(/ /g, '');
      e = e.toLowerCase()
      if (input === e){
        localStorage.setItem(theNumberID, input)
        var pointToGet = letter_counter(input)
        addPoints(pointToGet)
        alert("Gratulation, you get " + pointToGet + " point")
        document.getElementById('points').innerHTML = localStorage.getItem(1)
      }
    });
    alert ("Hey you! Try some another country! :)");
    }
xhr.send();
};
