// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  
  let amount = 0;
  let power = 0;

  if (str[1] === "b"){
    for (let i = str.length - 1; i > 1; i--){
      let number = str[i];
      amount += 2 ** power * number;

      power++


    }

    return amount;

  } 

  if (str[1] === "x"){
    for (let i = str.length - 1; i > 1; i--){
      let number = str[i];
      let letters = "abcdef"
      if (letters.includes(number)){
        number = letters.indexOf(number) + 10;
      }
      

      amount += 16 ** power * number;

      power++


    }

    return amount;



  }
  


}



/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
