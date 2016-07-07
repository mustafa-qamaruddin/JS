/**
 * ES6 Proxy
 */
var target = {}

var handler = {
	get: function(obj, prop){
		console.info(obj, prop);
		// #2
		// if(prop in obj)
		// 	return obj[prop];
		// else
		// 	return 'IDK';
	},
	set: function(obj, prop, val){
		console.info(obj, prop, val);
		obj[prop] = val;
		return true;
	}
}

// #1
var proxy = new Proxy(target, handler);

proxy.foo = 'zoo';

console.log(proxy.foo);
console.log(proxy.baz);
console.log(proxy.boo.tau);

// #3
// var {proxy, revoke} = Proxy.revocable(target, handler);

// proxy.do = function(){
// 	alert('Hello!');
// };
// proxy.do();
// debugger;
// revoke();
// proxy.do();