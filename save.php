<?php
    if(isset($_GET['message']))
    {
        if (($handle = fopen("config.csv", "w")) !== FALSE) 
        {
           if (fwrite($handle,$_GET['message']))
                echo "1";
            else
                echo "0";
        }        
        fclose($handle);
    }
?>