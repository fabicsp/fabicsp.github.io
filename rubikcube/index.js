'use strict';

var table = [0,0,0,1,1,1,0,0,0,0,0,0,
  0,0,0,1,1,1,0,0,0,0,0,0,
  0,0,0,1,1,1,0,0,0,0,0,0,
  2,2,2,3,3,3,4,4,4,5,5,5,
  2,2,2,3,3,3,4,4,4,5,5,5,
  2,2,2,3,3,3,4,4,4,5,5,5,
  0,0,0,6,6,6,0,0,0,0,0,0,
  0,0,0,6,6,6,0,0,0,0,0,0,
  0,0,0,6,6,6,0,0,0,0,0,0,
];

// var shuffle = function (array) {
//    var count = array.length,
//    randomnumber,
//    temp;
//    while(count) {
//    randomnumber = Math.random() * count-- | 0;
//    temp = array[count];
//    array[count] = array[randomnumber];
//    array[randomnumber] = temp
//    }
//    return array;
// }

var generatePositions = function (table){
  var replace = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6];
  // var newNumbers = shuffle(replace)
  var newNumbers = replace
  var replaceIndex = 0;
  var newTable = [];
  for(var i = 0; i < table.length; i++){
    if(table[i] !== 0){
      newTable.push(newNumbers[replaceIndex])
      replaceIndex ++;
    }
  }
  return newTable
}

var loadToInnerP = generatePositions(table)
//
// var replace = [1,1,1,1,1,1,1,1,1,
//                2,2,2,2,2,2,2,2,2,
//                3,3,3,3,3,3,3,3,3,
//                4,4,4,4,4,4,4,4,4,
//                5,5,5,5,5,5,5,5,5,
//                6,6,6,6,6,6,6,6,6
//              ];



function reloadThePage(table){
  var elementList = document.querySelectorAll('p')
  for(var i = 0; i < 54; i ++){
    elementList[i].innerHTML = loadToInnerP[i]
    // elementList[i].innerHTML = loadToInnerP[i]
    if (loadToInnerP[i] === 1){
      elementList[i].className = 'white'
    }else if (loadToInnerP[i] === 2){
      elementList[i].className = 'red'
    }else if (loadToInnerP[i] === 3){
      elementList[i].className = 'blue'
    }else if (loadToInnerP[i] === 4){
      elementList[i].className = 'orange'
    }else if (loadToInnerP[i] === 5){
      elementList[i].className = 'green'
    }else {
      elementList[i].className = 'yellow'
    }
  }
}

reloadThePage(table);

function rotate (array) {
  var newMiddleSor = []
  for(var i = 0; i < array.length; i ++){
    newMiddleSor.push(loadToInnerP[array[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < array.length; i++){
    loadToInnerP.splice(array[i], 1, newMiddleSor[i])
  }
  reloadThePage(loadToInnerP)
}

function changeMidleLineRight() {
  var middleSor = [10,13,16,19,22,25,28,31,34,37,40,43]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  reloadThePage(loadToInnerP)
}

function changeMidleLineLeft() {
  var middleSor = [43,40,37,34,31,28,25,22,19,16,13,10]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  reloadThePage(loadToInnerP)
}

function changeUppLineRight () {
  var middleSor = [9,12,15,18,21,24,27,30,33,36,39,42]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [8,5,2,6,7,8,0,3,6,2,1,0]
  rotate (array)
  reloadThePage(loadToInnerP)
}

function changeDownLineRight () {
  var middleSor = [11,14,17,20,23,26,29,32,35,38,41,44]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [45,46,47,51,48,45,53,52,51,47,50,53]
  rotate (array)
  reloadThePage(loadToInnerP)
}

function changeDownLineLeft () {
  var middleSor = [44,41,38,35,32,29,26,23,20,17,14,11]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [53,50,47,51,52,53,45,48,51,47,46,45]
  rotate (array)
  reloadThePage(loadToInnerP)
}

function changeUpperLineLeft() {
  var middleSor = [42,39,36,33,30,27,24,21,18,15,12,9]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [0,1,2,6,3,0,8,7,6,2,5,8]
  rotate(array)
  reloadThePage(loadToInnerP)
}

function upperMidleArrowUpp(){
  var middleSor = [3,4,5,12,13,14,48,49,50,32,31,30]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  reloadThePage(loadToInnerP)
}

function upperMidleArrowDown(){
  var middleSor = [30,31,32,50,49,48,14,13,12,5,4,3]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  reloadThePage(loadToInnerP)
}

function upperLeftArrowUpp(){
  var middleSor = [0,1,2,9,10,11,45,46,47,35,34,33]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [44,41,38,42,43,44,36,39,42,38,37,36]
  rotate (array)
  reloadThePage(loadToInnerP)
}

function upperRightArrowUpp(){
  var middleSor = [6,7,8,15,16,17,51,52,53,29,28,27]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [26,23,20,24,25,26,18,21,24,20,19,18]
  rotate (array)
  reloadThePage(loadToInnerP)
}

function upperRightArrowDown(){
  var middleSor = [27,28,29,53,52,51,17,16,15,8,7,6]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [18,19,20,24,21,18,26,25,24,20,23,26]
  rotate (array)
  reloadThePage(loadToInnerP)
}

function upperLeftArrowDown(){
  var middleSor = [33,34,35,47,46,45,11,10,9,2,1,0]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [36,37,38,42,39,36,44,43,42,38,41,44]
  rotate(array)
  reloadThePage(loadToInnerP)
}

function lastDRightMove(){
  var middleSor = [2,5,8,18,19,20,51,48,45,44,43,42]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [9,10,11,15,12,9,17,16,15,11,14,17]
  rotate (array)
  reloadThePage(loadToInnerP)
}

function lastDLeftMove(){
  var middleSor = [42,43,44,45,48,51,20,19,18,8,5,2]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [17,14,11,15,16,17,9,12,15,11,10,9]
  rotate (array)
  reloadThePage(loadToInnerP)
}

function lastDMidleLeftMove(){
  var middleSor = [39,40,41,46,49,52,23,22,21,7,4,1]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  reloadThePage(loadToInnerP)
}

function lastDMidleRightMove(){
  var middleSor = [1,4,7,21,22,23,52,49,46,41,40,39]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  reloadThePage(loadToInnerP)
}

function lastDUpperToRight(){
  var middleSor = [0,3,6,24,25,26,53,50,47,38,37,36]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [35,32,29,33,34,35,27,30,33,29,28,27]
  rotate(array)
  reloadThePage(loadToInnerP)
}

function lastDUpperToLeft(){
  var middleSor = [36,37,38,47,50,53,26,25,24,3,6,0]
  var newMiddleSor = []
  for(var i = 0; i < middleSor.length; i ++){
    newMiddleSor.push(loadToInnerP[middleSor[i]]);
  }
  for(var i = 0; i<3; i ++){newMiddleSor.unshift(newMiddleSor.pop())}
  // eltoljuk a sorokat 3 elemmel
  for(var i = 0; i < middleSor.length; i++){
    loadToInnerP.splice(middleSor[i], 1, newMiddleSor[i])
  }
  var array = [27,28,29,33,30,27,35,34,33,29,32,35]
  rotate(array)
  reloadThePage(loadToInnerP)
}

function mixIt (){
  var randomMix = Math.floor(Math.random() * 400) + 200
  console.log(randomMix);
  for (var i = 0; i < randomMix; i++){
    if(i % 7 === 0){
      lastDUpperToLeft()
      upperLeftArrowDown()
    }
    else if (i % 2 === 0) {
      upperRightArrowUpp()
    }else{upperMidleArrowUpp()}
    }
}
