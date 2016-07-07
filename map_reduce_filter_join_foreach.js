/**
 * ES6
 */

var my_array = [0, 1, 1, 2, 3, 5, 8];


/**
 * Map
 */
var result = my_array.map(function(item){
	return item * 2;
});
console.log(result);

/**
 * Reduce
 */
var result = my_array.reduce(function(accumulator, item){
		return accumulator += item;
});
console.log(result);

/**
 * Filter
 */
var result = my_array.filter(function(item){
	if(item % 2 == 0)
		return item;
});
console.log(result);

/**
 * Join
 */
var result = my_array.join(", ");
console.log(result);

/**
 * forEach
 */
my_array.forEach(function(item){
	document.writeln(item);
});

/**
 * for of
 */
for(let i of my_array)
{
	console.log(i, my_array[i]);
}