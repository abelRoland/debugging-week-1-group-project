'use strict';

console.log('-- loading: findLongestWordLength');

function findLongestWordLength(str) {
	let strSplit = str.split(' ');
	var longestWord = 0;

	for (var i = 0; i < strSplit.length; i++) {
		if (strSplit[i].length > longestWord) {
			longestWord = strSplit[i].length;
		}
	}

	return longestWord;
}

{
	console.log('-- testing: findLongestWordLength ');
	debugger;

	const _1_arg = 'The quick brown fox jumped over the lazy dog';
	const _1_expect = 6;
	const _1_actual = findLongestWordLength(_1_arg);
	console.assert(_1_actual === _1_expect, 'Test 1');

	const _2_arg = 'May the force be with you';
	const _2_expect = 5;
	const _2_actual = findLongestWordLength(_2_arg);
	console.assert(_2_actual === _2_expect, 'Test 2');

	const _3_arg = 'Google do a barrel roll';
	const _3_expect = 6;
	const _3_actual = findLongestWordLength(_3_arg);
	console.assert(_3_actual === _3_expect, 'Test 3');

	const _4_arg = 'What is the average airspeed velocity of an unladen swallow';
	const _4_expect = 8;
	const _4_actual = findLongestWordLength(_4_arg);
	console.assert(_4_actual === _4_expect, 'Test 4');

	const _5_arg = 'What if we try a super-long word such as otorhinolaryngology';
	const _5_expect = 19;
	const _5_actual = findLongestWordLength(_5_arg);
	console.assert(_5_actual === _5_expect, 'Test 5');
}

function findLongestWordLengthHandler() {
	debugger;

	debugger;

	// read user input
	const sentence = prompt("Please enter some text");
	const str = String(sentence);
  
	// core logic
	const result = findLongestWordLength(sentence);
  
	// display for use
	alert(`The longest word has ${result} letters`);

	// log for developers
	console.log('Input of quote or sentence : ', sentence, '\n ', `type : ${typeof sentence}`);
	console.log('Result of the prediction: ', result, '\n ', `type : ${typeof result}`);
}
