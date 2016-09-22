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

var shuffle = function (array) {
   var count = array.length,
   randomnumber,
   temp;
   while(count) {
   randomnumber = Math.random() * count-- | 0;
   temp = array[count];
   array[count] = array[randomnumber];
   array[randomnumber] = temp
   }
   return array;
}

var generatePositions = function (table){
  var replace = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6];
  var newNumbers = shuffle(replace)
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

function reloadThePage(table){
  var elementList = document.querySelectorAll('p')
  for(var i = 0; i < 54; i ++){
    elementList[i].innerHTML = loadToInnerP[i]
    if (loadToInnerP[i] === 1){
      elementList[i].className = 'red'
    }else if (loadToInnerP[i] === 2){
      elementList[i].className = 'blue'
    }else if (loadToInnerP[i] === 3){
      elementList[i].className = 'green'
    }else if (loadToInnerP[i] === 4){
      elementList[i].className = 'orange'
    }else if (loadToInnerP[i] === 5){
      elementList[i].className = 'yellow'
    }else {
      elementList[i].className = 'white'
    }
  }
}
reloadThePage(table);


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
  upperRotateRight ()
  reloadThePage(loadToInnerP)
}

function upperRotateLeft () {
  var middleSor = [0,1,2,6,3,0,8,7,6,2,5,8]
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

function upperRotateRight () {
  var middleSor = [8,5,2,6,7,8,0,3,6,2,1,0]
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
  upperRotateLeft()
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
  var middleSor = [0,1,2,9,10,11,45,46,47,29,28,27]
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
function upperLeftArrowDown(){
  var middleSor = [27,28,29,47,46,45,11,10,9,2,1,0]
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

function upperRightArrowUpp(){
  var middleSor = [6,7,8,15,16,17,51,52,53,35,34,33]
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
function upperRightArrowDown(){
  var middleSor = [33,34,35,53,52,51,17,16,15,8,7,6]
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
