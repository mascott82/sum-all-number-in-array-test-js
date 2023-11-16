const sumItems = function(array) {

  let result = 0;
  // Sum all the numbers in the array
  array.forEach(element => {
    if (Array.isArray(element)) {
      result += sumItems(element);
    } else {
      result += element;
    }
  });

  return result;
};

module.exports = sumItems;