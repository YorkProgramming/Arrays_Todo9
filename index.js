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