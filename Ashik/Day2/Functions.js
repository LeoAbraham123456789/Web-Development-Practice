// Day 2 Functions

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();  
});


function readLine() {
    return inputString[currentLine++];
}


function factorial(n) 
{
    var m =1;
  while (n>0) {
      m = m*n;
      n--;
  }
  return m;  
}

void main()
{
    var n = readLine();
    if(n>=1 && n<=10)
    {
    console.log(factorial(n));
    }
}
