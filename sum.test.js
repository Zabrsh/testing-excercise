import {orderTotal,sum,capitalizeString,reverseString,calculator,caesorCipher} from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Quantity', () =>
  expect(orderTotal({
    items: [
      { 'name': 'Dragon candy', price: 2, quantity: 3 }
    ]
  })).toBe(6))

test('No quantity specified', () =>
  expect(orderTotal({
    items: [
      { 'name': 'Dragon candy', price: 3 }
    ]
  })).toBe(3)
)

test('Happy path (Example 1)', () =>
  expect(orderTotal({
    items: [
      { name: 'Dragon food', price: 8, quantity: 1 },
      { name: 'Dragon cage (small)',  price: 800, quantity: 1 }
    ]
  })).toBe(808)
)
test('Happy path (Example 2)', () =>
  expect(orderTotal({
    items: [
      { name: 'Dragon collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy',  price: 40, quantity: 1 }
    ]
  })).toBe(60))

  test('Capitalize String',()=>{
    expect(capitalizeString("abrham")).toBe("Abrham")
  })

  test("Reverse String",()=>{
    expect(reverseString("abrham")).toBe("mahrba")
  })

  test("Calculator Object",()=>{
    expect(calculator.add(2,3)).toBe(5);
    expect(calculator.subtract(2,3)).toBe(-1);
    expect(calculator.multiply(2,3)).toBe(6);
    expect(calculator.divide(6,3)).toBe(2);
  })

  test("caesorCipher", ()=> {
    expect(caesorCipher(1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("ZYXWVUTSRQPONMLKJIHGFEDCBA")
  })