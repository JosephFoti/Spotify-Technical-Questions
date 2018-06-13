/*Question 3 -- changePossibilities(amount,amount): Your quirky boss collects
rare, old coins. They found out you're a programmer and asked you to solve
something they've been wondering for a long time.

Write a function that, given an amount of money and an array of coin
denominations, computes the number of ways to make the amount of money with
coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your
program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢*/

/* To solve this problem we must write a recursive algorithm to loop through
all possible itterations of coin combinations that will equal the sought after
value */


function changePossibilities(a,d) {

  // create array container to get all of the possible permutations which
  // equal 'a'
  var correctCombos = [];

  // loop through all of the d values
  for (let i=0;i<d.length;i++) {
    // create the start of a permutation array for each coin value
    var temp = [d[i]];

    // create recursive search function, which calls itself untill all
    // possibilties are explored
    var recurse = temp => {
      // if the sum of the permutation is greater than the total, return
      if (temp.reduce((x,y)=>x+y) > a) {
        return
      } else if (temp.reduce((x,y)=>x+y) === a) {
        // else if the sum is equal to the total, push that value as a string to our
        // correct combos array
        return correctCombos.push(temp.toString());
      }
      // otherwise loop through another level of possibilties, each time calling
      // a new permutation of the coins into the function
      for (var j = 0; j < d.length; j++) {
        // add a new value to our temporary storage "temp", run the function, and then remove it.
        // this keeps the permutation on the same level untill all possibilties
        // have been run
        temp.push(d[j]);
        recurse(temp);
        temp.pop();
      }
    }

    // fire the recursive function
    recurse(temp);

  }


  // Then, we need to separate the unique values from the repeats because for
  // this problem 1+1+2 === 2+1+1 ...

  var uniques = [];

  // map through and sort each element so that we can test if two strings in the
  // the array are the same.
  var x = correctCombos.map(x=>{
    x = x.split(',').sort().join(',');
    if (!uniques.includes(x)) {
      uniques.push(x);
    }
  });

  console.log(uniques);
  console.log(uniques.length);

  return uniques.length;

}

changePossibilities(10,[2,3,4]);
