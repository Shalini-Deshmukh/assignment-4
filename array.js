// 1. Minimum num in array
let arr = [55, 23, 98, 95, 21, 65, 20, 24]

let minimum = Number.POSITIVE_INFINITY;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimum) {
        minimum = arr[i];
    }
}
console.log('Minimum: ' + minimum);


// 2 reverse an array
  let myArray = [1, 2, 3, 4, 5];
  myArray.reverse();
  console.log(myArray); 


//3.find the average of an array
let marks = [90, 70, 68, 95, 68];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
const avg = sum / marks.length;
console.log(avg);


// 4 remove even numbers
let myarray = [1, 2, 3, 4, 5, 6]
let newarray=[];

for (let i = 0; i < myarray.length; i++){
    
    if(myarray[i]%2!==0)newarray.push(myarray[i]);
}
console.log(newarray);


// 5.find common elements amongst two arrys
  function getCommonItems(array1, array2) {
    var common = []; // Initialize array to contain common items
    
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j]) { // If item is present in both arrays
          common.push(array1[i]); // Push to common array
        }
      }
    }
     return common; 

  }
  var array1 = [1,4,5,6,8,9,3,16,18];
  var array2 = [1,2,3,8,9,18];
   
  // Get common items of array1, array2
  var commonItemList= getCommonItems(array1, array2); 
   
  console.log(commonItemList);
  
   
 
