/* Bonfire: Sum All Numbers in a Range
Difficulty: 2/5

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between
them.

The lowest number will not always come first.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }

  return (temp);
}

sumAll([1, 4]);
