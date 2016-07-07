/**
 * ES6 Template Strings
 */
 var some_html = `
 <div>
 	<ul>
 		<li>One</li>
 		<li>Two</li>
 		<li>Three</li>
 		<li>Four</li>
 	</ul>
 </div>
 `;

 document.write(some_html);


var my_array = ['One', 'Two', 'Three', 'Four'];

var list_body = my_array.map(function(item){
	return `<li>${item}</li>`;
}).join('');

var list_wrapper = `
	<div>
		<ul>
			${list_body}
		</ul>
	</div>
`;

document.write(list_wrapper);

/**
 * ES6 Tagged Templates
 */

 function myFunction(args, ...params)
 {
 	var ret = '';
 	var regex_1 = /\[shortcode text="/gi;
 	var regex_2 = /\/\]/gi
 	for (var i in args)
 	{
 		if(regex_1.test(args[i]))
 		{
 			ret += args[i].replace(regex_1, '<blockquote>');
 		}
 		else if(regex_2.test(args[i]))
 		{
 			ret += args[i].replace(regex_2, '</blockquote>');
 		}
 		else
 		{
 			ret += args[i];
 		}
 		if(params[i])
 			ret += params[i];
 	}
 	return ret;
 }

 var name = 'Ahmed';
 var email = 'ahmed@gmail.com';
 var mobile = '011-2764-09 73';

 var result = myFunction`[shortcode text="My name is ${name} \
 	and my e-mail address is ${email} \
 	and you can call me on ${mobile} /]
 	`;
 document.write(result);