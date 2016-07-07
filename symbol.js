/**
 *	ES6 Meta Programming
 */

/**
 * Symbol
 */
 var obj = {};
 obj['name'] = 'Alex';
 obj['age'] = 29;
 obj[Symbol('rank')] = '%%^&*$120LX%12';

 // #1
 // for (var prop in obj)
 // {
 // 	console.log(prop, obj[prop]);
 // }

 // #2
 // console.log(Symbol('rank') == Symbol('rank'));
 // console.log(Symbol('rank') === Symbol('rank'));

 // #3
 // console.log(Symbol('rank').toString() == 'Symbol(rank)');
 // console.log(Symbol('rank').toString() === 'Symbol(rank)');

 // #4
 // console.log(obj.propertyIsEnumerable('name'));
 // console.log(obj.propertyIsEnumerable(Symbol('rank')));

 // #5
 // console.log(Object.getOwnPropertyNames(obj));
 // console.log(Object.getOwnPropertySymbols(obj));

 // #6
 // var symbol_holder = Symbol('bar');
 // obj.symbol_holder = 'some hidden meta value';

 // var sym_global = Symbol.for('obj');
 // var sym_local = Symbol('meta');
 
 // console.log(Symbol.keyFor(sym_global));
 // console.log(Symbol.keyFor(sym_local));
 // console.log(Symbol.keyFor(symbol_holder));

 // #7
  // class customType
  // {
  // 	static [Symbol.hasInstance](the_instance) {
  // 		console.info('Overridden instanceOf');
  // 		debugger;
  // 		return true;
  // 	}
  // }

  // var obj_custom_type = new customType();
  // if(obj_custom_type instanceof customType)
  // {
  // 		console.info('I am always right!');
  // }
