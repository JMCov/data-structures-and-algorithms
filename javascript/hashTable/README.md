# Hash Tables

Implement a Hashtable Class with the following methods:

- set
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.
- get
  - Arguments: key
  - Returns: Value associated with that key in the table
- has
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.
- keys
  - Returns: Collection of keys
- hash
  - Arguments: key
  - Returns: Index in the collection for that key

- Write a function called repeated word that finds the first word to occur more than once in a string

Challenge 33

- Write a function called left join
- Arguments: two hash maps
  - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
  - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

NOTES:

- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
- If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Approach & Efficiency

We looked through the demo and used ChatGPT to help understand certain aspects of hash tables.

BigO for time is O(1)
BigO for space is O(n)

Hash map Function

BigO for time is O(n)
BigO for space is O(n)

## Solution

node index.js

For tests: npm run test

## White Board

![Hash Map](../assets/code-challenge-31.PNG)
![Left Join](../assets/code-challenge-33.png)

## Collaborators

- Adrienne Frey
- Joe Davitt
- John Chavez
- Tyler Bennett
- Martin Hansen
- Jeremy Cleland
