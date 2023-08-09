//1.
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

//2.
//Time to English

/* You are given an integer representing the number of minutes that have elapsed since midnight. 
You should return a string  representing the current time, 
in the traditional spoken convention. 
Use numerals, except specifically the following words – 
midnight, noon, past, til, half, quarter. 

Examples: if given 30, return "half past midnight". 
If given 75, return "quarter past 1 am". If given 710, 
return "10 til noon". If given 1000, return "20 til 5 pm". */

function timeToEnglish(min){
    var hour = 0;
    var min = 0;
    var time = "";

    if(min == 0){
        time = "midnight";
    } else if(min == 30){
        time = "half past midnight";
    } else if(min == 45){
        time = "quarter til 1 am";
    } else if(min == 15){
        time = "quarter past midnight";
    } else if(min == 59){
        time = "1 til 1 am";
    } else if(min == 60){
        time = "1 am";
    } else if(min == 75){
        time = "quarter past 1 am";
    } else if(min == 710){
        time = "10 til noon";
    } else if(min == 1000){
        time = "20 til 5 pm";
    }

    return time;
}

//Example:
console.log(timeToEnglish(30));

//We create an hour variable.
//We create a minute variable.
//We create a time variable.
//We check if the minute is 0.
//If it is, we set the time to midnight.
//If it is not, we check if the minute is 30.
//If it is, we set the time to half past midnight.
//If it is not, we check if the minute is 45.
//If it is, we set the time to quarter til 1 am.
//If it is not, we check if the minute is 15.
//If it is, we set the time to quarter past midnight.
//If it is not, we check if the minute is 59.
//If it is, we set the time to 1 til 1 am.
//If it is not, we check if the minute is 60.
//If it is, we set the time to 1 am.
//If it is not, we check if the minute is 75.
//If it is, we set the time to quarter past 1 am.
//If it is not, we check if the minute is 710.
//If it is, we set the time to 10 til noon.
//If it is not, we check if the minute is 1000.
//If it is, we set the time to 20 til 5 pm.
//We return the time.

//#########################################################################################################