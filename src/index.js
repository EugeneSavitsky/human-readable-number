module.exports = function toReadable (number) { 
    if (number === 0) return 'zero'
    if (number < 100) return twoDigit(number).trim()
    else              return moreThanTwoDigit(number).trim()
}
    const fromOnetoNineteen = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const dozens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    

    function twoDigit(number) {
        let arrNumber = parseInt(number).toString().split("");
        if (number % 100 < 20 ) return  fromOnetoNineteen[number % 100];
        else                    return `${dozens[arrNumber[0]]} ${fromOnetoNineteen[arrNumber[1]]}`;
      
      }
        
    function moreThanTwoDigit(number) {
        let arrNumber1 = parseInt(number).toString().split("");
        if (number % 100 < 20 ) return `${fromOnetoNineteen[arrNumber1[0]]} hundred ${fromOnetoNineteen[number % 100]}`;
        else                    return `${fromOnetoNineteen[arrNumber1[0]]} hundred ${dozens[arrNumber1[1]]} ${fromOnetoNineteen[arrNumber1[2]]}`;
    }