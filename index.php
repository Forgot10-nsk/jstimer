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
                <input type="radio" name="timerMode" value ="0" checked>45 сек / 15 сек<br/>             
                <input type="radio" name="timerMode" value ="1">45 мин / 15 мин<br/>             
                <input type="radio" name="timerMode" value ="2">40 мин / 20 мин<br/>             
                <input type="radio" name="timerMode" value ="3">Режим 4<br/>             
	</body>
</html>