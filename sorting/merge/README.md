# Blog Notes: Merge Sort

1. The mergeSort function takes an array arr as input and calculates its length n.

2. If n is greater than 1, the function calculates the middle index mid of the array using Math.floor(n / 2).

3. The function then splits the input array arr into two subarrays left and right using the slice method. The left array contains elements from index 0 to mid-1, and the right array contains elements from index mid to n-1.

4. The mergeSort function is recursively called on both the left and right subarrays.

5. Once the recursion is complete, the merge function is called with the left, right, and arr arrays as input.

6. The merge function iterates over the left and right arrays, comparing the values of the elements at each index and merging them into a single sorted array arr. The i, j, and k variables are used to keep track of the current index of each array being compared and the merged array being constructed.

7. After the while loop is completed, the merge function checks if there are any remaining elements in either the left or right array and appends them to the end of the arr array.

8. The mergeSort function returns the sorted array arr.
