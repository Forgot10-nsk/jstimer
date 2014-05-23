var timer = 0;
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
		//$('#lbInterval').text('Текущий интервал: '+(delays[mode][d]/60000.0) + ' мин.');
		$('#lbInterval').text('Текущий интервал: '+(modes[mode][d]/60000.0) + ' мин.');
		//alert(d);
		timer = setTimeout(run, modes[mode][d]);
	  }, modes[mode][d]);
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
            $('#lbTest').text(modes[mode][d]/60000.0);
	});
	$('input[name=\"timerMode\"]').on('click', function()
	{	
            mode = $("input[name=\"timerMode\"]:checked").val();//пол
	});      
});