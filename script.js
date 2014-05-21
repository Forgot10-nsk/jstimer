/*
while(1)
{
	timeout15
	alert
	timeout45
	alert
}
*/

//var delays = [15, 45];
var delays = [500, 2000];
var d = 0;
var timer;

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
	timeout1(function() { confirm('test2') });
	f1();
}

var f_del = function()
{
	timer = setTimeout(function run() {
		if(d == 1)
			d = 0;
		else
			d = 1;
		alert(d);
		timer = setTimeout(run, delays[d]);
	  }, delays[d]);

}

$(document).ready(function() 
{
	$('#btStart').on('click', function()
	{	
		f_del();
	});
	$('#btStop').on('click', function()
	{	
		clearTimeout(timer);
	});
});