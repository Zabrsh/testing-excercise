  function sum(a, b) {
    return a + b;
  }
  function orderTotal(order) {
    return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
  }

  function capitalizeString(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1)
    return name;
  }
  
  function reverseString(someString) {
    return someString
     .split('')
     .reverse()
     .join('')

  }

  const calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b;
    },
    multiply: function(a,b) {
      return a * b;
    },
    divide: function(a,b) {
      return a / b;
    }
  }

  function caesorCipher(key,str) {
    const arr = Array.from(Array(26).keys());
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
  }

export {sum, orderTotal,capitalizeString, reverseString, calculator, caesorCipher}