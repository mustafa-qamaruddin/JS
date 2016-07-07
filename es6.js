/**
 *	ES6
 */

/**
 * Constants
 */
 // const NAMESPACE = 'NILECODE';
 // const BUNDLE = {
 // 	VERSION: '1.0.0',
 // 	RELEASE: 'Beta',
 // 	AUTHOR: 'John Resig'
 // };

 // BUNDLE.VERSION = '3.1.8';
 // NAMESPACE = 'MEUNITY';

/**
 * LET
 */

 // #1
// function testScope(){
// 	var x = 999;

// 	for (var x = 1; x < 10; x++)
// 	{
// 		console.log(x);
// 	}

// 	console.log(x);
// }

// testScope();

// #2
// function testScope(){
// 	var x = 999;

// 	(function(){
// 		for (var x = 1; x < 10; x++)
// 		{
// 			console.log(x);
// 		}
// 	})();

// 	console.log(x);
// }

// testScope();

// #3
// function testScope(){
// 	var x = 999;
	
// 	for (let x = 1; x < 10; x++)
// 	{
// 		console.log(x);
// 	}

// 	console.log(x);
// }

// testScope();

// #4
// function testScope(){
// 	let x = 1;
// 	let x = 2;
// }

// testScope();

/**
 *	Default Parameter
 */

// function sayHello(name = 'Douglas Crockford')
// {
// 	alert(`Hello, ${name}`);
// }


/**
 * Array Parameter Old Way
 */
// function simpleTestArray(params)
// {
// 	console.info('Array Object');
// 	console.log(params);
// }

// function oldTestArray(param_1, param_2, param_3, param_4)
// {
// 	console.info('Separate Parameters');
// 	console.log(param_1, param_2, param_3, param_4);
// }

/**
 * Array Parameter New ES6 Way
 */
//  function testArray(...args)
//  {
//  	console.info('ES6 Parameters');
//  	console.log(args);
//  }

// var args = ['Alex', 'Marty', 'Gloria', 'Melman'];
// testArray(args);
// debugger;
// oldTestArray(args[0], args[1], args[2], args[3]);
// debugger;
// simpleTestArray(args);
// debugger;
// testArray(['North', 'East', 'South', 'West']);