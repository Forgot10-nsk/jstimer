var timer = 0;
//var mode = 0;
//var d = 1;
var TCR = 0;
var ticks = 0;
var seconds = 0;
var pr = 0;

var timerINT = function()
{
    if(TCR === 0)
    {
        if(d === 1)
        {
            d = 0;
            $('#pbInterval .progress').removeClass('green'); 
            $('#pbInterval .progress').addClass('red'); 
        }
        else
        {
            d = 1;
            $('#pbInterval .progress').removeClass('red');
            $('#pbInterval .progress').addClass('green'); 
        }
        $('#pbInterval .progress').width('0%');
        $('#lbInterval').text(modes[mode][d+2]);
        TCR = modes[mode][d]*timerFreq-1;
        if($("#cbSilent").is(":not(:checked)"))
            alert(modes[mode][d+2]);
        
        
        //modes[mode][d+2]
    }
    else
    {
        TCR--;
    }
    //calculate progress
    pr = (100-Math.floor(TCR*100.0/(modes[mode][d]*timerFreq-1)))+'%';
    $('.progressLabel').text(pr);
    $('#pbInterval .progress').width(pr);
    
    ticks++;
    if(ticks % 4 == 0)
        $('#lbSeconds').text(++seconds);
};

$(document).ready(function() 
{
	$('#btStart').on('click', function()
	{	
            $('#btStart').attr('disabled', true);
            $('#btStop').attr('disabled', false);
            $('#btPause').attr('disabled', false);
            timer = setInterval(timerINT, 1000/timerFreq);
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
            $('.progressLabel').text("0%");
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
	$('#btSave').on('click', function()
	{
            /*
            csv:
                silent
                beginFrom
                timerMode
                mode0
                mode1
                ...
            */           
            var fCSV = "";
            fCSV += Number($("#cbSilent").is(":checked"));
            fCSV += "\n";
            fCSV += $("input[name=\"beginFrom\"]:checked").val();
            fCSV += "\n";
            fCSV += $("input[name=\"timerMode\"]:checked").val();
            fCSV += "\n";
            fCSV += timerFreq;
            fCSV += "\n";
            for (var i = 0; i < modes.length; i++) 
            {
                for(var j = 0; j < modes[i].length-1; j++)
                {
                    fCSV +=modes[i][j];
                    fCSV += ",";                    
                }
                fCSV +=modes[i][j];
                fCSV += "\n";                    
            }        
            var message = fCSV;
            $.get('save.php', {message:message}, function(data)	{
                    //alert('Сервер ответил: '+data);
            });
            //alert(fCSV);
        });
});