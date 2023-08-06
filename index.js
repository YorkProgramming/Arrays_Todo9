//1.
//Smarter Sum

/* Use time-space tradeoff to accelerate average running time for iSigma(num) 
that returns sum of integers from 1 to num. 

Recall iSigma(1)=1, iSigma(2)=3, iSigma(3)=6, iSigma(4)=10.*/

function iSigma(num){
    var sum = 0;

    for(var i = 0; i <= num; i++){
        sum += i;
    }

    return sum;
}

//Example:
console.log(iSigma(4));

//We set a sum variable to 0.
//We loop through the number.
//We add the number to the sum.
//We return the sum.

//#########################################################################################################

//2.
//Median of Sorted Arrays

/* Given two arrays that are sorted but not necessarily the same length, 
find the median value. Given ([1,5,9], [1,2,3,4,5,6]), 
return 4. If the number of values is even, 
return the average of the two middle values. 
Given ([1,5,9], [1,2,3,4,5]), return 3.5.

Second: accept three arrays instead of two. */

function medianOfSortedArrays(arr1, arr2){
    var arr3 = [];
    var median = 0;

    for(var i = 0; i < arr1.length; i++){
        arr3.push(arr1[i]);
    }

    for(var i = 0; i < arr2.length; i++){
        arr3.push(arr2[i]);
    }

    arr3.sort(function(a, b){return a-b});

    if(arr3.length % 2 == 0){
        median = (arr3[arr3.length/2] + arr3[(arr3.length/2)-1])/2;
    } else {
        median = arr3[Math.floor(arr3.length/2)];
    }

    return median;
}

//Example:
console.log(medianOfSortedArrays([1,5,9], [1,2,3,4,5,6]));

//We create an empty array.
//We create a median variable.
//We loop through the first array and push the values into the empty array.
//We loop through the second array and push the values into the empty array.
//We sort the array.
//We check if the array length is even.
//If it is, we set the median to the average of the two middle values.
//If it is not, we set the median to the middle value.
//We return the median.

//#########################################################################################################