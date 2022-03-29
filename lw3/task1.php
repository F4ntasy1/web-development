<?php
header("Content-Type: text/plain");
$text = trim($_GET['text'], );
$array = explode(' ', $text);
$leng = count($array);
for ($i = 0; $i < $leng; $i++) 
{
    if ($array[$i]) 
    {
        print_r($array[$i] . ' ');
    }
}


//Remove Extra Blanks