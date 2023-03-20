# Blog Notes: Insertion Sort

Insertion Sort is a function that takes an array and returns that array sorted in ascending order. Below is the pseudocode for the insertion sort:

![Pseudocode](../assets/code-challenge-26(1).PNG)

## Trace

Sample Array `[8,4,23,42,16,15]`

## Pass 1

![Pass 1](../assets/code-challenge-26(2).PNG)

In the first pass the inital array is passed into the insertion sort function.  It then declares a new sort array and sets the index 0 of the inital array equal to the index 0 of the sorted array.  It then begins the loop which calls the insert function.  This first pass of this loop passes the sorted array and index 1 of the inital array because the loop starts with i=1. The insert function then sorts the numbers into the correct order and returns the sorted array.

## Pass 2

![Pass 2](../assets/code-challenge-26(3).PNG)

The second pass has i equal to 2 because of the incrementation of the for loop.  This means when the insert function is called the sorted array and the value of index 2 of the inital array is passed. The insert function then sorts the numbers into the correct order and returns the sorted array.

## Pass 3

![Pass 3](../assets/code-challenge-26(4).PNG)

The third pass has i equal to 3 because of the incrementation of the for loop. This means when the insert function is called the sorted array and the value of index 3 of the inital array is passed. The insert function then sorts the numbers into the correct order and returns the sorted array.

## Pass 4

![Pass 4](../assets/code-challenge-26(5).PNG)

The fourth pass has i equal to 4 because of the incrementation of the for loop. This means when the insert function is called the sorted array and the value of index 4 of the inital array is passed. The insert function then sorts the numbers into the correct order and returns the sorted array.

## Pass 5

![Pass 5](../assets/code-challenge-26(6).PNG)

The fifth pass has i equal to 5 because of the incrementation of the for loop. This means when the insert function is called the sorted array and the value of index 5 of the inital array is passed. The insert function then sorts the numbers into the correct order and returns the sorted array.

## Efficiency

Since we are inserting into a new array the efficiency for time is O(n) and space is also O(n)
