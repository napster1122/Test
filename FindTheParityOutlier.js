/*
  You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
  The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
  Write a method that takes the array as an argument and returns this "outlier" N.
  
  Example
  [2, 4, 0, 100, 4, 11, 2602, 36]
  Should return: 11 (the only odd number)

  [160, 3, 1719, 19, 11, 13, -21]
  Should return: 160 (the only even number)
*/

/* My Code */
/* 
function findOutlier(integers){
    //your code here
    evenNum = [];
    oddNum = [];
    while (integers.length > 0) {
        testNum = integers.pop();
        testNum % 2 ? oddNum.push(testNum) : evenNum.push(testNum);
    }

    if (evenNum.length == 1)
        return evenNum[0];
    else
        return oddNum[0];
}
*/

/* Best Practice */
function findOutlier(integers){
    //your code here
    evenNum = integers.filter(a => a % 2 == 0);
    oddNum = integers.filter(a => a % 2 == 1);
    
    return evenNum.length == 1 ? evenNum[0] : oddNum[0]; 
}

/* Verification Test */
console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2,6,8,10,3]));
console.log(findOutlier([0,0,3,0,0]));
