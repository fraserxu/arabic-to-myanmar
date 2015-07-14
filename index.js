var NUMBERS_MY = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];

module.exports = function(numbers) {
  if (numbers === '๐')
    return 0;
  else
    return parseInt(numbers.toString().split('').map(function(d) {return NUMBERS_MY.indexOf(d)}).join(''));
}
