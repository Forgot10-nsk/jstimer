<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css">  
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script type="text/javascript" src="script.js"></script>
		<title>Таймер 45/15</title>
	</head>
	<body class="back_dark">
		<div id="lbInterval">Текущий интервал:</div><br/>
		<div class="progressBar"><div style="width:70px;" class="progress red"></div></div><br/>
		<div class="progressBar"><div style="width:45%;" class="progress green"></div></div><br/>
		<button id="btStart">Start</button>
		<button id="btStop" disabled>Stop</button>
		<button id="btTest">Test</button>
		<div id="lbTest">Тест</div>
		<br/>
                <?php
                /*
                    <input type="radio" name="timerMode" value ="0" checked>45 сек / 15 сек<br/>             
                    <input type="radio" name="timerMode" value ="1">45 мин / 15 мин<br/>             
                    <input type="radio" name="timerMode" value ="2">40 мин / 20 мин<br/>             
                    <input type="radio" name="timerMode" value ="3">Режим 4<br/>             
                 */
                $modes = array(
/*                    array(1,45000,"Длинный",15000,"Короткий"),
                    array(0,45*1000*60,"Работа",15*1000*60,"Отдых"),
                    array(0,40*1000*60,"Работа",20*1000*60,"Отдых"),
                    array(0,30*1000*60,"Работа",30*1000*60,"Отдых"),*/
                    array(45000,    15000,      "Длинный","Короткий",1),
                    array(45*1000*60,15*1000*60,"Работа","Отдых",0),
                    array(40*1000*60,20*1000*60,"Работа","Отдых",0),
                    array(30*1000*60,30*1000*60,"Работа","Отдых",0)                    
                    );

                //$arr = array('test'=>'123','key'=>'value');
                $js_obj = json_encode($modes);
                print "<script language='javascript'>var modes=$js_obj;/* alert(modes[0]);*/</script>";

                $i = 0;
                for ($i = 0; $i < count($modes); $i++)
                {
                    echo '<input type="radio" name="timerMode" value ="'.$i.'"';
                    if($modes[$i][4]===1)
                        echo "checked";
                    echo '>'.($modes[$i][0]/1000.0).' сек / '.($modes[$i][1]/1000.0).' сек<br/>';
                }
                ?>
	</body>
</html>