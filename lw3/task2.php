<?php

function getQueryStringParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name] : null;
}

header("Content-Type: text/plain");
$leng = 0;
$arg = getQueryStringParameter('identifier');
if ($arg <> null) 
{
    $leng = strlen($arg);
    $res = 0;  //переменная подсчёта
}
for ($i = 0; $i < $leng; $i++) 
{
    if (ctype_alpha($arg[$i]) or is_numeric($arg[$i]) and $i <> 0) 
    {
        $res++;  //цикл for, условие проверки на букву или число в строке arg
    }
}                                                                       
if ($leng === 0) 
{
    echo 'Error: you didn"t enter anything';  //вывод сообщения о том, что пользователь ничего не ввёл
}
elseif ($res === $leng) 
{
    echo 'Yes';  //вывод Yes
}
else 
{
    echo 'No, you entered a character that does not comply with the SR3 rule';  //вывод No
}


//Check Identifier
