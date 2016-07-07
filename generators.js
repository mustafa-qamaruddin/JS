/**
 * ES6 Generators
 */

function loadFile()
{
	console.log('I am loading file');
	return 'file content';
}

function* asyncStuff()
{
	var contents;
	yield contents = loadFile();
	yield console.log(contents);
}

var handler = asyncStuff();
handler.next();
//handler.next();