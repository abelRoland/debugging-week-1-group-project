'use strict';

console.log('-- loading: repeatStringNumTimes');

// CORE LOGIC PHASE

function repeatStringNumTimes(str, times) { 

    if(typeof str !== "string") { throw new TypeError();}
    if(typeof times !== "number") { throw new TypeError();}

    let repeatStr = "";
    for (let i = 0; i < times; i++) {
        repeatStr += str;
    }
    return repeatStr;

}


// TESTING PHASE

{
  console.log('-- testing: repeatStringNumTimes ');
  debugger;

  const _1_arg_1 = '*';
  const _1_arg_2 = 3;
  const _1_expect = '***';
  const _1_actual = repeatStringNumTimes(_1_arg_1, _1_arg_2);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_arg_1 = 'abc';
  const _2_arg_2 = 3;
  const _2_expect = 'abcabcabc';
  const _2_actual = repeatStringNumTimes(_2_arg_1, _2_arg_2);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_arg_1 = 'abc';
  const _3_arg_2 = 4;
  const _3_expect = 'abcabcabcabc';
  const _3_actual = repeatStringNumTimes(_3_arg_1, _3_arg_2);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_arg_1 = 'abc';
  const _4_arg_2 = 1;
  const _4_expect = 'abc';
  const _4_actual = repeatStringNumTimes(_4_arg_1, _4_arg_2);
  console.assert(_4_actual === _4_expect, 'Test 4');

  const _5_arg_1 = '*';
  const _5_arg_2 = 8;
  const _5_expect = '********';
  const _5_actual = repeatStringNumTimes(_5_arg_1, _5_arg_2);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_arg_1 = 'abc';
  const _6_arg_2 = -2;
  const _6_expect = '';
  const _6_actual = repeatStringNumTimes(_6_arg_1, _6_arg_2);
  console.assert(_6_actual === _6_expect, 'Test 6');

  const _7_arg_1 = 'abc';
  const _7_arg_2 = 0;
  const _7_expect = '';
  const _7_actual = repeatStringNumTimes(_7_arg_1, _7_arg_2);
  console.assert(_7_actual === _7_expect, 'Test 7');
}

// FUNCTION HANDLER PHASE

function repeatStringNumTimesHandler() {
  debugger;

  // read user input

  const inputString = prompt("Please enter some text or characters", "Example: abc");
  let inputTimes = prompt("Please enter how many times you would like to repeat your given text or characters");
  let numbered = Number(inputTimes);

  // core logic

  const result = repeatStringNumTimes(inputString, numbered);

  // display for use

  alert(result);

  // log for developers

  console.log('-- interaction log --');
  console.log('inputString: ', typeof inputString, '\n', inputString);
  console.log('inputTimes: ', typeof inputTimes, '\n', inputTimes);
  console.log('numbered: ', typeof numbered, '\n', numbered);
  console.log('result: ', typeof result, '\n', result);
}


