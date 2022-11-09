function ageSort(users) {
  // Your code here
  return users.sort((a,b) => a.age - b.age);
}




function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    console.log("Comparing: " + "a: " + a + " b: " + b)
    
    return a-b;
  })
}





function validAnagrams(s, t) {
  // Your code here
  return s.split('').sort().join('') === t.split('').sort().join('')

}





function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    let a2 = String(a).length;
    let b2 = String(b).length;
    if (a2 === b2){
      return a-b;
    } else {
      return b2-a2;
    }
  })
}





function frequencySort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    let table = {}
    let freqA = freq(arr, a, table);
    let freqB = freq(arr, b, table);

    if (freqA === freqB) return b - a //desc
    else return freqA - freqB // asc
  })
}


function freq(arr, n, table) {
  
  if (table[n] === undefined) { // no data, calc
    table[n] = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) table[n]++;
    }
  }
  return table[n];
}

console.log("---------------------")
console.log(frequencySort([1,11,12,1,13,1,14,15,15,13]))




module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];