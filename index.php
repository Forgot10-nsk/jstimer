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
            <?php
                /*
                csv:
                    silent
                    beginFrom
                    timerMode
                    mode0
                    mode1
                    ...
                */
                $silent = 1;
                $beginFrom = 0;
                $timerMode = 0;
                $timerFreq = 1;
                $modes = array();
                if (($handle = fopen("config.csv", "r")) !== FALSE) 
                {
                    if(($data = fgetcsv($handle, 5, ",")) !== FALSE) 
                    {//silent
                        $silent = $data[0];
                    }
                    if(($data = fgetcsv($handle, 5, ",")) !== FALSE) 
                    {//beginFrom
                        $beginFrom = $data[0];
                    }
                    if(($data = fgetcsv($handle, 5, ",")) !== FALSE) 
                    {//$timerMode
                        $timerMode = $data[0];
                    }
                    if(($data = fgetcsv($handle, 5, ",")) !== FALSE) 
                    {//$timerMode
                        $timerFreq = $data[0];
                    }
                    while(($data = fgetcsv($handle, 1000, ",")) !== FALSE) 
                    {
                        eval("\$data[0] =$data[0];");
                        eval("\$data[1] =$data[1];");
                        $modes[] = $data;
                    }
                    fclose($handle);
                }
                else 
                {
                    echo "Файл настроек не найден\n";
                }
                $js_obj = json_encode($modes);
                print "<script language='javascript'>var modes=$js_obj; var d = !$beginFrom; var mode = $timerMode; var timerFreq = $timerFreq;</script>";
                
            ?>
            <div class="container" width="250px">
		<div id="lbSecondsL">Прошло:&nbsp;</div>
		<div id="lbSeconds">0</div>
		<div id="lbIntervalL">Интервал:&nbsp;</div>
		<div id="lbInterval"> </div><br/>
		<div id="pbInterval" class="progressBar">
                    <div style="width:0%;" class="progress"></div>
                    <div class="progressLabel"></div>
                </div>
		<button id="btStart">Start</button>
		<button id="btStop" disabled>Stop</button>
		<button id="btPause" disabled>Pause</button>
		<br/>               
                <input type="checkbox" name="silent" id="cbSilent" <?php if($silent) echo "checked";?>><label for="cbSilent">Silent</label><br/>
                <div class="container">
                    Начать с интервала:<br/>
                    <input type="radio" name="beginFrom" value ="0" <?php if(!$beginFrom) echo "checked";?>>Первый<br/>
                    <input type="radio" name="beginFrom" value ="1" <?php if($beginFrom) echo "checked";?>>Второй<br/>
                </div><br/>
                <?php
                $i = 0;
                for ($i = 0; $i < count($modes); $i++)
                {
                    echo '<input type="radio" name="timerMode" value ="'.$i.'"';
                    if($i==$timerMode)
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
		<button id="btSave">Сохранить настройки</button>
            </div>
	</body>
</html>