/*
while(1)
{
	timeout15
	alert
	timeout45
	alert
}
*/
var timeout1 = function(func)
{
	setTimeout(func, (1000*5));
}

var timeout15 = function(func)
{
	setTimeout(func, (1000*60*15));
}

var timeout45 = function(func)
{
	setTimeout(func, (1000*60*45));
}

var loop = function()
{
	while(1)
	{
		timeout1(function() { alert('test1') });
		timeout1(function() { alert('test2') });
		
	}
}

var f1 = function()
{
	timeout1(function() { confirm('test1') });
	f2();
}

var f2 = function()
{
	timeout1(function() { confirm('test1') });
	f1();
}

$(document).ready(function() 
{

	$('#btStart').on('click', function()
	{	
		if(alert("a1"))
			alert("a2");
	});
});