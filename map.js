/**
 *	ES6 Map
 */

// #1
// var dictionary = new Map();
// dictionary.set('Hello', 'Hola');
// dictionary.set('Bye', 'Adios');

// console.log(dictionary.get('Hello'));
// console.log(dictionary.get('Bye'));

// console.log(dictionary.has('Bye'));
// console.log(dictionary.has('Good'));

// console.log(dictionary.size);

// dictionary.delete('Hello');

// console.log(dictionary.size);

// #2
// dictionary.forEach(function(key, value){
// 	console.log(key, value);
// });

// #3
// for(let i of dictionary){
// 	console.log(i, dictionary[i]);
// }

// #4
// var obj_1 = {'foo':'bar'};

// dictionary.set('obj_1', obj_1);

// console.log(dictionary.get('obj_1'));

// obj_1 = null;

// console.log(dictionary.get('obj_1'));

/**
 * ES6 Weak Map
 */
//#1
// var wm = new WeakMap();
// var o = {};
// var v = {
// 	'name': 'Alex',
// 	'age': 35
// };
// wm.set(o, v);
// console.log(wm.get(o));
// wm.set(window, 'baz');
// console.log(wm.has(window));
// wm.delete(window);
// console.log(wm.has(window));

//#2
// o = null;
// console.log(wm);

//#3
// console.log(wm.size);
// console.log(Reflect.ownKeys(wm));
// console.log(Object.keys(wm));
// for(let i in wm)
// {
// 	console.log(wm[i]);
// }

//#4
// wm.forEach(function(key, value){
// 	console.log(key, value);
// });
