/**
 * ES6 Reflect
 */
 //#1
 // var r = new Reflect();
 //=>Uncaught TypeError:
 //		Reflect is not a constructor

 //#2
 // var target = {};
 // console.log(Reflect.get(target, 'foo'));
 // Reflect.set(target, 'foo', 'bar');
 // console.log(Reflect.get(target, 'foo'));

 //#3
// var target = {};
// var handler = {
// 	get: function(_target, _prop)
// 	{
// 		console.info('Proxy & Reflect');
// 		return _target[_prop];
// 	}
// }
// var p = new Proxy(target, handler);
// Reflect.get(p, 'foo');

//#4
// var target = {};
// var handler = {
// 	get: function(...args)
// 		{
// 			console.info('Reflect inside Proxy Traps');
// 			Reflect.get(...args)
// 		}
// };
// var p = new Proxy(target, handler);
// console.log(p.foo);

//#5
// var target = {};
// var handler = {
// 	get: Reflect.get
// };
// var p = new Proxy(target, handler);
// console.log(p.foo);

//#6
// var o = {
// 	'foo':'bar'
// };

// delete o.foo;
// console.log(o);

// Reflect.deleteProperty(o, 'foo');
// console.log(o);