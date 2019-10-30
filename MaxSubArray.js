/*  Description : 

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

/*
const mySequence = function(Myarr) {
    var retMax = 0;
    arrClone = Myarr.slice(0);
    for (var i = 0 ; i < Myarr.length ; i++) {
        if (arrClone.reduce((a,b)=>a+b, 0) > retMax)
            retMax = arrClone.reduce((a,b)=>a+b, 0);
        arrClone.pop();
    }
    return retMax;
}
var maxSequence = function(arr){
    // ...
    if (arr.length) {
        var retMax = 0;
        myClone = arr.slice(0);
        for (var i = 0 ; i < arr.length ; i++) {
            //console.log('Array: '+myClone)
            ret = mySequence(myClone);
            //console.log('Array: ' + myClone + ', SUM: ' + ret)
            if (ret > retMax) {
                retMax = ret;
            }
            myClone = arr.slice(i+1)
        }
        return retMax;
    } else {
        return 0;
    }
}
*/

// Best Practice 1
//const maxSequence = (a,sum=0) => a.reduce((max,v) => Math.max(sum = Math.max(sum + v, 0), max), 0);

// Best Practice 2
var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
      console.log(`Loop: ${i}, Sum: ${sum}, Min: ${min}, Ans: ${ans}`)
    }
    return ans;
  }

// Test Code
console.log(maxSequence([]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
