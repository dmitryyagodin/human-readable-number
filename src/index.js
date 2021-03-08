module.exports = function toReadable(number) {
  const ones = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
  }
  const tens = {
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
  }


  if (number === 0) {
    return 'zero'
  }

  let str = String(number).padStart(3, 0)

  let hundreds = str[0] !== '0' && ones[str[0]] + ' hundred';
  let dozens;
  let digits;

  if (tens.hasOwnProperty(str.slice(1))) {
    dozens = tens[str.slice(1)];
    digits = false;
  } else if (tens.hasOwnProperty(str[1])) {
    dozens = tens[str[1]]
    digits = ones[str[2]]
  }

  

  if (str[1] === '0') {
    digits = ones.hasOwnProperty(str.slice(2)) && ones[str.slice(2)];
    dozens = false;
  } else if (str[1] === '1') {
    digits = false;
  } else if (str[2] === '0') {
    digits = false;
  }
  
  return [hundreds, dozens, digits].filter(item => item !== false).join(' ');
}

// console.log("999:", toReadable(999))
// console.log("0:", toReadable(0))
// console.log("5:", toReadable(5))
// console.log("120:", toReadable(120))
// console.log("516:", toReadable(516))
// console.log("307:", toReadable(307))
// console.log("300:", toReadable(300))
// console.log("945:", toReadable(945))