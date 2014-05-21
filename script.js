var delays = [500, 2000];
//var delays = [15*1000*60, 45*1000*60];
var d = 0;
var timer;

var timerLoop = function()
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
		timerLoop();
	});
	$('#btStop').on('click', function()
	{	
		clearTimeout(timer);
	});
});