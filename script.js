var timer = 0;
var mode = 0;
var d = 1;
var TCR = 0;
var seconds = 0;

var timerINT = function()
{
    if(TCR === 0)
    {
        if(d === 1)
        {
                d = 0;
                $('#pbInterval .progress').removeClass('green'); 
                $('#pbInterval .progress').addClass('red'); 
                //alert('d=0');
        }
        else
        {
                d = 1;
                $('#pbInterval .progress').removeClass('red');
                $('#pbInterval .progress').addClass('green'); 
                //alert('d=1');
        }
        alert(modes[mode][d+2]);
        
        TCR = modes[mode][d]-1;
    }
    else
    {
        TCR--;
    }
    $('#lbSeconds').text(++seconds);
};

$(document).ready(function() 
{
	$('#btStart').on('click', function()
	{	
            $('#btStart').attr('disabled', true);
            $('#btStop').attr('disabled', false);
            $('#btPause').attr('disabled', false);
            timer = setInterval(timerINT, 1000);
	});
	$('#btPause').on('click', function()
	{	
            clearTimeout(timer);
            $('#btStart').attr('disabled', false);
            $('#btStop').attr('disabled', true);
            $('#btPause').attr('disabled', true);
	});
	$('#btStop').on('click', function()
	{	
            clearTimeout(timer);
            TCR = 0;
            d = 1;
            seconds = 0;            
            $('#lbSeconds').text(0);
           
            $('#btStart').attr('disabled', false);
            $('#btStop').attr('disabled', true);
            $('#btPause').attr('disabled', true);
	});
	$('#btTest').on('click', function()
	{	
            //$('#lbTest').text(modes[mode][d]/60.0);
            //$('#pbInterval .progress').removeClass('red'); 
            //$('#pbInterval .progress').addClass('green'); 
            $('#pbInterval .progress').toggleClass('red'); 
            $('#pbInterval .progress').toggleClass('green'); 

	});
	$('input[name=\"timerMode\"]').on('click', function()
	{	
            mode = $("input[name=\"timerMode\"]:checked").val();
	});      
});