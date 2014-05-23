var timer;
var delays = [
    [45000, 15000],
    [45*1000*60, 15*1000*60],
    [40*1000*60, 20*1000*60],
    [45*1000*60, 15*1000*60]
];
var mode = 0;
var d = 0;

var timerLoop = function()
{
	timer = setTimeout(function run() {
		if(d === 1)
		{
			d = 0;
			alert('Работа');
		}
		else
		{
			d = 1;
			alert('Отдых');
		}
//		$('#lbInterval').text('Текущий интервал: '+(delays[d]/1000.0) + ' сек.');
		$('#lbInterval').text('Текущий интервал: '+(delays[mode][d]/60000.0) + ' мин.');
		//alert(d);
		timer = setTimeout(run, delays[mode][d]);
	  }, delays[mode][d]);
};

$(document).ready(function() 
{
	$('#btStart').on('click', function()
	{	
            $('#btStart').attr('disabled', true);
            $('#btStop').attr('disabled', false);
            timerLoop();
	});
	$('#btStop').on('click', function()
	{	
            clearTimeout(timer);
            $('#btStart').attr('disabled', false);
            $('#btStop').attr('disabled', true);
	});
	$('#btTest').on('click', function()
	{	
            $('#lbTest').text(delays[mode][d]/60000.0);
	});
	$('input[name=\"timerMode\"]').on('click', function()
	{	
            mode = $("input[name=\"timerMode\"]:checked").val();//пол
	});      
});