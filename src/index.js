module.exports = function toReadable(number) {
   const translite = {
      null: 'zero',
      a1: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      a10: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      a20: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
      u3: ['hundred']
   };
   let result = '';
   let str = number.toString().split('').reverse();

   if (number === 0) {
      result = translite.null;
   }

   if (str.length === 3) {
      let hundred = `${translite.a1[+str[2] - 1]} ${translite.u3}`;


      if (str[0] === '0' && str[1] === '0') {
         result = hundred;
      } else if (str[0] === '0' && +(str[1]) > 1) {
         result = `${hundred} ${translite.a20[+str[1] - 2]}`;
      } else if (+(str[0]) > 0 && +(str[1]) === 0) {
         result = `${hundred} ${translite.a1[+str[0] - 1]}`;
      } else if (+(str[0]) >= 0 && +(str[1]) === 1) {
         result = `${hundred} ${translite.a10[+str[0]]}`;
      } else if (+(str[0]) > 0 && +(str[1]) > 1) {
         result = `${hundred} ${translite.a20[+str[1] - 2]} ${translite.a1[+str[0] - 1]}`;
      }

   } else {
      if (number < 10 && number > 0) {
         result = translite.a1[number - 1];
      } else if (number > 9 && number < 20) {
         result = translite.a10[number - 10];
      } else if (number > 19 && number < 100) {
         if (+str[0] === 0) {
            result = translite.a20[(+str[1]) - 2];
         } else {
            result = `${translite.a20[(+str[1]) - 2]} ${translite.a1[+str[0] - 1]}`;
         }
      }
   }

   return result;
};
