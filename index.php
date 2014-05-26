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
            <div class="container" width="250px">
		<div id="lbSecondsL">Прошло:&nbsp;</div>
		<div id="lbSeconds">0</div>
		<div id="lbIntervalL">Текущий интервал:&nbsp;</div>
		<div id="lbInterval"></div><br/>
		<div id="pbInterval" class="progressBar"><div style="width:0%;" class="progress"></div></div>
		<button id="btStart">Start</button>
		<button id="btStop" disabled>Stop</button>
		<button id="btPause" disabled>Pause</button>
		<br/>               
                <input type="checkbox" name="silent" id="cbSilent"><label for="cbSilent">Silent</label><br/>
                <div class="container">
                    Начать с интервала:<br/>
                    <input type="radio" name="beginFrom" value ="0" checked>Первый<br/>
                    <input type="radio" name="beginFrom" value ="1">Второй<br/>
                </div><br/>
                <?php
                $modes = array(
                    array(15,5,"Длинный","Короткий",1),
                    array(45,15,"Длинный","Короткий",0),
                    array(45*60,15*60,"Работа","Отдых",0),
                    array(40*60,20*60,"Работа","Отдых",0),
                    array(30*60,30*60,"Работа","Отдых",0)                    
                );
                $js_obj = json_encode($modes);
                print "<script language='javascript'>var modes=$js_obj;/* alert(modes[0]);*/</script>";
                $i = 0;
                for ($i = 0; $i < count($modes); $i++)
                {
                    echo '<input type="radio" name="timerMode" value ="'.$i.'"';
                    if($modes[$i][4]===1)
                        echo "checked";
                    $time1 = $modes[$i][0];
                    $time2 = $modes[$i][1];
                    $int1 = 'сек';
                    $int2 = 'сек';
                    if($time1 >= 60)
                    {
                        $time1 /= 60.0;
                        $int1 = 'мин';                        
                    }
                    if($time2 >= 60)
                    {
                        $time2 /= 60.0;
                        $int2 = 'мин';                        
                    }
                    echo '>'.$time1.' '.$int1.' / '.$time2.' '.$int2.'<br/>';
                }
                ?>
            </div>
	</body>
</html>