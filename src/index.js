const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('**********');
    let decryptedValue = '';

    for (let binaryCode of arr) {
        let code = binaryCode.split('');
        let word = '';

        for (let i = 0; i < binaryCode.length / 10; i++) {
            let tenDigitsCode = code.slice(-10).join('');

            let letter = '';

            for (let j = 0; j < 10; j += 2) {
                if (tenDigitsCode.slice(j, j + 2) === '10') letter += '.';
                if (tenDigitsCode.slice(j, j + 2) === '11') letter += '-';
            }

            code.splice(-10, 10);

            word = `${MORSE_TABLE[letter]}${word}`;
        }

        decryptedValue += word + ' ';
    }

    return decryptedValue.trim();
   }

module.exports = {
    decode
}