'use strict';

console.log('-- loading: convertToFahrenheit');


function convertToFahrenheit(arg) {

const f = (arg * 9) / 5 + 32;
  return f;

}


{
  console.log('-- testing: convertToFahrenheit ');
  debugger;

  const _1_arg = -30;
  const _1_expect = -22;
  const _1_actual = convertToFahrenheit(_1_arg);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_arg = -10;
  const _2_expect = 14;
  const _2_actual = convertToFahrenheit(_2_arg);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_arg = 0;
  const _3_expect = 32;
  const _3_actual = convertToFahrenheit(_3_arg);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_arg = 20;
  const _4_expect = 68;
  const _4_actual = convertToFahrenheit(_4_arg);
  console.assert(_4_actual === _4_expect, 'Test 4');

  const _5_arg = 30;
  const _5_expect = 86;
  const _5_actual = convertToFahrenheit(_5_arg);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_arg = -40;
  const _6_expect = -40;
  const _6_actual = convertToFahrenheit(_6_arg);
  console.assert(_6_actual === _6_expect, 'Test 6');
}


function convertToFahrenheitHandler() {
  debugger;

  // read user input
  const input = prompt(`Please enter the temperature in Celsius`);
  // core logic
  if (input === null || input === "") {
    alert('Please enter a valid number');
  } else { }
  let inputConfirmed = +input;
  if (Object.is(inputConfirmed, NaN)) { alert('Be sure you are entering a number! Try again. '); }
  else {
    const result = convertToFahrenheit(inputConfirmed);

    // display for use
    alert(`The temperature is ${result} Fahrenheit`);
    // log for developers
    console.log(result);
  }
}
