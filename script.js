//var delays = [500, 2000];
var delays = [15*1000*60, 45*1000*60];
var d = 1;
var timer;

var timerLoop = function()
{
	timer = setTimeout(function run() {
		if(d == 1)
		{
			d = 0;
			alert('Отдых');
		}
		else
		{
			d = 1;
			alert('Работа');
		}
//		$('#lbInterval').text('Текущий интервал: '+(delays[d]/1000.0) + ' сек.');
		$('#lbInterval').text('Текущий интервал: '+(delays[d]/60000.0) + ' мин.');
		//alert(d);
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
	$('#btTest').on('click', function()
	{	
		$('#lbTest').text(delays[d]/60000.0);
	});
});