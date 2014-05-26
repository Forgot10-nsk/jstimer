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
        $('#pbInterval .progress').width('0%');
        $('#lbInterval').text(modes[mode][d+2]);
        TCR = modes[mode][d]-1;
        if($("#cbSilent").is(":not(:checked)"))
            alert(modes[mode][d+2]);
    }
    else
    {
        TCR--;
    }
    //calculate progress
    $('#pbInterval .progress').width((100-Math.floor(TCR*100.0/(modes[mode][d]-1)))+'%');
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
            $('#pbInterval .progress').width('0%');
            $('#lbSeconds').text(0);
           
            $('#btStart').attr('disabled', false);
            $('#btStop').attr('disabled', true);
            $('#btPause').attr('disabled', true);
	});
	$('input[name=\"timerMode\"]').on('click', function()
	{	
            mode = $("input[name=\"timerMode\"]:checked").val();
	});      
	$('input[name=\"beginFrom\"]').on('click', function()
	{	
            d = $("input[name=\"beginFrom\"]:checked").val();
	});      
});