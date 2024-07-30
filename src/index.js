module.exports = function toReadable (number) {
    let hundreds = (Number(number.toString().at(-3)) * 100);
    let hundred;
    switch (hundreds) {
        case 100: 
        hundred = 'one hundred';
        break;
        case 200: 
        hundred = 'two hundred';
        break;
        case 300: 
        hundred = 'three hundred';
        break;
        case 400: 
        hundred = 'four hundred';
        break;
        case 500: 
        hundred = 'five hundred';
        break;
        case 600: 
        hundred = 'six hundred';
        break;
        case 700: 
        hundred = 'seven hundred';
        break;
        case 800: 
        hundred = 'eight hundred';
        break;
        case 900: 
        hundred = 'nine hundred';
        break;
    }
    let resultFirstDigital = hundred;
    let dozens = Number(number.toString().substr(-2, 2));
    let dozen;
    switch (dozens) {
        case 10: 
        dozen = 'ten';
        break;
        case 11: 
        dozen = 'eleven';
        break;
        case 12: 
        dozen = 'twelve';
        break;
        case 13: 
        dozen = 'thirteen';
        break;
        case 14: 
        dozen = 'fourteen';
        break;
        case 15: 
        dozen = 'fifteen';
        break;
        case 16: 
        dozen = 'sixteen';
        break;
        case 17: 
        dozen = 'seventeen';
        break;
        case 18: 
        dozen = 'eighteen';
        break;
        case 19: 
        dozen = 'nineteen';
        break;
    }
    let tens = (Number(number.toString().at(-2)) * 10);
    let ten;
    switch (tens) {
        case 20: 
        ten = 'twenty';
        break;
        case 30: 
        ten = 'thirty';
        break;
        case 40: 
        ten = 'forty';
        break;
        case 50: 
        ten = 'fifty';
        break;
        case 60: 
        ten = 'sixty';
        break;
        case 70: 
        ten = 'seventy';
        break;
        case 80: 
        ten = 'eighty';
        break;
        case 90: 
        ten = 'ninety';
        break;
    }
    let resultSecondDigital = (Number(number.toString().at(-2)) == 0) ? '' : 
                              (Number(number.toString().at(-2)) == 1) ? dozen :
                               ten; 
    let units = Number(number.toString().at(-1)); 
    let unit;
    switch (units) {
        case 1: 
        unit = 'one';
        break;
        case 2: 
        unit = 'two';
        break;
        case 3: 
        unit = 'three';
        break;
        case 4: 
        unit = 'four';
        break;
        case 5: 
        unit = 'five';
        break;
        case 6: 
        unit = 'six';
        break;
        case 7: 
        unit = 'seven';
        break;
        case 8: 
        unit = 'eight';
        break;
        case 9: 
        unit = 'nine';
        break;
    };
    let resultThirdDigital = (Number(number.toString().at(-2)) !== 1 && Number(number.toString().at(-1)) > 0) ?  unit : '';
    let result = (number == 0) ? 'zero' : 
                 (number.toString().length == 1) ? resultThirdDigital :
                 (number.toString().length == 2) ? `${resultSecondDigital} ${resultThirdDigital}` :
                 (Number(number.toString().at(-1)) == 0) ? `${resultFirstDigital} ${resultSecondDigital}` :
                 (Number(number.toString().at(-2)) == 0) ? `${resultFirstDigital} ${resultThirdDigital}` :
                 `${resultFirstDigital} ${resultSecondDigital} ${resultThirdDigital}`;
    return result.trim();
}
